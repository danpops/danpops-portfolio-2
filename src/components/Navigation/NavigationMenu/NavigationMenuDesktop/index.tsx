import { navigationItems } from '../../../../assets/data'
import useTheme from '../../../../hooks/useTheme'
import NavigationItem from '../../NavigationItems/NavigationItemDesktop'
import { NavigationDesktopMenu } from './styles'

function NavigationMenuDesktop (): JSX.Element {
  const { theme } = useTheme()
  function composeNavigationItems (item: string, index: number): JSX.Element {
    return (
      <NavigationItem
        key={index}
        item={item}
        $hovercolor={theme.primary}
        color={theme.tertiary}
      />
    )
  }

  return (
    <NavigationDesktopMenu>
      {navigationItems.map(composeNavigationItems)}
    </NavigationDesktopMenu>
  )
}

export default NavigationMenuDesktop
