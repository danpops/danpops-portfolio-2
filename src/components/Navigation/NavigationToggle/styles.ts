import { CgDarkMode } from 'react-icons/cg'
import { animated } from 'react-spring'
import styled from 'styled-components'
import devices from '../../../utils/devices'

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media ${devices.lg} {
    display: none;
  }
`

export const DarkModeToggleContainer = styled(animated.span)`
  margin-right: 0.5rem;

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
