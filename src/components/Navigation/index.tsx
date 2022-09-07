import useNavigation from '../../hooks/useNavigation'
import NavigationDesktop from './NavigationDesktop'
import { NavigationContainer, NavigationContent } from './styles'
import NavigationMobile from './NavigationMobile'
import useTheme from '../../hooks/useTheme'
import NavigationBrand from './NavigationBrand'
import NavigationToggle from './NavigationToggle'

function Navigation (): JSX.Element {
  const { isTransparent, clickHero, expanded, toggleNavbar } = useNavigation()
  const { theme } = useTheme()
  return (
    <NavigationContainer
      color={theme.tertiary}
      bgColor={theme.secondary}
      isTransparent={isTransparent}
    >
      <NavigationContent>
        <NavigationBrand clickHero={clickHero} />
        <NavigationToggle toggleNavbar={toggleNavbar} expanded={expanded} />
        <NavigationDesktop />
      </NavigationContent>
      <NavigationMobile toggleNavbar={toggleNavbar} expanded={expanded} />
    </NavigationContainer>
  )
}

export default Navigation
