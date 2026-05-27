import { useEffect, useState } from 'react'

const CHARS = '!<>-_\\/[]{}—=+*^?#________01'

/**
 * Animates a string by scrambling random chars and "decrypting" to the target.
 * Inspired by the classic text-scramble effect popular on dev portfolios.
 */
export function useScramble(target: string, durationMs = 1200, startDelayMs = 200): string {
  const [output, setOutput] = useState(target.replace(/[^\s]/g, ' '))

  useEffect(() => {
    let raf = 0
    let start = 0
    let timeout = 0

    const tick = (now: number) => {
      if (!start) start = now
      const elapsed = now - start
      const progress = Math.min(elapsed / durationMs, 1)
      const revealCount = Math.floor(target.length * progress)

      let s = ''
      for (let i = 0; i < target.length; i++) {
        if (i < revealCount) {
          s += target[i]
        } else if (target[i] === ' ') {
          s += ' '
        } else {
          s += CHARS[Math.floor(Math.random() * CHARS.length)]
        }
      }
      setOutput(s)

      if (progress < 1) {
        raf = requestAnimationFrame(tick)
      } else {
        setOutput(target)
      }
    }

    timeout = window.setTimeout(() => {
      raf = requestAnimationFrame(tick)
    }, startDelayMs)

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timeout)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target])

  return output
}
