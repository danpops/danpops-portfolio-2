import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface IUseNavigation {
  expanded: boolean
  isTransparent: boolean
  setExpanded: Dispatch<SetStateAction<boolean>>
  toggleNavbar: () => void
}

const useNavigation = (): IUseNavigation => {
  const [isTransparent, setTransparent] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const toggleNavbar = (): void => setExpanded(!expanded)

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
    setExpanded,
    toggleNavbar
  }
}

export default useNavigation
