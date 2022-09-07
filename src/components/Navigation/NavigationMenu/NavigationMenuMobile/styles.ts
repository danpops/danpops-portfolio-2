import styled from 'styled-components'
import { INavigationMobileContainer } from '../../../../types'
import devices from '../../../../utils/devices'

const expandedMenuStyle = `
  display: block;
  opacity: 1;
  height: 15.7rem;
  padding-bottom: 2rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`

export const NavigationMobileContainer = styled.div`
  -webkit-tap-highlight-color: transparent;
  clear:both;
  width:100%;
  height:0px;
  overflow: hidden;
  transition: all .5s ease;
  opacity: 0;

  ${({ expanded, bgColor }: INavigationMobileContainer) => `
    background-color: ${bgColor};
  ${expanded ? expandedMenuStyle : ''}`}
  
  @media ${devices.lg} {
    display: none;
  }
`
