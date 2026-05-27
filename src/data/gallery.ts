export type GalleryCategory = 'Rack Work' | 'Server Room' | 'Setup' | 'Field' | 'Other'

export interface GalleryItem {
  id: string
  filename: string  // filename inside public/images/
  title: string
  category: GalleryCategory
  description: string
  date: string
}

// To add a new gallery image:
// 1. Put the image file in public/images/
// 2. Copy one object block below, change all fields, use the exact filename.
export const galleryItems: GalleryItem[] = [
  {
    id: 'rack-thumbs',
    filename: 'IMG20240716160318.jpg',
    title: 'Rack Status: Thumbs Up',
    category: 'Rack Work',
    description: 'Inside the rack, working with the patch panel. Yellow and purple cables, Cisco gear up top, Dell EMC below.',
    date: '2024-07-16',
  },
  {
    id: 'rack-reach',
    filename: 'IMG20240529164831.jpg',
    title: 'Reaching Into The Backplane',
    category: 'Rack Work',
    description: 'Working inside the rack interior — green status LEDs, fan housings, and a tangle of cables.',
    date: '2024-05-29',
  },
  {
    id: 'rack-selfie-cheek',
    filename: 'IMG20250131145641.jpg',
    title: 'Cable Run Break',
    category: 'Rack Work',
    description: 'Selfie next to the rack mid-cable-run. Fire extinguisher in frame, as always.',
    date: '2025-01-31',
  },
  {
    id: 'rack-selfie-side',
    filename: 'IMG20250131145633.jpg',
    title: 'Close Quarters',
    category: 'Rack Work',
    description: 'Inside the rack with green and grey patch cables visible.',
    date: '2025-01-31',
  },
  {
    id: 'rack-selfie-green',
    filename: 'IMG20250131145608.jpg',
    title: 'Behind The Switch',
    category: 'Rack Work',
    description: 'Working behind the equipment — green cable bundles in view.',
    date: '2025-01-31',
  },
  {
    id: 'server-room-laptop',
    filename: '20240707_165007.jpg',
    title: 'On-site Diagnostics',
    category: 'Server Room',
    description: 'Server room — laptop in hand, diagnostics on a Dell PowerEdge. Color-coded cables everywhere.',
    date: '2024-07-07',
  },
  {
    id: 'server-room-2',
    filename: '20240707_165022.jpg',
    title: 'Equipment Survey',
    category: 'Server Room',
    description: 'Walking the row, surveying equipment status.',
    date: '2024-07-07',
  },
  {
    id: 'server-room-3',
    filename: '20240707_165025.jpg',
    title: 'Cable Inspection',
    category: 'Server Room',
    description: 'Tracing a cable run in the back of the rack.',
    date: '2024-07-07',
  },
  {
    id: 'server-room-4',
    filename: '20240707_165541.jpg',
    title: 'Rack Survey',
    category: 'Server Room',
    description: 'Equipment overview from the front aisle.',
    date: '2024-07-07',
  },
  {
    id: 'desk-setup',
    filename: 'IMG_20210415_164405.jpg',
    title: 'Home Base',
    category: 'Setup',
    description: 'The main workstation. Ultrawide monitor, mechanical keyboard, RGB PC, and Ren the cat on the right.',
    date: '2021-04-15',
  },
  {
    id: 'field-mountain',
    filename: 'IMG20240504142829.jpg',
    title: 'Out of the Rack',
    category: 'Field',
    description: 'Mountains. Sometimes you need to leave the server room.',
    date: '2024-05-04',
  },
]
