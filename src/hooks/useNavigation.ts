import { useEffect, useState } from 'react'

interface IUseNavigation {
  expanded: boolean
  isTransparent: boolean
  toggleNav: TToggleNav
}

type TToggleNav = (value: React.SetStateAction<boolean>) => void

const useNavigation = (): IUseNavigation => {
  const [isTransparent, setTransparent] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleNav: TToggleNav = () => setExpanded(!expanded)

  useEffect(() => {
    const onScroll = (): void => {
      const { scrollY } = window
      setTransparent(scrollY > 100)
    }
    window.addEventListener('scroll', onScroll)
  }, [])

  return {
    expanded,
    isTransparent,
    toggleNav
  }
}

export default useNavigation
