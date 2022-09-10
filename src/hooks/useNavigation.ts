import { useState, useEffect } from 'react'
import { IUseNavigation } from '../types'
import { getScrollPosition } from '../utils/getScrollPosition'

const useNavigation = (scrollColor?: string): IUseNavigation => {
  const [isNavigationExpanded, setNavigationExpanded] = useState<boolean>(false)
  const [isHidden, setHidden] = useState<boolean>(false)
  const [isTransparent, setTransparent] = useState<boolean>(true)

  const [scrollPosition, setScrollPosition] = useState<number>(0)

  const progressBarStyle = {
    width: `${scrollPosition}vw`,
    background: scrollColor ?? ''
  }

  const clickHero = (): void => setNavigationExpanded(false)
  const toggleNavbar = (): void => setNavigationExpanded(!isNavigationExpanded)

  useEffect(() => {
    const handleScroll = (): void => {
      const currentPosition = getScrollPosition()
      const detectedScrollDown = currentPosition > scrollPosition
      const isTopOfPage = window.scrollY < 250
      const isNavDropdownHidden = detectedScrollDown && !isTopOfPage

      if (detectedScrollDown) {
        setNavigationExpanded(false)
      }

      setTransparent(isTopOfPage)
      setHidden(isNavDropdownHidden)
      setScrollPosition(currentPosition)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])

  return {
    clickHero,
    isHidden,
    isNavigationExpanded,
    isTransparent,
    progressBarStyle,
    toggleNavbar
  }
}

export default useNavigation
