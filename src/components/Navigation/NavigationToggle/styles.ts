import { CgDarkMode } from 'react-icons/cg'
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

export const DarkModeToggleMobile = styled(CgDarkMode)`
  display: block;
  margin-right: 0.5rem;

  @media ${devices.lg} {
    display: none;
  }
`
