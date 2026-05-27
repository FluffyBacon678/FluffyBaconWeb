import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/blogPosts'

interface Props {
  post: BlogPost
}

export function BlogCard({ post }: Props) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card" aria-label={`Read: ${post.title}`}>
      <span className="blog-card-date">{post.date}</span>
      <span className="blog-card-title">{post.title}</span>
      <p className="blog-card-summary">{post.summary}</p>
      <div className="blog-card-tags">
        {post.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <span className="blog-card-readmore">Read post →</span>
    </Link>
  )
}
