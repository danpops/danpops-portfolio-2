import { CgDarkMode } from 'react-icons/cg'
import { animated } from 'react-spring'
import styled from 'styled-components'
import devices from '../../../utils/devices'
import { IHoverColor } from '../../../types'

export const DarkModeToggleDesktopContainer = styled(animated.div)`
  display: none;

  @media ${devices.lg} {
    display: block;
    margin-left: 0.6rem;
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
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
`

export const NavigationBrandLogo = styled(animated.div)`
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  font-weight: 700;
  margin-right: 0.7rem;

  ${(props: IHoverColor) => `
  color: ${props.color};
  &:hover {
    color: ${props.hoverColor};
  }
  `}
`
