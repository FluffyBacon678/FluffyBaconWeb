import { useState } from 'react'

interface Props {
  src: string
  alt: string
  className?: string
  fallbackText?: string
}

export function ImageWithFallback({ src, alt, className, fallbackText = 'Image coming soon' }: Props) {
  const [errored, setErrored] = useState(false)

  if (errored) {
    return (
      <div className={`image-fallback ${className ?? ''}`} role="img" aria-label={alt}>
        <span className="image-fallback-icon">📷</span>
        <span className="image-fallback-text">{fallbackText}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setErrored(true)}
    />
  )
}
