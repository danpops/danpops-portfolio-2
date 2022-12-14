import { NavigationContainer, NavigationContent } from './styles'
import { NavigationMenuDesktop, NavigationMenuMobile } from './NavigationMenu'
import useTheme from '../../hooks/useTheme'
import NavigationBrand from './NavigationBrand'
import NavigationToggle from './NavigationToggle'
import useNavigation from '../../hooks/useNavigation'

function Navigation (): JSX.Element {
  const {
    clickHero,
    isHidden,
    isNavigationExpanded,
    isTransparent,
    toggleNavbar
  } = useNavigation()
  const { theme } = useTheme()
  return (
    <NavigationContainer
      isTransparent={isTransparent}
      isExpanded={isNavigationExpanded}
      color={theme.tertiary}
      bgColor={theme.secondary}
    >
      <NavigationContent color={theme.tertiary} isHidden={isHidden}>
        <NavigationBrand clickHero={clickHero} />
        <NavigationToggle
          toggleNavbar={toggleNavbar}
          expanded={isNavigationExpanded}
        />
        <NavigationMenuDesktop />
      </NavigationContent>
      <NavigationMenuMobile
        toggleNavbar={toggleNavbar}
        expanded={isNavigationExpanded}
      />
    </NavigationContainer>
  )
}

export default Navigation
