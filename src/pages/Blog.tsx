import { blogPosts } from '../data/blogPosts'
import { BlogCard } from '../components/BlogCard'

export function Blog() {
  const sorted = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <>
      <header className="page-header">
        <div className="page-header-prefix">// LOG / BLOG.STREAM</div>
        <h2 className="page-header-title">Blog Posts</h2>
        <p className="page-header-subtitle">
          {blogPosts.length} entries · projects, infrastructure &amp; notes
        </p>
      </header>

      <div className="blog-page">
        <div className="blog-list">
          {sorted.map(post => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </>
  )
}
