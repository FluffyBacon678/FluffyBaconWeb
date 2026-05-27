import { useState } from 'react'
import { galleryItems, type GalleryItem, type GalleryCategory } from '../data/gallery'
import { getImageUrl } from '../utils/images'
import { ImageWithFallback } from './ImageWithFallback'

const ALL_CATEGORIES: GalleryCategory[] = ['Rack Work', 'Server Room', 'Setup', 'Field', 'Other']

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'All'>('All')
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  const usedCategories = Array.from(new Set(galleryItems.map(i => i.category)))
  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeCategory)

  function closeLightbox() { setLightbox(null) }

  return (
    <>
      <div className="gallery-filters">
        <button
          className={`filter-btn${activeCategory === 'All' ? ' active' : ''}`}
          onClick={() => setActiveCategory('All')}
        >
          All
        </button>
        {ALL_CATEGORIES.filter(c => usedCategories.includes(c)).map(cat => (
          <button
            key={cat}
            className={`filter-btn${activeCategory === cat ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
          No images in this category yet. Add images to public/images/ and update src/data/gallery.ts.
        </p>
      )}

      <div className="gallery-grid">
        {filtered.map(item => (
          <div
            key={item.id}
            className="gallery-item"
            onClick={() => setLightbox(item)}
            role="button"
            tabIndex={0}
            aria-label={`View: ${item.title}`}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setLightbox(item) }}
          >
            <ImageWithFallback
              src={getImageUrl(item.filename)}
              alt={item.title}
              fallbackText={item.title}
            />
            <div className="gallery-item-overlay">
              <div className="gallery-item-info">
                <div className="gallery-item-title">{item.title}</div>
                <div className="gallery-item-category">{item.category}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightbox && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <div
            className="lightbox-content"
            onClick={e => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">✕</button>
            <ImageWithFallback
              src={getImageUrl(lightbox.filename)}
              alt={lightbox.title}
              className="lightbox-img"
            />
            <div className="lightbox-info">
              <div className="lightbox-info-title">{lightbox.title}</div>
              <div className="lightbox-info-desc">{lightbox.description}</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
