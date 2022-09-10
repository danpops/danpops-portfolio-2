import { NavigationContainer, NavigationContent } from './styles'
import { NavigationMenuDesktop, NavigationMenuMobile } from './NavigationMenu'
import useTheme from '../../hooks/useTheme'
import NavigationBrand from './NavigationBrand'
import NavigationToggle from './NavigationToggle'
import useNavigation from '../../hooks/useNavigation'

function Navigation (): JSX.Element {
  const {
    isHidden,
    isTransparent,
    clickHero,
    expanded,
    toggleNavbar
  } = useNavigation()
  const { theme } = useTheme()
  return (
    <NavigationContainer>
      <NavigationContent
        color={theme.tertiary}
        bgColor={theme.secondary}
        isTransparent={isTransparent}
        isHidden={isHidden}
      >
        <NavigationBrand clickHero={clickHero} />
        <NavigationToggle toggleNavbar={toggleNavbar} expanded={expanded} />
        <NavigationMenuDesktop />
      </NavigationContent>
      <NavigationMenuMobile toggleNavbar={toggleNavbar} expanded={expanded} />
    </NavigationContainer>
  )
}

export default Navigation
