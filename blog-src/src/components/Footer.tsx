export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t line-soft mt-12">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <div className="clay-card p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm t3">
              &copy; {year} 我的博客 · 保留所有权利
            </div>

            <div className="flex items-center gap-3 text-sm t4 flex-wrap justify-center">
              <span>Powered by</span>
              <a href="https://react.dev" target="_blank" rel="noreferrer" className="text-primary-500 hover:text-primary-600 transition-colors">
                React 18
              </a>
              <span className="opacity-40">|</span>
              <a href="https://vitejs.dev" target="_blank" rel="noreferrer" className="text-primary-500 hover:text-primary-600 transition-colors">
                Vite
              </a>
              <span className="opacity-40">|</span>
              <a href="https://tailwindcss.com" target="_blank" rel="noreferrer" className="text-primary-500 hover:text-primary-600 transition-colors">
                Tailwind CSS
              </a>
              <span className="opacity-40">|</span>
              <a
                href="https://github.com/Kaneki1211/Kaneki1211.github.io"
                target="_blank"
                rel="noreferrer"
                className="text-primary-500 hover:text-primary-600 transition-colors"
              >
                GitHub Pages
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
