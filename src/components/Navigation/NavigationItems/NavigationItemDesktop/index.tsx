import { Link } from 'react-scroll'
import useBoopAnimation from '../../../../hooks/animations/useBoopAnimation'
import { INavigationItem } from '../../../../types'
import { NavigationLink } from './styles'

function NavigationItemDesktop ({
  item,
  $hovercolor,
  color
}: INavigationItem): JSX.Element {
  const animatedProps = useBoopAnimation()
  return (
    <Link to={item} smooth duration={500}>
      <NavigationLink {...animatedProps} $hovercolor={$hovercolor} color={color}>
        {item}
      </NavigationLink>
    </Link>
  )
}

export default NavigationItemDesktop
