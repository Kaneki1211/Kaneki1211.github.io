/**
 * 全站唯一数据源。
 *
 * 源 Nuxt 项目里这些数据分散硬编码在 8 个页面 + 17 个组件中，互相还不一致
 * （首页 8 篇、侧边栏写死 23 篇、分类 count 虚高、归档详情页取不到值）。
 * 迁移后统一收敛到这里，所有页面 / 侧边栏 / 搜索 / 归档全部由它派生。
 */

export interface Article {
  slug: string
  title: string
  excerpt: string
  cover?: string
  category: string
  /** YYYY-MM-DD */
  date: string
  /** HH:mm */
  time?: string
  updateDate?: string
  tags: string[]
  /** 正文 HTML（本地静态数据，非用户输入） */
  content: string
}

export interface CategoryGroup {
  name: string
  count: number
  articles: Article[]
  tint: string
  iconColor: string
}

export interface TagItem {
  name: string
  count: number
  size: number
}

export interface ArchiveMonth {
  /** 1-12 */
  month: number
  /** YYYY-MM */
  key: string
  articles: Article[]
}

export interface ArchiveYear {
  year: number
  count: number
  months: ArchiveMonth[]
}

const UNSPLASH = 'https://images.unsplash.com/'

const raw: Article[] = [
  {
    slug: '1ef282fd',
    title: '在礼堂看了两场校合唱团的专场演出',
    excerpt:
      '因为是两个相似的演出，今天（16号）是合唱演出，明天（17号）是钢琴专场，我就决定把这两个放一个里面来分享了。其实今天还有其他的活动的。像是在南苑的体育馆，今晚还有篮球赛决赛的...',
    cover: `${UNSPLASH}photo-1514320291840-2e0a9bf2a9ae?w=1200&h=600&fit=crop`,
    category: '日记',
    date: '2026-05-17',
    time: '20:44',
    updateDate: '2026-05-17',
    tags: ['随笔', '校园生活'],
    content: `
      <h2>昨天周五，在到梦空间上看到了这周末有好多有意思的事情，于是就报了两场</h2>
      <p>因为是两个相似的演出，今天（16号）是合唱演出，明天（17号）是钢琴专场，我就决定把这两个放一个里面来分享了。其实今天还有其他的活动的。像是在南苑的体育馆，今晚还有篮球赛决赛的，我就在这两个之间做了决定，还是决定去看这个演出了。</p>
      <h3>5月16日晚上，观看了「云海流音」艺术合唱团专场演出</h3>
      <p>下午写了会儿物理作业到5点48，然后就急忙去食堂吃饭了，因为说的是6点就开始了。到食堂了发现时间来不及了，就往礼堂去了。礼堂门口依旧是醒目的海报图片，基本上每次一有活动，这个地方就会提前布置这样的海报，怪好的。</p>
      <blockquote>「云海流音」云帆合唱团海报，也就是封面图</blockquote>
      <p>进场前还是惯例，会有一个纪念门票，只是每次不同的活动形状、大小、材质可能不太一样罢了。像这一次拿到的就是一张正方形的纸，材质是那种滑滑的，我也叫不上来是什么，反正就是设计的不孬，还带折叠的，其实也不算门票啦这个，是一个节目单。</p>
      <h3>5月17日，看「烛光音乐会」合唱团钢琴专场</h3>
      <p>好的，现在时间给到我，5月17号19点30分，刚从礼堂回来。只看了一半其实，我跟小朱就回来了。今天确实就是钢琴专场，只有钢琴演奏，跟昨天不一样，昨天是歌唱和钢琴都有的。今天主要就是几位同学再演奏，很厉害的都是。</p>
      <p>每次看到别人拿上乐器，演奏的啷个好听，就很羡慕。然后下面就放一下刚才在礼堂拍的视频和照片，还是很不错的。他那个舞台上面摆的蜡烛形状的灯，怪有氛围感的。</p>
    `,
  },
  {
    slug: 'c64c595f',
    title: '与室友小朱去滨海新区再次看了一场海',
    excerpt:
      '封面图是昨天下午在学校湖边的亭子拍的，感觉很不错。怎么想到去滨海新区的海边的？今天早上睡的晚了1点半才睡，然后就睡到了中午11点半...',
    cover: `${UNSPLASH}photo-1507525428034-b723cf961d3e?w=1200&h=600&fit=crop`,
    category: '日记',
    date: '2026-05-04',
    time: '21:10',
    tags: ['假期记录', '校园生活'],
    content: `
      <h2>起因很简单，就是想去看看海</h2>
      <p>封面图是昨天下午在学校湖边的亭子拍的，感觉很不错。怎么想到去滨海新区的海边的？今天早上睡的晚了1点半才睡，然后就睡到了中午11点半，起来之后发现天很好，风也不大，就跟小朱说要不咱走一趟。</p>
      <p>出门前还是纠结了一会儿，主要是路上要一个多小时，而且这个季节的海边风还是挺凉的。最后是买了两个肉夹馍带上，想着到了海边坐着吃，结果到了才发现在风里根本咬不动。</p>
      <h3>到了之后</h3>
      <p>海还是那个海，人比上次少很多。我们沿着堤岸走了一段，找了个背风的位置坐着，一直坐到太阳下去。手机拍了不少照片，但海这个东西，拍出来总归是不如眼睛看到的那一下。</p>
      <blockquote>下次准备带个折叠椅，坐着比坐在石头上舒服太多了。</blockquote>
      <p>回程的公交上睡着了，差点坐过站。这大概就是今天全部的记录了。</p>
    `,
  },
  {
    slug: '4c6957d',
    title: '看了场民族歌剧《小二黑结婚》',
    excerpt:
      '观看演出前以及票的由来。钉钉的DING通知的，就是昨天中午11点，我们正在上建筑制图的课，然后手机就震了一下...',
    cover: `${UNSPLASH}photo-1507924538820-ede94a04019d?w=1200&h=600&fit=crop`,
    category: '日记',
    date: '2026-04-15',
    time: '22:05',
    tags: ['随笔', '校园生活'],
    content: `
      <h2>票是怎么来的</h2>
      <p>观看演出前以及票的由来。钉钉的 DING 通知的，就是昨天中午 11 点，我们正在上建筑制图的课，然后手机就震了一下。低头看了一眼，是学校发的演出票领取通知，说是数量有限先到先得。</p>
      <p>下了课就直接去了，还好，排在第十几个，领到了。位置在二楼靠右，视野不算最好，但看舞台整体也挺清楚的。</p>
      <h3>演出本身</h3>
      <p>《小二黑结婚》之前只在课本上见过名字，真看舞台版还是第一次。唱腔和我想的不太一样，比想象中更「活」，尤其是几个群戏段落，台上人来人往，反而一点不乱。</p>
      <p>中途有一段我走神了，主要是旁边的同学一直在小声讲解剧情，讲到后面自己也不太确定了，两个人就一起瞎猜。整体两个小时，比预想中过得快。</p>
    `,
  },
  {
    slug: 'fefa2933',
    title: '清明节假期的游玩记录',
    excerpt:
      '清明节第一天去了方特。室友在前两天讲在快手上买方特的票有大学生优惠，是团购那个页面的，79就能拿下...',
    cover: `${UNSPLASH}photo-1534511902651-6ab0ce131f2a?w=1200&h=600&fit=crop`,
    category: '日记',
    date: '2026-04-05',
    time: '19:30',
    tags: ['假期记录'],
    content: `
      <h2>第一天：方特</h2>
      <p>清明节第一天去了方特。室友在前两天讲在快手上买方特的票有大学生优惠，是团购那个页面的，79 就能拿下，比直接在官方买便宜不少。我们几个人凑了一下，就定了。</p>
      <p>人是真的多。八点半到门口，队伍已经绕了两圈。进去之后先冲了两个大项目，剩下的时间基本都花在排队上。有个室内的项目排队排了一个半小时，玩起来大概三分钟。</p>
      <h3>第二天：在宿舍躺平</h3>
      <p>第二天哪也没去，前一天走得太狠，腿都酸。中午起来点了个外卖，下午把攒了几天的剧看完了。假期嘛，不一定非要出门。</p>
      <p>第三天回去把作业补了，这就不细说了，总之假期结束得很没有仪式感。</p>
    `,
  },
  {
    slug: '1c3fc269',
    title: '春季开学第一周，记录一下吧',
    excerpt:
      '写在前面，今天是3月16号，转眼就过去寒假了。开学已经12天了，上一周是在学校度过的一个完整的周...',
    cover: `${UNSPLASH}photo-1541339907198-e08756dedf3f?w=1200&h=600&fit=crop`,
    category: '日常碎碎念',
    date: '2026-03-16',
    time: '23:12',
    tags: ['开学记录', '学习日常'],
    content: `
      <h2>开学第一周</h2>
      <p>写在前面，今天是 3 月 16 号，转眼就过去寒假了。开学已经 12 天了，上一周是在学校度过的一个完整的周，节奏比上学期要快一些，专业课一下子多了两门。</p>
      <h3>课表变满了</h3>
      <p>这学期的课表排得很满，早上八点的课有三天。第一周基本靠意志力起床，第二周开始好像身体也就接受了，闹钟响两下就能爬起来。</p>
      <p>建筑制图这门课比想象中有意思，虽然画图很费时间，但看着一张白纸慢慢被线条填满，还挺治愈的。就是尺子老是对不齐，画完一条线要检查三遍。</p>
      <h3>一点点小结</h3>
      <p>假期里定的一堆计划，目前完成了大概三分之一。剩下的先记在这儿，等下次开学前再翻出来看看完成了几条。</p>
    `,
  },
  {
    slug: 'fd3d1c45',
    title: '对朋友圈页面一堆bug忍无可忍，于是决定推翻重来',
    excerpt:
      '如标题所说，我真的不能忍受了，那就推倒重来！我写这句话的时候刚搞完，看样子应该是弄好了...',
    cover: `${UNSPLASH}photo-1461749280684-dccba630e2f6?w=1200&h=600&fit=crop`,
    category: '博客搭建与优化',
    date: '2026-02-12',
    time: '20:00',
    tags: ['博客搭建', '优化日志', '友链朋友圈'],
    content: `
      <h2>为什么推倒重来</h2>
      <p>如标题所说，我真的不能忍受了，那就推倒重来！我写这句话的时候刚搞完，看样子应该是弄好了。事情是这样的，友链朋友圈那个页面原本是在老模板上叠补丁叠出来的，改到后面连我自己都不敢动，一动就崩一片。</p>
      <h3>具体崩在哪儿</h3>
      <p>主要是三处：一是数据拉取失败之后没有兜底，整个容器直接空白；二是时间格式化写在了渲染循环里，滚动的时候卡得厉害；三是分页状态和 URL 没同步，刷新之后永远回到第一页。</p>
      <blockquote>经验：能用状态推导出来的东西，不要另外再存一份。</blockquote>
      <p>重写之后把所有状态收了一遍，分页交给 URL，列表渲染加了 key，失败的地方补了提示文案。目前跑了两天没出问题，就先这样。</p>
    `,
  },
  {
    slug: '7fa31238',
    title: '放寒假啦，记录一下啦来',
    excerpt:
      '我一定要赞扬一下…我们学校南门有一个超级超级好吃的炒饭，名为"牛逼炒饭"。真的我要给老板的摊位封神了...',
    cover: `${UNSPLASH}photo-1504674900247-0877df9cc836?w=1200&h=600&fit=crop`,
    category: '日常碎碎念',
    date: '2026-01-23',
    time: '18:40',
    tags: ['假期记录'],
    content: `
      <h2>先说吃的</h2>
      <p>我一定要赞扬一下……我们学校南门有一个超级超级好吃的炒饭，名为「牛逼炒饭」。真的我要给老板的摊位封神了，米饭粒粒分明，鸡蛋炒得特别香，加个火腿也就多两块钱。</p>
      <p>放假前一天晚上又去吃了一次，老板还认得我，说下学期见。这种小摊位，其实就是学校生活里很难替代的一部分。</p>
      <h3>然后是回家</h3>
      <p>第二天一早的高铁，车厢里全是拖行李箱的学生。到家已经下午了，家里猫胖了一圈，见了我先躲，过了两个小时才凑过来。</p>
      <p>寒假计划列了五条，看看能完成几条吧。</p>
    `,
  },
  {
    slug: '226415e',
    title: '完善了下友链朋友圈，提醒自己几处易错的地方',
    excerpt:
      '总结来说还是要去看着mccsjs大佬的文章去整，不然容易错，这里提醒几处你自己容易搞错的地方...',
    cover: `${UNSPLASH}photo-1555066931-4365d14bab8c?w=1200&h=600&fit=crop`,
    category: '博客搭建与优化',
    date: '2026-01-03',
    time: '21:30',
    tags: ['友链朋友圈', '博客搭建', 'Vercel'],
    content: `
      <h2>几个容易踩的坑</h2>
      <p>总结来说还是要去看着 mccsjs 大佬的文章去整，不然容易错，这里提醒几处你自己容易搞错的地方。</p>
      <h3>1. 跨域</h3>
      <p>友链的数据是从别人站点拉的，直接在前端 fetch 大概率被 CORS 挡住。要么走自己的代理，要么用别人的公共接口。这一点第一次搭的时候我完全没意识到，调试了半天以为是数据格式的问题。</p>
      <h3>2. 缓存</h3>
      <p>Vercel 的函数默认会缓存，改完代码发现数据没变，八成是缓存没清。加个时间戳参数就能绕过去，但这只是调试手段，正式环境还是老老实实配缓存策略。</p>
      <h3>3. 时间格式</h3>
      <p>不同博客输出的时间格式五花八门，有的带时区有的不带，直接 new Date 会出现 Invalid Date。写个兼容函数，先按几种常见格式试一遍，实在不行就显示原始字符串。</p>
    `,
  },
  {
    slug: '83163bb4',
    title: '利用 51.la 实现网站统计功能',
    excerpt: '思路来源来自 leleo886，把统计脚本挂上去之后，后台就能看到访问量、来源和停留时长了...',
    category: '博客搭建与优化',
    date: '2025-12-29',
    time: '19:20',
    tags: ['博客搭建', '51.la', '优化日志'],
    content: `
      <h2>为什么又要换统计</h2>
      <p>思路来源来自 leleo886。之前一直用不蒜子的免费接口，但那个只能显示一个数字，想知道来源和停留时长就没办法了。</p>
      <h3>接入步骤</h3>
      <p>51.la 的接入其实很轻：注册之后拿到一段 script，放进页面 head 里就行。它自己会处理上报，不需要额外写代码。想隐藏右下角的小图标的话，在后台设置里可以关掉。</p>
      <p>唯一需要注意的是，脚本最好加 defer，不然会稍微拖慢首屏。另外如果站点有多个入口页面，记得每个页面都放。</p>
    `,
  },
  {
    slug: 'da37acd4',
    title: '在Hexo Butterfly博客中添加说说功能',
    excerpt: 'Artitalk 和 LeanCloud 服务搭配起来，就能在静态博客里实现一个可以发短内容的「说说」页面...',
    category: '博客搭建与优化',
    date: '2025-12-28',
    time: '22:15',
    tags: ['Butterfly', '说说功能', 'LeanCloud', 'Artitalk', '博客搭建'],
    content: `
      <h2>静态博客也能「发动态」</h2>
      <p>Artitalk 和 LeanCloud 服务搭配起来，就能在静态博客里实现一个可以发短内容的「说说」页面。原理很简单：页面是静态的，数据存在 LeanCloud 里。</p>
      <h3>配置要点</h3>
      <p>LeanCloud 那边要新建一个应用，拿到 AppID 和 AppKey，然后在安全设置里把博客域名加到 Web 安全域名，不然请求会被拒绝。</p>
      <p>Butterfly 主题这边只需要新建一个页面，front-matter 里指定 type 为 artitalk，再把 id 和 key 填到主题配置里。剩下的事情 Artitalk 自己会做。</p>
      <blockquote>提醒：LeanCloud 国际版和国内版是两个后台，注册的时候别搞混。</blockquote>
    `,
  },
  {
    slug: 'h-test',
    title: 'H染测试',
    excerpt: '一篇用来测试样式渲染的草稿，主要验证代码块、引用、表格和图片在文章里的显示效果...',
    category: '测试与备忘',
    date: '2025-12-25',
    time: '15:00',
    tags: ['H染测试', '测试笔记'],
    content: `
      <h2>测试目的</h2>
      <p>一篇用来测试样式渲染的草稿，主要验证代码块、引用、表格和图片在文章里的显示效果。这些元素平时用得不多，但真出问题的时候很难查。</p>
      <h3>表格</h3>
      <p>下面这个表格用来验证边框和斑马纹：</p>
      <table>
        <thead><tr><th>元素</th><th>状态</th></tr></thead>
        <tbody>
          <tr><td>标题</td><td>正常</td></tr>
          <tr><td>引用</td><td>正常</td></tr>
          <tr><td>表格</td><td>待验证</td></tr>
        </tbody>
      </table>
      <h3>代码块</h3>
      <pre><code>const ok = document.querySelectorAll('.prose-warm h2').length &gt; 0</code></pre>
      <p>测试完这几点就差不多了，剩下的等真有内容了再说。</p>
    `,
  },
  {
    slug: 'c-language',
    title: 'C语言学习笔记',
    excerpt: 'scanf 和 printf 这两个函数的用法老是记混，这里整理一下格式占位符和常见错误...',
    category: '编程学习',
    date: '2025-12-20',
    time: '20:50',
    tags: ['C 语言', 'scanf', 'printf', '变量定义', '学习日常'],
    content: `
      <h2>输入输出</h2>
      <p>scanf 和 printf 这两个函数的用法老是记混，这里整理一下格式占位符和常见错误。</p>
      <p>printf 里用的是格式化字符串加参数，%d 是整数，%f 是浮点，%s 是字符串，%c 是单个字符。想输出百分号本身要写两个百分号。</p>
      <h3>scanf 的坑</h3>
      <p>scanf 第二个参数必须是地址，所以整型变量前面要加 &amp; 取地址符，这一点初学者最容易漏。另外字符串用 char 数组的时候不需要加 &amp;。</p>
      <pre><code>int n;
scanf("%d", &amp;n);
printf("n = %d\\n", n);</code></pre>
      <h3>变量定义</h3>
      <p>局部变量不初始化的时候内容是随机的，不要以为默认是 0。养成定义时就赋值的习惯，能省掉很多莫名其妙的 bug。</p>
    `,
  },
  {
    slug: 'cloudflare-speed',
    title: '利用 Cloudflare 加速博客访问',
    excerpt: '把域名接到 Cloudflare 之后，开代理模式，静态资源基本都能命中边缘节点，首屏快了不少...',
    category: '博客搭建与优化',
    date: '2025-12-20',
    time: '11:20',
    tags: ['Cloudflare', '优化日志', '页面优化'],
    content: `
      <h2>为什么用 Cloudflare</h2>
      <p>把域名接到 Cloudflare 之后，开代理模式，静态资源基本都能命中边缘节点，首屏快了不少。尤其是图片多的页面，差别很明显。</p>
      <h3>几个设置</h3>
      <p>SSL 模式选 Full (strict)，别选 Flexible，不然容易出现重定向循环。缓存级别可以拉到 Standard，另外把 Browser Cache TTL 设长一点，静态资源反正都带 hash。</p>
      <p>Rocket Loader 建议关掉，它会把所有 script 延迟执行，和有些前端的初始化逻辑容易打架。</p>
    `,
  },
  {
    slug: '8a7c34b3',
    title: '没有更新，汇报一下今天干了啥吧',
    excerpt: '最近确实没什么好写的，就随便汇报一下。上午把积攒的衣服洗了，中午煮了个面，下午看了会儿书...',
    category: '日常碎碎念',
    date: '2025-12-18',
    time: '23:40',
    tags: ['随笔'],
    content: `
      <h2>流水账</h2>
      <p>最近确实没什么好写的，就随便汇报一下。上午把积攒的衣服洗了，中午煮了个面，下午看了会儿书，晚上把博客的一个小样式问题修了修。</p>
      <p>这种日子过起来挺快的，一抬头天就黑了。有时候觉得记录的意义也就是在这儿：不然过完一周，回想起来是一片空白。</p>
      <p>明天打算去趟超市，把冰箱填一填。</p>
    `,
  },
  {
    slug: 'twikoo-setup',
    title: '添加 Twikoo 评论系统',
    excerpt: 'Twikoo 支持多种部署方式，我这里用的是 Vercel 一键部署，配置好之后前端只需要一行脚本...',
    category: '博客搭建与优化',
    date: '2025-12-15',
    time: '16:10',
    tags: ['Twikoo', '搜索框', '页面美化', 'Markdown'],
    content: `
      <h2>选型</h2>
      <p>Twikoo 支持多种部署方式，我这里用的是 Vercel 一键部署，配置好之后前端只需要一行脚本。相比自建后端，省了服务器也省了备案。</p>
      <h3>部署</h3>
      <p>在 Twikoo 的文档里点一键部署，绑到自己的仓库，等构建完成拿到域名。第一次访问会要求设置管理员密码，记得存好。</p>
      <h3>前端接入</h3>
      <p>页面里加一个容器，然后调用 twikoo.init，传入 envId 和 el 两个参数就行。想改样式的话，主题色可以通过配置项传进去，不用改 CSS。</p>
      <blockquote>评论区的 Markdown 是默认开启的，这点比之前用的方案舒服。</blockquote>
    `,
  },
]

