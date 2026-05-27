import type { ReactNode } from 'react'

interface Props {
  title?: string
  children: ReactNode
  className?: string
}

export function Panel({ title, children, className }: Props) {
  return (
    <div className={`panel ${className ?? ''}`}>
      {title && <div className="panel-title">{title}</div>}
      <div className="panel-body">{children}</div>
    </div>
  )
}
