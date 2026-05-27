import { newsItems } from '../data/news'

export function NewsFeed() {
  return (
    <div className="news-feed">
      <div className="news-feed-title">Activity Log</div>
      {newsItems.map((item, i) => (
        <div className="news-item" key={i}>
          <span className="news-prompt" aria-hidden="true">$</span>
          <span className="news-date">[{item.date}]</span>
          <span className="news-text">{item.text}</span>
        </div>
      ))}
    </div>
  )
}
