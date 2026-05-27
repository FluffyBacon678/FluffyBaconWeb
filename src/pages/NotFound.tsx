import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-code">404</div>
      <h2 className="not-found-title">Page not found</h2>
      <p className="not-found-text">
        This page doesn't exist. You may have followed a broken link.
      </p>
      <Link to="/" className="btn btn-primary" style={{ marginTop: 8 }}>
        ← Go home
      </Link>
    </div>
  )
}
