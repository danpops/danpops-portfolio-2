import styled from 'styled-components'
import devices from '../../utils/devices'
import { INavigationContainer } from '../../types'

export const NavigationContainer = styled.div`
  top: 0;
  width: 100%;
  z-index: 9;
  transition: height 0.02s ease-out;
  transition: opacity 0.01s ease-out;
  position: fixed;
  overflow: hidden;
  height: 100%;
`

export const NavigationContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;

  ${({ isTransparent, bgColor, color, isHidden }: INavigationContainer) =>
    `
    height: ${isHidden ? '0' : '4.8rem'};
    opacity: ${isHidden ? '0' : '1'};
    background-color: ${bgColor};
    
    @media ${devices.lg} {
      height: 2.6rem;
      color: ${color};
      box-shadow: ${isTransparent ? 'none' : `0 0.125rem 0.25rem ${color}30`};
      background-color: ${isTransparent ? 'transparent' : bgColor};
      padding: 1.2rem 1rem;
      opacity: 1;
    }
  `}
`
