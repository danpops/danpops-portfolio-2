import { CgDarkMode } from 'react-icons/cg'
import { animated } from 'react-spring'
import styled from 'styled-components'
import devices from '../../../utils/devices'
import { IHoverColor } from '../../../types'

export const DarkModeToggleDesktopContainer = styled(animated.div)`
  display: none;

  @media ${devices.lg} {
    display: block;
  }
`

export const DarkModeToggleDesktop = styled(CgDarkMode)`
  display: none;

  @media ${devices.lg} {
    display: block;
  }
`

export const NavigationBrandContainer = styled.div`
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavigationBrandLogo = styled(animated.div)`
  font-size: 1.5rem;
  white-space: nowrap;
  font-weight: 700;
  ${(props: IHoverColor) => `
  color: ${props.color};
  &:hover {
    color: ${props.hoverColor};
  }
  `}
  @media ${devices.lg} {
    font-size: 1.2rem;
    margin-right: 1.2rem;
  }
`
