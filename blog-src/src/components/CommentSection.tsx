import { useState } from 'react'
import { usePersistentState } from '../lib/hooks'

interface Comment {
  id: number
  name: string
  date: string
  content: string
}

const SEED: Comment[] = [
  { id: 1, name: '访客小明', date: '2026-05-18', content: '写得真好！合唱团看起来很棒' },
  { id: 2, name: '同学小红', date: '2026-05-18', content: '我们学校也有类似的演出，下次一起去' },
  { id: 3, name: '路人甲', date: '2026-05-19', content: '钢琴专场听起来好棒！' },
]

const PALETTE = ['from-primary-400 to-accent-400', 'from-accent-400 to-warm-400', 'from-warm-400 to-primary-400']

export default function CommentSection({ slug }: { slug: string }) {
  // 源项目评论只存在组件内存里，刷新即丢；这里按文章分开存到 localStorage
  const [comments, setComments] = usePersistentState<Comment[]>(`blog-comments:${slug}`, SEED)
  const [text, setText] = useState('')

  const submit = () => {
    const content = text.trim()
    if (!content) return
    setComments([
      { id: Date.now(), name: '匿名用户', date: new Date().toISOString().slice(0, 10), content },
      ...comments,
    ])
    setText('')
  }

  return (
    <div className="clay-card p-6">
      <h3 className="text-xl font-bold t1 mb-6 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
        评论
        <span className="text-sm t4 font-normal">（{comments.length}）</span>
      </h3>

      <div className="mb-6">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') submit()
          }}
          rows={3}
          placeholder="说点什么吧…（Ctrl/Cmd + Enter 发送）"
          className="clay-input w-full px-4 py-3 resize-none"
        />
        <div className="flex items-center justify-between mt-3">
          <span className="text-xs t4">评论保存在本地浏览器，不会上传</span>
          <button
            type="button"
            onClick={submit}
            className="clay-btn px-6 py-2 bg-gradient-to-r from-primary-400 to-accent-400 text-white font-medium"
          >
            发表评论
          </button>
        </div>
      </div>

      <div className="space-y-3">
        {comments.map((comment, index) => (
          <div key={comment.id} className="p-4 rounded-2xl surface-muted animate-fade-in">
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`w-8 h-8 rounded-full bg-gradient-to-br ${PALETTE[index % PALETTE.length]} text-white text-xs font-bold flex items-center justify-center shrink-0`}
                aria-hidden="true"
              >
                {comment.name.slice(0, 1)}
              </span>
              <span className="font-medium t1 text-sm">{comment.name}</span>
              <span className="text-xs t4">{comment.date}</span>
            </div>
            <p className="text-sm t2 pl-11 break-words">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