/* ---------------------------------------------------------------- 派生数据 */

const stripHtml = (html: string) =>
  html
    .replace(/<pre[\s\S]*?<\/pre>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .replace(/\s+/g, '')

export const articles: Article[] = [...raw].sort((a, b) =>
  a.date === b.date ? (a.time ?? '') < (b.time ?? '') ? 1 : -1 : a.date < b.date ? 1 : -1,
)

export const articleBySlug = new Map(articles.map((a) => [a.slug, a]))

export function getArticle(slug: string): Article | undefined {
  return articleBySlug.get(slug)
}

/** 字数（去标签后的字符数） */
export function wordCount(article: Article): string {
  const len = stripHtml(article.content).length
  return len >= 1000 ? `${(len / 1000).toFixed(1)}k` : String(len)
}

/** 阅读时长，按 400 字/分钟估算 */
export function readTime(article: Article): string {
  const len = stripHtml(article.content).length
  return `${Math.max(1, Math.round(len / 400))}分钟`
}

const CATEGORY_TINT: Record<string, { tint: string; iconColor: string }> = {
  日记: { tint: 'bg-accent-100', iconColor: 'text-accent-500' },
  日常碎碎念: { tint: 'bg-warm-100', iconColor: 'text-warm-500' },
  博客搭建与优化: { tint: 'bg-primary-100', iconColor: 'text-primary-500' },
  测试与备忘: { tint: 'bg-sky-100', iconColor: 'text-sky-500' },
  编程学习: { tint: 'bg-emerald-100', iconColor: 'text-emerald-500' },
}

const CATEGORY_ORDER = ['博客搭建与优化', '日记', '日常碎碎念', '测试与备忘', '编程学习']

export const categories: CategoryGroup[] = CATEGORY_ORDER.map((name) => {
  const list = articles.filter((a) => a.category === name)
  return {
    name,
    count: list.length,
    articles: list,
    ...(CATEGORY_TINT[name] ?? { tint: 'bg-warm-100', iconColor: 'text-warm-500' }),
  }
}).filter((c) => c.count > 0)

export function getCategory(name: string): CategoryGroup | undefined {
  return categories.find((c) => c.name === name)
}

/** 标签云：按出现次数降序，字号在 12-18px 之间线性映射 */
export const tags: TagItem[] = (() => {
  const counter = new Map<string, number>()
  articles.forEach((a) => a.tags.forEach((t) => counter.set(t, (counter.get(t) ?? 0) + 1)))
  const max = Math.max(1, ...counter.values())
  const min = Math.min(...counter.values())
  return [...counter.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'zh-Hans-CN'))
    .map(([name, count]) => ({
      name,
      count,
      size: min === max ? 14 : Math.round(12 + ((count - min) / (max - min)) * 6),
    }))
})()

