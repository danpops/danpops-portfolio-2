import { INavigationItem } from '../../../../types'
import { NavigationLink, NavigationMobileItem } from './styles'

function NavigationItemMobile ({
  item,
  $hovercolor,
  color,
  onClick
}: INavigationItem): JSX.Element {
  return (
    <NavigationLink to={item} onClick={onClick} smooth duration={500}>
      <NavigationMobileItem color={color} $hovercolor={$hovercolor}>
        {item}
      </NavigationMobileItem>
    </NavigationLink>
  )
}

export default NavigationItemMobile
