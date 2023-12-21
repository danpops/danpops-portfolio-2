import { useSpring } from 'react-spring'
import { ISpringAnimationItems } from '../../types'

const useChevronAnimation = (expanded: boolean): ISpringAnimationItems => {
  const style: any = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: expanded
      ? 'rotate(0deg)'
      : 'rotate(-180deg)',
    config: {
      tension: 180,
      friction: 12
    }
  })

  return { style }
}

export default useChevronAnimation
