import styled from 'styled-components'
import { colors } from '../../../design'
import devices from '../../../utils/devices'

export const NavigationDesktopMenu = styled.div`
  display: none;

  @media ${devices.lg} {
    display: flex;
  }
`
export const NavigationMenuItem = styled.a`
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
