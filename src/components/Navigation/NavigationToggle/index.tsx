import useDarkToggleAnimation from '../../../hooks/animations/useDarkToggleAnimation'
import useTheme from '../../../hooks/useTheme'
import { INavigationToggle } from '../../../types'
import NavigationMenuToggle from './NavigationMenuToggle'
import {
  ToggleContainer,
  DarkModeToggleContainer,
  DarkModeToggleIcon
} from './styles'

const DARK_MODE_ICON_SIZE = 30

function NavigationToggle ({
  toggleNavbar,
  expanded
}: INavigationToggle): JSX.Element {
  const { theme, toggleColors } = useTheme()
  const darkModeAnimationProps = useDarkToggleAnimation()

  return (
    <ToggleContainer>
      <DarkModeToggleContainer {...darkModeAnimationProps}>
        <DarkModeToggleIcon
          size={DARK_MODE_ICON_SIZE}
          color={theme.tertiary}
          onClick={toggleColors}
        />
      </DarkModeToggleContainer>
      <NavigationMenuToggle onClick={toggleNavbar} expanded={expanded} />
    </ToggleContainer>
  )
}

export default NavigationToggle
