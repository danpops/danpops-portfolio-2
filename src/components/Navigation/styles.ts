import styled from 'styled-components'
import devices from '../../utils/devices'
import { INavigation, INavigationContainer } from '../../types'

const colorNav = (props: INavigation): string => `
  background-color: ${
    props.isTransparent && !props.isExpanded ? 'transparent' : props.$bgcolor
  };
  box-shadow: ${
    props.isTransparent ? 'none' : '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'
  };
  @media ${devices.lg} {
    background-color: ${props.isTransparent ? 'transparent' : props.$bgcolor};
  };
`
const contentStlye = ({ color, isHidden }: INavigationContainer): string => `
  height: ${isHidden ? '0' : '2.6rem'};
  opacity: ${isHidden ? '0' : '1'};
  margin: ${isHidden ? '0' : '1.2rem 0'};
  @media ${devices.lg} {
    color: ${color};
  }
`
export const NavigationContainer = styled.div`
  width: 100vw;
  z-index: 9;
  transition: height 0.02s ease-out;
  transition: opacity 0.01s ease-out;
  position: fixed;
  overflow: hidden;
  ${(props: INavigation) => colorNav(props)};
`
export const NavigationContent = styled.div`
  display: grid;
  width: 100vw;
  align-items: center;
  grid-template-areas: 'brand-container toggle-mobile';
  justify-content: space-around;
  position: relative;
  margin: 1.2rem 0;
  ${(props: INavigationContainer) => contentStlye(props)}
  @media ${devices.lg} {
    height: 2.6rem;
    width: 60rem;
    column-gap: 20rem;
    justify-content: space-between;
    grid-template-areas: 'brand-container menu-items';
    opacity: 1;
    margin: 1.5rem auto;
  }
`
