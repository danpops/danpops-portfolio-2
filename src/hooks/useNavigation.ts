import { useState, useEffect } from 'react'
import { IUseNavigation } from '../types'
import { getScrollPosition } from '../utils/getScrollPosition'

const useNavigation = (scrollColor?: string): IUseNavigation => {
  const [isTransparent, setTransparent] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isHidden, setHidden] = useState(false)

  const progressBarStyle = {
    width: `${scrollPosition}vw`,
    background: scrollColor ?? ''
  }

  const toggleNavbar = (): void => setExpanded(!expanded)
  const clickHero = (): void => setExpanded(false)

  useEffect(() => {
    const handleScroll = (): void => {
      const scrolled = getScrollPosition()
      const detectedScrollDown = scrolled > scrollPosition
      const isTopOfPage = window.scrollY < 100

      if (detectedScrollDown) {
        setExpanded(false)
      }

      setTransparent(isTopOfPage)
      setHidden(detectedScrollDown && !isTopOfPage)
      setScrollPosition(scrolled)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])

  return {
    progressBarStyle,
    isHidden,
    isTransparent,
    expanded,
    toggleNavbar,
    clickHero
  }
}

export default useNavigation