export function getTag(name: string): TagItem | undefined {
  return tags.find((t) => t.name === name)
}

export function articlesByTag(name: string): Article[] {
  return articles.filter((a) => a.tags.includes(name))
}

/** 归档：按年 → 月分组 */
export const archives: ArchiveYear[] = (() => {
  const byYear = new Map<number, Map<number, Article[]>>()
  articles.forEach((a) => {
    const [y, m] = a.date.split('-').map(Number)
    if (!byYear.has(y)) byYear.set(y, new Map())
    const months = byYear.get(y)!
    if (!months.has(m)) months.set(m, [])
    months.get(m)!.push(a)
  })
  return [...byYear.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, months]) => {
      const list: ArchiveMonth[] = [...months.entries()]
        .sort((a, b) => b[0] - a[0])
        .map(([month, items]) => ({
          month,
          key: `${year}-${String(month).padStart(2, '0')}`,
          articles: items,
        }))
      return { year, count: list.reduce((n, m) => n + m.articles.length, 0), months: list }
    })
})()

/** 侧边栏「归档」卡片用的扁平列表（最近的 6 个月） */
export const archiveShortcuts = archives
  .flatMap((y) => y.months.map((m) => ({ ...m, year: y.year })))
  .slice(0, 6)

export function getArchive(key: string): { title: string; articles: Article[] } | null {
  const [y, m] = key.split('-')
  const year = Number(y)
  if (!Number.isFinite(year)) return null
  const yearData = archives.find((a) => a.year === year)
  if (!yearData) return { title: `${year}年`, articles: [] }
  if (m === undefined || m === '') {
    return {
      title: `${year}年`,
      articles: yearData.months.flatMap((mm) => mm.articles),
    }
  }
  const month = Number(m)
  const monthData = yearData.months.find((mm) => mm.month === month)
  return { title: `${year}年${month}月`, articles: monthData?.articles ?? [] }
}

