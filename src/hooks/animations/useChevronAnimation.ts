import { useSpring } from 'react-spring'
import { ISpringAnimationItems } from '../../types'

const useChevronAnimation = (expanded: boolean): ISpringAnimationItems => {
  const style: any = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: expanded
      ? `rotate(0deg)
         scale(1)
         scaleX(-1)`
      : `rotate(-180deg)
         scale(1)
         scaleX(-1)`,
    config: {
      tension: 50,
      friction: 2
    }
  })

  return { style }
}

export default useChevronAnimation
