import useNavigation from '../../hooks/useNavigation'
import { Link } from 'react-scroll'
import NavigationDesktop from './NavigationDesktop'
import {
  NavigationContainer,
  NavigationContent,
  NavigationBrand,
  NavigationToggle
} from './styles'

function Navigation (): JSX.Element {
  const { isTransparent } = useNavigation()

  return (
    <NavigationContainer isTransparent={isTransparent}>
      <NavigationContent>
        <Link to='hero' smooth duration={500}>
          <NavigationBrand>danpops_</NavigationBrand>
        </Link>
        <NavigationToggle size={46} />
        <NavigationDesktop />
      </NavigationContent>
    </NavigationContainer>
  )
}

export default Navigation
