import { INavigationItem } from '../../../../types'
import { NavigationLink, NavigationMobileItem } from './styles'

function NavigationItemMobile ({
  item,
  hoverColor,
  color,
  onClick
}: INavigationItem): JSX.Element {
  return (
    <NavigationLink to={item} onClick={onClick} smooth duration={500}>
      <NavigationMobileItem id='navigation-item' color={color} hoverColor={hoverColor}>
        {item}
      </NavigationMobileItem>
    </NavigationLink>
  )
}

export default NavigationItemMobile
