import useNavigation from '../../hooks/useNavigation'
import useTheme from '../../hooks/useTheme'
import { ProgressBarContainer, ProgressBar } from './styles'

function ScrollProgress (): JSX.Element {
  const { theme, isDarkTheme } = useTheme()

  const { progressBarStyle } = useNavigation(
    isDarkTheme ? theme.gray : theme.primary
  )

  return (
    <ProgressBarContainer bgColor={theme.secondary}>
      <ProgressBar style={progressBarStyle} />
    </ProgressBarContainer>
  )
}

export default ScrollProgress
