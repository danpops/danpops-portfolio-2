import { Link } from 'react-scroll'
import useBoopAnimation from '../../../hooks/animations/useBoopAnimation'
import useDarkToggleAnimation from '../../../hooks/animations/useDarkToggleAnimation'
import useTheme from '../../../hooks/useTheme'
import { INavigationBrand } from '../../../types'
import {
  DarkModeToggleDesktop,
  DarkModeToggleDesktopContainer,
  NavigationBrandContainer,
  NavigationBrandLogo
} from './styles'

function NavigationBrand ({ clickHero }: INavigationBrand): JSX.Element {
  const { theme, toggleColors } = useTheme()
  const boopAnimation = useBoopAnimation()
  const darkToggleAnimation = useDarkToggleAnimation()

  return (
    <NavigationBrandContainer>
      <Link to='hero' smooth duration={500} onClick={clickHero}>
        <NavigationBrandLogo
          {...boopAnimation}
          color={theme.tertiary}
          hoverColor={theme.primary}
        >
          danpops_
        </NavigationBrandLogo>
      </Link>
      <DarkModeToggleDesktopContainer {...darkToggleAnimation}>
        <DarkModeToggleDesktop
          size={25}
          color={theme.tertiary}
          onClick={toggleColors}
        />
      </DarkModeToggleDesktopContainer>
    </NavigationBrandContainer>
  )
}

export default NavigationBrand
