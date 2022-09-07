import { Link } from 'react-scroll'
import { navigationItems } from '../../../assets/data/navigation'
import useTheme from '../../../hooks/useTheme'
import { NavigationDesktopMenu, NavigationMenuItem } from './styles'

function NavigationDesktop (): JSX.Element {
  const { theme } = useTheme()
  function composeNavigationItems (item: string, index: number): JSX.Element {
    return (
      <Link key={index} to={item} smooth duration={500}>
        <NavigationMenuItem hoverColor={theme.primary} color={theme.tertiary}>
          {item}
        </NavigationMenuItem>
      </Link>
    )
  }

  return (
    <NavigationDesktopMenu>
      {navigationItems.map(composeNavigationItems)}
    </NavigationDesktopMenu>
  )
}

export default NavigationDesktop
