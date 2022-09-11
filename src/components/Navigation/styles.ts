import styled from 'styled-components'
import devices from '../../utils/devices'
import { INavigation, INavigationContainer } from '../../types'

export const NavigationContainer = styled.div`
  width: 100vw;
  z-index: 9;
  transition: height 0.02s ease-out;
  transition: opacity 0.01s ease-out;
  position: fixed;
  overflow: hidden;
  ${({ bgColor, isTransparent, isExpanded, color }: INavigation) => `
      background-color: ${isTransparent && !isExpanded ? 'transparent' : bgColor};
      box-shadow: ${
        isTransparent ? 'none' : '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'
      };
      @media ${devices.lg} {
        background-color: ${isTransparent ? 'transparent' : bgColor};
      }
  `};
`

export const NavigationContent = styled.div`
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: space-around;
  position: relative;
  margin: 1.2rem 0;

  ${({ color, isHidden }: INavigationContainer) =>
    `
    height: ${isHidden ? '0' : '2.6rem'};
    opacity: ${isHidden ? '0' : '1'};
    margin: ${isHidden ? '0' : '1.2rem 0'};
    @media ${devices.lg} {
      height: 2.6rem;
      color: ${color};
      opacity: 1;
      margin: 1.5rem 0;
    }
  `}
`
