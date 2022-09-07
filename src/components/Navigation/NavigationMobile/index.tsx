import { navigationItems } from '../../../assets/data/navigation'
import useTheme from '../../../hooks/useTheme'
import { INavigationMobile } from '../../../types'
import NavigationItem from './NavigationItem'
import { NavigationMobileContainer } from './styles'

function NavigationMobile ({
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
        hoverColor={theme.primary}
        onClick={toggleNavbar}
      />
    )
  }

  return (
    <NavigationMobileContainer bgColor={theme.secondary} expanded={expanded}>
      {navigationItems.map(composeNavigationItems)}
    </NavigationMobileContainer>
  )
}

export default NavigationMobile
