import { navigationItems } from '../../../assets/data/navigation'
import useTheme from '../../../hooks/useTheme'
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
  const { theme } = useTheme()
  function composeNavigationItems (item: string, index: number): JSX.Element {
    return (
      <NavigationLink
        key={index}
        to={item}
        onClick={toggleNavbar}
        smooth
        duration={500}
      >
        <NavigationMobileItem color={theme.tertiary} hoverColor={theme.primary}>
          {item}
        </NavigationMobileItem>
      </NavigationLink>
    )
  }

  return (
    <NavigationMobileContainer bgColor={theme.secondary} expanded={expanded}>
      {navigationItems.map(composeNavigationItems)}
    </NavigationMobileContainer>
  )
}

export default NavigationMobile
