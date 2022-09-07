import { Link } from 'react-scroll'
import useBoopAnimation from '../../../../hooks/useBoopAnimation'
import { INavigationItem } from '../../../../types'
import { NavigationLink } from './styles'

function NavigationItem ({
  item,
  hoverColor,
  color
}: INavigationItem): JSX.Element {
  const animatedProps = useBoopAnimation()
  return (
    <Link to={item} smooth duration={500}>
      <NavigationLink {...animatedProps} hoverColor={hoverColor} color={color}>
        {item}
      </NavigationLink>
    </Link>
  )
}

export default NavigationItem
