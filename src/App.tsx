import { HashRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { ProjectDetail } from './pages/ProjectDetail'
import { Resume } from './pages/Resume'
import { Gallery } from './pages/Gallery'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/projects"    element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/resume"      element={<Resume />} />
          <Route path="/gallery"     element={<Gallery />} />
          <Route path="/blog"        element={<Blog />} />
          <Route path="/blog/:slug"  element={<BlogPost />} />
          <Route path="*"            element={<NotFound />} />
        </Routes>
      </Layout>
    </HashRouter>
  )
}
