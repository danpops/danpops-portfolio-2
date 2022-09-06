import { Link } from 'react-scroll'
import { navigationItems } from '../../../assets/data/navigation'
import { INavigationMobile } from '../../../types'
import { NavigationMobileContainer, NavigationMobileItem } from './styles'

function NavigationMobile ({
  expanded,
  toggleNavbar
}: INavigationMobile): JSX.Element {
  function composeNavigationItems (item: string, index: number): JSX.Element {
    return (
      <Link key={index} to={item} onClick={toggleNavbar} smooth duration={500}>
        <NavigationMobileItem>{item}</NavigationMobileItem>
      </Link>
    )
  }

  return (
    <NavigationMobileContainer expanded={expanded}>
      {navigationItems.map(composeNavigationItems)}
    </NavigationMobileContainer>
  )
}

export default NavigationMobile
