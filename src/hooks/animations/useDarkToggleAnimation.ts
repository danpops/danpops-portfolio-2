import { useSpring } from 'react-spring'
import { ISpringAnimationItems } from '../../types'
import useTheme from '../useTheme'

const useDarkToggleAnimation = (): ISpringAnimationItems => {
  const { isDarkTheme } = useTheme()
  const style: any = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isDarkTheme
      ? `rotate(0deg)
         scale(1)
         scaleX(-1)`
      : `rotate(360deg)
         scale(1)
         scaleX(-1)`,
    config: {
      tension: 20,
      friction: 5
    }
  })

  return { style }
}

export default useDarkToggleAnimation
