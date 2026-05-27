import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="blog-post-page">
        <Link to="/blog" className="blog-post-back">◀ /blog</Link>
        <h2>Post not found</h2>
        <p style={{ color: 'var(--text-muted)', marginTop: 12 }}>
          This post doesn't exist. It may have been moved or the URL is incorrect.
        </p>
      </div>
    )
  }

  const paragraphs = post.content.split('\n\n').filter(Boolean)

  return (
    <div className="blog-post-page">
      <Link to="/blog" className="blog-post-back">◀ /blog</Link>

      <h2 className="blog-post-title">{post.title}</h2>

      <div className="blog-post-meta">
        <span className="blog-post-date">{post.date}</span>
        {post.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      <div className="blog-post-content">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
    </div>
  )
}
