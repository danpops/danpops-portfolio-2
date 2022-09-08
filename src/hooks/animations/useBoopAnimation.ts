import { useEffect, useState } from 'react'
import { useSpring } from 'react-spring'
import { ISpringAnimationItems } from '../../types'
const TIMING = 800
const useBoopAnimation = (): ISpringAnimationItems => {
  const [isBooped, setIsBooped] = useState(false)
  const style: any = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? `translate(0px, 0px)
         rotate(0deg)
         scale(1.2)`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: {
      tension: 100,
      friction: 10
    }
  })
  const onMouseEnter = (): void => setIsBooped(true)

  useEffect(() => {
    if (!isBooped) {
      return
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false)
    }, TIMING)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isBooped])

  return { onMouseEnter, style }
}

export default useBoopAnimation
