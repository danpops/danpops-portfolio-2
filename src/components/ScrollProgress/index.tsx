import { useEffect, useState } from 'react'
import styled from 'styled-components'
import useTheme from '../../hooks/useTheme'
import { IBackgroundColor } from '../../types'
import devices from '../../utils/devices'

const ProgressBarContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 0.5rem;
  z-index: 13;
  background-color: ${({ bgColor }: IBackgroundColor) => bgColor};

  @media ${devices.lg} {
    display: none;
  }
`

interface IProgressBar {
  width?: number
  bgColor: string
}

const windowHeight =
  document.documentElement.scrollHeight - document.documentElement.clientHeight

const ProgressBar = styled.div`
  ${({ bgColor, width = 0 }: IProgressBar) => `
    background-color: ${bgColor};
    width: ${width}%;
  `}
  height: 100%;
  transition: 0.5s ease;
`
function ScrollProgress (): JSX.Element {
  const { theme } = useTheme()

  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = (): void => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const width = Math.floor((scrollPosition / windowHeight) * 100)

  return (
    <ProgressBarContainer bgColor={theme.shadow}>
      <ProgressBar width={width} bgColor={theme.primary} />
    </ProgressBarContainer>
  )
}

export default ScrollProgress
