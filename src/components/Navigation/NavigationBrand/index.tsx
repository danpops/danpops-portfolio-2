import { Link } from 'react-scroll'
import useBoopAnimation from '../../../hooks/useBoopAnimation'
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
  const animatedBrandProps = useBoopAnimation()
  const animatedDarkToggleProps = useBoopAnimation()

  return (
    <NavigationBrandContainer>
      <Link to='hero' smooth duration={500} onClick={clickHero}>
        <NavigationBrandLogo
          {...animatedBrandProps}
          color={theme.tertiary}
          hoverColor={theme.primary}
        >
          danpops_
        </NavigationBrandLogo>
      </Link>
      <DarkModeToggleDesktopContainer {...animatedDarkToggleProps}>
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
