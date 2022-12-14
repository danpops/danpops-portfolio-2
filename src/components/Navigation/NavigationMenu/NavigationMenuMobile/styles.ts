import styled from 'styled-components'
import { INavigationMobileContainer } from '../../../../types'
import devices from '../../../../utils/devices'

const expandedMenuStyle = `
  opacity: 1;
  height: 15.7rem;
  padding-bottom: 1rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`

export const NavigationMobileContainer = styled.div`
  -webkit-tap-highlight-color: transparent;
  clear: both;
  width: 100%;
  height: 0;
  position: relative;
  overflow: hidden;
  transition: all .5s ease;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ expanded, bgColor }: INavigationMobileContainer) => `
    background-color: ${bgColor};
  ${expanded ? expandedMenuStyle : ''}`}
  
  @media ${devices.lg} {
    display: none;
  }
`
