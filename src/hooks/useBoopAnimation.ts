import { useState } from 'react'
import { useSpring } from 'react-spring'
import { IBoopAnimationReturn } from '../types'

const useBoopAnimation = (): IBoopAnimationReturn => {
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
  const onMouseLeave = (): void => setIsBooped(false)

  return { onMouseEnter, onMouseLeave, style }
}

export default useBoopAnimation
