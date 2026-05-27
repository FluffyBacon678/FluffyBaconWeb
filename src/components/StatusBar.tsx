import { useEffect, useState } from 'react'

function formatTime(d: Date): string {
  return d.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

function formatUptime(ms: number): string {
  const totalSec = Math.floor(ms / 1000)
  const h = Math.floor(totalSec / 3600)
  const m = Math.floor((totalSec % 3600) / 60)
  const s = totalSec % 60
  return `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
}

export function StatusBar() {
  const [now, setNow] = useState(() => new Date())
  const [start] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const uptime = formatUptime(now.getTime() - start)

  return (
    <div className="status-bar" role="status" aria-label="System status">
      <div className="status-bar-left">
        <span><span className="status-dot" aria-hidden="true" />SYS: <span className="text-cyan">ONLINE</span></span>
        <span>SESSION: <span className="text-lime">{uptime}</span></span>
        <span>RACK: <span className="text-cyan">WARM</span></span>
      </div>
      <div className="status-bar-right">
        <span>LOC: <span className="text-magenta">IL</span></span>
        <span>NODE: FLUFFY-01</span>
        <span>{formatTime(now)} UTC+3</span>
      </div>
    </div>
  )
}
