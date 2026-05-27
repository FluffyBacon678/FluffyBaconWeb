export interface NewsItem {
  date: string
  text: string
}

// To add a new news item, copy one object block and change date and text.
// Items are displayed in the order listed — newest first is recommended.
export const newsItems: NewsItem[] = [
  { date: '5/27/2026', text: 'Updated projects folder with new project.' },
  { date: '5/26/2026', text: 'Preparing site for GitHub Pages hosting.' },
  { date: '5/26/2026', text: 'Added resume, gallery, and blog sections.' },
  { date: '5/26/2026', text: 'Added project archive structure.' },
  { date: '5/26/2026', text: 'Started building this personal GitHub website.' },
]
