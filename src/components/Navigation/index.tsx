import useNavigation from '../../hooks/useNavigation'
import NavigationDesktop from './NavigationDesktop'
import {
  NavigationContainer,
  NavigationContent,
  NavigationBrand,
  ToggleContainer,
  NavigationBrandContainer
} from './styles'
import NavigationMobile from './NavigationMobile'
import NavigationToggle from './NavigationToggle'
import useTheme from '../../hooks/useTheme'
import { MdOutlineDarkMode } from 'react-icons/md'
import { Link } from 'react-scroll'

function Navigation (): JSX.Element {
  const { isTransparent, clickHero, expanded, toggleNavbar } = useNavigation()
  const { theme, toggleColors } = useTheme()
  return (
    <>
      <NavigationContainer
        color={theme.tertiary}
        bgColor={theme.secondary}
        isTransparent={isTransparent}
      >
        <NavigationContent>
          <NavigationBrandContainer>
            <Link to='hero' smooth duration={500} onClick={clickHero}>
              <NavigationBrand
                color={theme.tertiary}
                hoverColor={theme.primary}
              >
                danpops_
              </NavigationBrand>
            </Link>
            <MdOutlineDarkMode
              size={25}
              color={theme.tertiary}
              onClick={toggleColors}
            />
          </NavigationBrandContainer>
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
