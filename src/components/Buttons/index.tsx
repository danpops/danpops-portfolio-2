import { useState } from 'react'
import { useSpring } from 'react-spring'
import { PrimaryButton } from './styles'

interface IAnimatedButton {
  x?: number
  y?: number
  rotation?: number
  scale?: number
  timing?: number
  label: string
  color: string
  bgColor: string
}

const AnimatedButton = ({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1.2,
  label,
  color,
  bgColor
}: IAnimatedButton): JSX.Element => {
  const [isBooped, setIsBooped] = useState(false)
  const style: any = useSpring({
    display: 'inline-block',
    backfaceVisibility: 'hidden',
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: {
      tension: 100,
      friction: 10
    }
  })
  const triggerMouseEnter = (): void => setIsBooped(true)
  const triggerMouseLeave = (): void => setIsBooped(false)

  return (
    <PrimaryButton
      color={color}
      bgColor={bgColor}
      onMouseEnter={triggerMouseEnter}
      onMouseLeave={triggerMouseLeave}
      style={style}
    >
      {label}
    </PrimaryButton>
  )
}

export default AnimatedButton
