import { Link } from 'react-scroll'
import styled from 'styled-components'
import { INavigationMobileContainer } from '../../../types'
import devices from '../../../utils/devices'
import { IHoverColor } from '../../Buttons'

const expandedMenuStyle = `
  display: block;
  opacity: 1;
  height: 15.7rem;
  margin-bottom: 2rem;
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

export const NavigationMobileItem = styled.div`
  padding: 1rem 0.8rem;
  font-size: 16px;
  display: block;
  margin-left: 2rem;
  font-weight: 700;

  ${(props: IHoverColor) => `
    color: ${props.color};
    &:hover {
      color: ${props.hoverColor};
    }
  `}
`

export const NavigationLink = styled(Link)`
  -webkit-tap-highlight-color: transparent;
`
