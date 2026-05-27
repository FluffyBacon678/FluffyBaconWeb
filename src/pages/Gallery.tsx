import { galleryItems } from '../data/gallery'
import { GalleryGrid } from '../components/GalleryGrid'

export function Gallery() {
  return (
    <>
      <header className="page-header">
        <div className="page-header-prefix">// ARCHIVE / PHOTOS</div>
        <h2 className="page-header-title">Gallery</h2>
        <p className="page-header-subtitle">
          {galleryItems.length} files · rack work, server rooms, setup &amp; field
        </p>
      </header>

      <div className="gallery-page">
        <GalleryGrid />
      </div>
    </>
  )
}
