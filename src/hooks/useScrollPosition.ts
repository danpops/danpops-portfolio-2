import { useState, useEffect } from 'react'
import { IUseScrollPosition } from '../types'

function getScrollPosition (): string {
  const scrollPx = document.documentElement.scrollTop
  const winHeightPx =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  const position = Math.floor((scrollPx / winHeightPx) * 100)
  const scrolled = `${position}%`

  return scrolled
}

const useScrollPosition = (scrollColor: string): IUseScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState('0%')

  function handleScroll (): void {
    const scrolled = getScrollPosition()
    setScrollPosition(scrolled)
  }

  const progressBarStyle = { width: scrollPosition, background: scrollColor }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { progressBarStyle }
}

export default useScrollPosition
