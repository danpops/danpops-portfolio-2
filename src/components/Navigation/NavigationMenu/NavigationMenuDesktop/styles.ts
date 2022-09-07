import styled from 'styled-components'
import { IHoverColor } from '../../../../types'
import devices from '../../../../utils/devices'

export const NavigationDesktopMenu = styled.div`
  display: none;

  @media ${devices.lg} {
    display: flex;
  }
`
export const NavigationMenuItem = styled.div`
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  ${(props: IHoverColor) => `
  color: ${props.color};
  &:hover {
    color: ${props.hoverColor};
  }
`}
`
