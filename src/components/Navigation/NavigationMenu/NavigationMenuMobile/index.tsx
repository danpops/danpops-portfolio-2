import { navigationItems } from '../../../../assets/data'
import useTheme from '../../../../hooks/useTheme'
import { INavigationMobile } from '../../../../types'
import NavigationItem from '../../NavigationItems/NavigationItemMobile'
import { NavigationMobileContainer } from './styles'

function NavigationMenuMobile ({
  expanded,
  toggleNavbar
}: INavigationMobile): JSX.Element {
  const { theme } = useTheme()
  function composeNavigationItems (item: string, index: number): JSX.Element {
    return (
      <NavigationItem
        key={index}
        item={item}
        color={theme.tertiary}
        $hovercolor={theme.primary}
        onClick={toggleNavbar}
      />
    )
  }

  return (
    <NavigationMobileContainer $bgcolor={theme.secondary} expanded={expanded}>
      {navigationItems.map(composeNavigationItems)}
    </NavigationMobileContainer>
  )
}

export default NavigationMenuMobile
