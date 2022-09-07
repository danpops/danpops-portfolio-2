import useTheme from '../../../hooks/useTheme'
import { INavigationToggle } from '../../../types'
import NavigationMenuButton from './NavigationMenuButton'
import { ToggleContainer, DarkModeToggleMobile } from './styles'

function NavigationToggle ({
  toggleNavbar,
  expanded
}: INavigationToggle): JSX.Element {
  const { theme, toggleColors } = useTheme()
  return (
    <ToggleContainer>
      <DarkModeToggleMobile
        size={29}
        color={theme.tertiary}
        onClick={toggleColors}
      />
      <NavigationMenuButton onClick={toggleNavbar} expanded={expanded} />
    </ToggleContainer>
  )
}

export default NavigationToggle
