import styled from 'styled-components'
import { colors } from '../../design'
import { MdMenu } from 'react-icons/md'
import devices from '../../utils/devices'
import useNavigation from '../../hooks/useNavigation'
import { Link } from 'react-scroll'

const navigationWhite = `
  background-color: ${colors.white};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`

const navigationTransparent = `
  background-color: transparent;
  box-shadow: none;
`

const NavigationContainer = styled.div`
  position: fixed;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
  background: ${colors.white};
  color: ${colors.black};
  top: 0;
  width: 100%;
  z-index: 99999;

  @media ${devices.lg} {
    ${({ isTransparent }: { isTransparent: boolean }) =>
      !isTransparent ? navigationTransparent : navigationWhite};
  }
`

const NavigationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media ${devices.lg} {
    max-width: 960px;
    margin: 0 auto;
    padding: 1.2rem 1rem
  }
`

const NavigationBrand = styled.a`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  font-weight: 700;
  color: ${colors.black};
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }
`

const NavigationToggle = styled(MdMenu)`
  display: inline-block;

  @media ${devices.lg} {
    display: none;
  }
`

const NavigationDesktopMenu = styled.div`
  display: none;

  @media ${devices.lg} {
    display: flex;
  }
`
const NavigationMenuItem = styled.a`
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  color: ${colors.black};
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }
`

const navbarData = ['about', 'specialties', 'experience', 'github', 'contact']

function NavigationDesktop (): JSX.Element {
  return (
    <NavigationDesktopMenu>
      {navbarData.map((item, index) => (
        <Link key={index} to={item} smooth duration={500}>
          <NavigationMenuItem>{item}</NavigationMenuItem>
        </Link>
      ))}
    </NavigationDesktopMenu>
  )
}

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
