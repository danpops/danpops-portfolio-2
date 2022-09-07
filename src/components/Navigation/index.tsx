import useNavigation from '../../hooks/useNavigation'
import { NavigationContainer, NavigationContent } from './styles'
import { NavigationMenuDesktop, NavigationMenuMobile } from './NavigationMenu'
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
        <NavigationMenuDesktop />
      </NavigationContent>
      <NavigationMenuMobile toggleNavbar={toggleNavbar} expanded={expanded} />
    </NavigationContainer>
  )
}

export default Navigation