/** 上一篇（更新）/ 下一篇（更旧） */
export function getSiblings(slug: string) {
  const index = articles.findIndex((a) => a.slug === slug)
  if (index < 0) return { prev: undefined, next: undefined }
  return {
    prev: index > 0 ? articles[index - 1] : undefined,
    next: index < articles.length - 1 ? articles[index + 1] : undefined,
  }
}

/** 相关推荐：同分类或共享标签，按重合度排序 */
export function getRelated(slug: string, limit = 4): Article[] {
  const current = getArticle(slug)
  if (!current) return []
  return articles
    .filter((a) => a.slug !== slug)
    .map((a) => {
      const sharedTags = a.tags.filter((t) => current.tags.includes(t)).length
      const score = (a.category === current.category ? 2 : 0) + sharedTags
      return { article: a, score }
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score || (a.article.date < b.article.date ? 1 : -1))
    .slice(0, limit)
    .map((x) => x.article)
}

export function searchArticles(query: string): Article[] {
  const q = query.trim().toLowerCase()
  if (!q) return []
  return articles.filter((a) =>
    [a.title, a.excerpt, a.category, ...a.tags].some((field) => field.toLowerCase().includes(q)),
  )
}

/** 全站统计 */
export const siteStats = {
  articles: articles.length,
  categories: categories.length,
  tags: tags.length,
  words: (() => {
    const total = articles.reduce((sum, a) => sum + stripHtml(a.content).length, 0)
    return `${(total / 1000).toFixed(1)}k`
  })(),
  lastUpdated: articles[0]?.date ?? '',
}

/* ---------------------------------------------------------------- 其他站点页面 */

export interface GameLink {
  name: string
  desc: string
  href: string
  tag: string
  emoji: string
}

/** 仓库根目录里已有的独立页面，博客导航统一入口。
 *  href 不带 .html。 */
export const games: GameLink[] = [
  { name: 'AI 日报', desc: '今天 AI 圈发生了什么，一屏看完', href: 'ai-daily', tag: '简报', emoji: '📰' },
  { name: '婚礼请柬', desc: '一份会动的婚礼邀请函', href: 'wedding', tag: '页面', emoji: '💌' },
  { name: '干饭盲盒', desc: '今天吃什么，交给运气决定', href: 'eat', tag: '工具', emoji: '🍚' },
  { name: '猛鬼宿舍 · 微恐塔防', desc: '守住宿舍，别让它们进来', href: 'tower-defense', tag: '游戏', emoji: '👻' },
  { name: 'Aether 天气', desc: '把世界各地的此刻，收进口袋', href: 'aether-weather', tag: '工具', emoji: '🌤️' },
  { name: '末日生存', desc: '资源、选择与活下去', href: 'apocalypse', tag: '游戏', emoji: '🌒' },
  { name: '搭梯子', desc: '终于到达这里了', href: 'ladder', tag: '游戏', emoji: '🚩' },
]
