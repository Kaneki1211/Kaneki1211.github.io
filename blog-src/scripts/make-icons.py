#!/usr/bin/env python3
"""
从头像生成全套位图图标（favicon PNG / ICO / apple-touch-icon）。

处理链：
  1. 近白掩膜 → 形态学开运算 → 只把「大块白底」判为背景（牙齿、眼睛高光这类细小白点保留）
  2. 与近白掩膜求交，避免膨胀时啃到人物
  3. 高斯羽化，取反得到 alpha
  4. 圆角方形裁剪（圆角半径 22%，接近 iOS 图标比例）
  5. LANCZOS 缩放到各尺寸输出

依赖：pip install pillow
用法：python scripts/make-icons.py  （在 blog-src 目录下执行）
"""

from PIL import Image, ImageDraw, ImageFilter
import os

SRC = "public/images/kaneki.jpg"
OUT = "public"

WHITE_MIN = 230        # 近白判定：三通道都 ≥ 这个值
WHITE_SPREAD = 14      # 且最大最小通道差 ≤ 这个值（排除浅灰/浅黄）
ERODE = 9              # 腐蚀核：小于它的白色细节会被判为前景
DILATE = 13            # 膨胀核：把白底向外吃一圈，去掉交界处的白边
FEATHER = 0.8          # 羽化半径
RADIUS_RATIO = 0.22    # 圆角半径占边长的比例


def build_alpha(img: Image.Image) -> Image.Image:
    w, h = img.size
    r, g, b = img.split()

    white = Image.new("L", (w, h), 0)
    wp, rp, gp, bp = white.load(), r.load(), g.load(), b.load()
    for y in range(h):
        for x in range(w):
            R, G, B = rp[x, y], gp[x, y], bp[x, y]
            if R >= WHITE_MIN and G >= WHITE_MIN and B >= WHITE_MIN and max(R, G, B) - min(R, G, B) <= WHITE_SPREAD:
                wp[x, y] = 255

    # 开运算：腐蚀掉细小白色，再膨胀还原
    opened = white.filter(ImageFilter.MinFilter(ERODE)).filter(ImageFilter.MaxFilter(ERODE))
    grown = opened.filter(ImageFilter.MaxFilter(DILATE))
    # 只在原本是白色的像素上生长
    background = Image.composite(grown, Image.new("L", (w, h), 0), white)
    background = background.filter(ImageFilter.GaussianBlur(FEATHER))

    return Image.eval(background, lambda v: 255 - v)


def rounded_alpha(size: int, radius_ratio: float = RADIUS_RATIO) -> Image.Image:
    """4 倍超采样画圆角遮罩，缩小后边缘是灰阶，天然抗锯齿"""
    scale = 4
    big = size * scale
    mask = Image.new("L", (big, big), 0)
    ImageDraw.Draw(mask).rounded_rectangle(
        (0, 0, big - 1, big - 1), radius=int(big * radius_ratio), fill=255
    )
    return mask.resize((size, size), Image.LANCZOS)


def main() -> None:
    img = Image.open(SRC).convert("RGB")
    alpha = build_alpha(img)

    rgba = img.convert("RGBA")
    rgba.putalpha(alpha)

    transparent = alpha.histogram()[0] / (img.size[0] * img.size[1])
    print(f"背景透明：{transparent * 100:.1f}%")

    sizes = {"favicon-16.png": 16, "favicon-32.png": 32, "favicon-48.png": 48,
             "apple-touch-icon.png": 180}

    for name, size in sizes.items():
        # apple-touch-icon 由 iOS 自己裁圆角，这里保持不透明、不裁
        if name.startswith("apple-touch"):
            img.resize((size, size), Image.LANCZOS).save(os.path.join(OUT, name), optimize=True)
        else:
            out = rgba.resize((size, size), Image.LANCZOS)
            corner = rounded_alpha(size)
            a = out.split()[-1]
            out.putalpha(Image.composite(a, Image.new("L", (size, size), 0), corner))
            out.save(os.path.join(OUT, name), optimize=True)
        print(f"{name}: {os.path.getsize(os.path.join(OUT, name))} B")

    ico = rgba.resize((48, 48), Image.LANCZOS)
    a48 = ico.split()[-1]
    ico.putalpha(Image.composite(a48, Image.new("L", (48, 48), 0), rounded_alpha(48)))
    ico.save(os.path.join(OUT, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
    print(f"favicon.ico: {os.path.getsize(os.path.join(OUT, 'favicon.ico'))} B")


if __name__ == "__main__":
    main()
