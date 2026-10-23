import { Link } from 'react-router-dom'
import { usePageTitle } from '../lib/hooks'

export default function NotFoundPage() {
  usePageTitle('页面不存在 - Kaneki Blog')

  return (
    <div className="animate-fade-in">
      <div className="clay-card p-12 text-center">
        <p className="text-6xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-4">
          404
        </p>
        <h1 className="text-xl font-bold t1 mb-2">这个页面不存在</h1>
        <p className="text-sm t3 mb-6">
          地址可能输错了，或者这篇内容已经被删掉了。
          <br />
          放心，刷新一下不会白屏，路由本身是好的。
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="clay-btn px-5 py-2.5 bg-gradient-to-r from-primary-400 to-accent-400 text-white font-medium">
            回到首页
          </Link>
          <Link to="/archives" className="clay-btn px-5 py-2.5 t2 font-medium">
            翻归档
          </Link>
          <Link to="/tags" className="clay-btn px-5 py-2.5 t2 font-medium">
            看标签
          </Link>
        </div>
      </div>
    </div>
  )
}
