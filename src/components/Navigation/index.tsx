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
import styled from 'styled-components'
import devices from '../../utils/devices'

const DarkModeToggleDesktop = styled(MdOutlineDarkMode)`
  display: none;

  @media ${devices.lg} {
    display: block;
  }
`
const DarkModeToggleMobile = styled(MdOutlineDarkMode)`
  display: block;
  margin-right: 0.5rem;

  @media ${devices.lg} {
    display: none;
  }
`

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
            <DarkModeToggleDesktop
              size={25}
              color={theme.tertiary}
              onClick={toggleColors}
            />
          </NavigationBrandContainer>
          <ToggleContainer>
            <DarkModeToggleMobile
              size={35}
              color={theme.tertiary}
              onClick={toggleColors}
            />
            <NavigationToggle onClick={toggleNavbar} expanded={expanded} />
          </ToggleContainer>
          <NavigationDesktop />
        </NavigationContent>
        <NavigationMobile toggleNavbar={toggleNavbar} expanded={expanded} />
      </NavigationContainer>
    </>
  )
}

export default Navigation
