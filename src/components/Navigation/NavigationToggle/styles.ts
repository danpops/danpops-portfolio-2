import { CgDarkMode } from 'react-icons/cg'
import { animated } from 'react-spring'
import styled from 'styled-components'
import devices from '../../../utils/devices'

export const ToggleContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  float: right;
  padding: auto 2rem;
  -webkit-tap-highlight-color: transparent;
  position: relative;

  @media ${devices.lg} {
    display: none;
  }
`

export const DarkModeToggleContainer = styled(animated.span)`
  display: block;

  @media ${devices.lg} {
    display: none;
  }
`

export const DarkModeToggleIcon = styled(CgDarkMode)`
  display: block;

  @media ${devices.lg} {
    display: none;
  }
`
