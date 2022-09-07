import useNavigation from '../../hooks/useNavigation'
import NavigationDesktop from './NavigationDesktop'
import {
  NavigationContainer,
  NavigationContent,
  NavigationBrand,
  ToggleContainer
} from './styles'
import NavigationMobile from './NavigationMobile'
import NavigationToggle from './NavigationToggle'

function Navigation (): JSX.Element {
  const { isTransparent, clickHero, expanded, toggleNavbar } = useNavigation()

  return (
    <>
      <NavigationContainer isTransparent={isTransparent}>
        <NavigationContent>
          <NavigationBrand to='hero' smooth duration={500} onClick={clickHero}>
            danpops_
          </NavigationBrand>
          <ToggleContainer onClick={toggleNavbar}>
            <NavigationToggle expanded={expanded} />
          </ToggleContainer>
          <NavigationDesktop />
        </NavigationContent>
        <NavigationMobile toggleNavbar={toggleNavbar} expanded={expanded} />
      </NavigationContainer>
    </>
  )
}

export default Navigation
