import useDarkToggleAnimation from '../../../hooks/animations/useDarkToggleAnimation'
import useTheme from '../../../hooks/useTheme'
import { INavigationToggle } from '../../../types'
import NavigationMenuToggle from './NavigationMenuToggle'
import {
  ToggleContainer,
  DarkModeToggleContainer,
  DarkModeToggleIcon
} from './styles'

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
          size={31.5}
          color={theme.tertiary}
          onClick={toggleColors}
        />
      </DarkModeToggleContainer>
      <NavigationMenuToggle onClick={toggleNavbar} expanded={expanded} />
    </ToggleContainer>
  )
}

export default NavigationToggle
