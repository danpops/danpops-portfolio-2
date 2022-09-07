import { navigationItems } from '../../../assets/data/navigation'
import useTheme from '../../../hooks/useTheme'
import NavigationItem from './NavigationItem'
import { NavigationDesktopMenu } from './styles'

function NavigationDesktop (): JSX.Element {
  const { theme } = useTheme()
  function composeNavigationItems (item: string, index: number): JSX.Element {
    return (
      <NavigationItem
        key={index}
        item={item}
        hoverColor={theme.primary}
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

export default NavigationDesktop
