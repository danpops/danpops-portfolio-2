import useNavigation from '../../hooks/useNavigation'
import useTheme from '../../hooks/useTheme'
import { ProgressBarContainer, ProgressBar } from './styles'

function ScrollProgress (): JSX.Element {
  const { theme } = useTheme()

  const { progressBarStyle } = useNavigation(theme.primary)

  return (
    <ProgressBarContainer bgColor={theme.shadow}>
      <ProgressBar style={progressBarStyle} />
    </ProgressBarContainer>
  )
}

export default ScrollProgress
