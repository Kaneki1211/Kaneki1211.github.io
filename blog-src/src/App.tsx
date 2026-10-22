import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import ArchivesPage from './pages/ArchivesPage'
import ArchiveDetailPage from './pages/ArchiveDetailPage'
import CategoriesPage from './pages/CategoriesPage'
import CategoryDetailPage from './pages/CategoryDetailPage'
import TagsPage from './pages/TagsPage'
import TagDetailPage from './pages/TagDetailPage'
import GamesPage from './pages/GamesPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="posts/:slug" element={<PostPage />} />
        <Route path="archives" element={<ArchivesPage />} />
        <Route path="archives/:key" element={<ArchiveDetailPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="categories/:name" element={<CategoryDetailPage />} />
        <Route path="tags" element={<TagsPage />} />
        <Route path="tags/:name" element={<TagDetailPage />} />
        <Route path="games" element={<GamesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
