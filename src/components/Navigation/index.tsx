import useNavigation from '../../hooks/useNavigation'
import NavigationDesktop from './NavigationDesktop'
import {
  NavigationContainer,
  NavigationContent,
  NavigationBrand,
  NavigationToggle
} from './styles'
import NavigationMobile from './NavigationMobile'

import { MdMenu } from 'react-icons/md'

function Navigation (): JSX.Element {
  const { isTransparent, expanded, toggleNavbar } = useNavigation()

  return (
    <>
      <NavigationContainer isTransparent={isTransparent}>
        <NavigationContent>
          <NavigationBrand to='hero' smooth duration={500}>
            danpops_
          </NavigationBrand>
          <NavigationToggle onClick={toggleNavbar}>
            <MdMenu size={42} />
          </NavigationToggle>
          <NavigationDesktop />
        </NavigationContent>
        <NavigationMobile toggleNavbar={toggleNavbar} expanded={expanded} />
      </NavigationContainer>
    </>
  )
}

export default Navigation
