"use client"

import { useEffect, useState } from 'react'

/**
 * Thin "deploy progress" bar pinned to the very top of the viewport —
 * fills 0→100% as the page scrolls. Decorative; hidden from a11y tree.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-0.5" aria-hidden="true">
      <div
        className="h-full bg-accent shadow-[0_0_8px_rgba(34,211,238,0.7)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
