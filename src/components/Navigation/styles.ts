import styled from 'styled-components'
import devices from '../../utils/devices'
import { INavigationContainer } from '../../types'

export const NavigationContainer = styled.div`
  top: 0.4rem;
  width: 100vw;
  z-index: 9;
  transition: height 0.02s ease-out;
  transition: opacity 0.01s ease-out;
  position: fixed;
  overflow: hidden;
`

export const NavigationContent = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
  position: relative;
  padding: 1.2rem 0;

  ${({ isTransparent, bgColor, color, isHidden }: INavigationContainer) =>
    `
    height: ${isHidden ? '0' : '2.6rem'};
    opacity: ${isHidden ? '0' : '1'};
    background-color: ${bgColor};
    
    @media ${devices.lg} {
      height: 2.6rem;
      color: ${color};
      background-color: ${isTransparent ? 'transparent' : bgColor};
      opacity: 1;
      padding: 1.5rem 0;
    }
  `}
`
