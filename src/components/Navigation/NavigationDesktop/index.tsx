import { Link } from 'react-scroll'
import { navigationItems } from '../../../assets/data/navigation'
import { NavigationDesktopMenu, NavigationMenuItem } from './styles'

function NavigationDesktop (): JSX.Element {
  function composeNavigationItems (item: string, index: number): JSX.Element {
    return (
      <Link key={index} to={item} smooth duration={500}>
        <NavigationMenuItem>{item}</NavigationMenuItem>
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
