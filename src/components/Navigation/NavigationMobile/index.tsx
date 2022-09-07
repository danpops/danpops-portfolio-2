import { navigationItems } from '../../../assets/data/navigation'
import { INavigationMobile } from '../../../types'
import {
  NavigationMobileContainer,
  NavigationLink,
  NavigationMobileItem
} from './styles'

function NavigationMobile ({
  expanded,
  toggleNavbar
}: INavigationMobile): JSX.Element {
  function composeNavigationItems (item: string, index: number): JSX.Element {
    return (
      <NavigationLink
        key={index}
        to={item}
        onClick={toggleNavbar}
        smooth
        duration={500}
      >
        <NavigationMobileItem>{item}</NavigationMobileItem>
      </NavigationLink>
    )
  }

  return (
    <NavigationMobileContainer expanded={expanded}>
      {navigationItems.map(composeNavigationItems)}
    </NavigationMobileContainer>
  )
}

export default NavigationMobile
