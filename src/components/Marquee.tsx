interface Props {
  items: string[]
}

/**
 * Infinite horizontal scrolling text strip. Items duplicated for seamless loop.
 */
export function Marquee({ items }: Props) {
  const doubled = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>
            <span className="marquee-sep">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
