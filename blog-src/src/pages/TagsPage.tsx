import { Link } from 'react-router-dom'
import { tags } from '../data/blog'
import { encodeSlug, usePageTitle } from '../lib/hooks'

export default function TagsPage() {
  usePageTitle('标签 - Kaneki Blog')

  return (
    <div className="animate-fade-in">
      <div className="clay-card p-8 mb-8 text-center">
        <h1 className="text-3xl font-bold t1 mb-2">标签</h1>
        <p className="t3">共 {tags.length} 个标签</p>
      </div>

      <div className="clay-card p-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {tags.map((tag) => (
            <Link
              key={tag.name}
              to={`/tags/${encodeSlug(tag.name)}`}
              className="clay-tag px-4 py-2 hover:text-primary-600"
              style={{ fontSize: `${tag.size}px` }}
            >
              {tag.name}
              <span className="t4 ml-1.5">({tag.count})</span>
            </Link>
          ))}
        </div>
      </div>

      <p className="mt-6 text-center text-xs t4">字号大小表示该标签下的文章数量</p>
    </div>
  )
}
