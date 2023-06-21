import styled from 'styled-components'
import { IHoverColor } from '../../../../types'
import devices from '../../../../utils/devices'

export const NavigationDesktopMenu = styled.div`
  display: none;
  grid-area: menu-items;
  @media ${devices.lg} {
    display: grid;
    grid-template-rows: repeat(1, 1fr);
    grid-auto-flow: column;
    justify-content: flex-end;
  }
`
export const NavigationMenuItem = styled.div`
  font-weight: 700;
  font-size: 0.9rem;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${(props: IHoverColor) => `
  color: ${props.color};
  &:hover {
    color: ${props.hoverColor};
  }
`}
`
