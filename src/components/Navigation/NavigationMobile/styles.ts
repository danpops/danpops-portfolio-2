import { Link } from 'react-scroll'
import styled from 'styled-components'
import { colors } from '../../../design'
import { INavigationMobileContainer } from '../../../types'
import devices from '../../../utils/devices'

const expandedMenuStyle = `
  display: block;
  opacity: 1;
  height: 15.7rem;
  margin-bottom: 2rem;
`

export const NavigationMobileContainer = styled.div`
  background: ${colors.white};
  -webkit-tap-highlight-color: transparent;
  clear:both;
  width:100%;
  height:0px;
  overflow: hidden;
  transition: all .5s ease;
  opacity: 0;
  
  ${({ expanded }: INavigationMobileContainer) => expanded && expandedMenuStyle}
  
  @media ${devices.lg} {
    display: none;
  }
`

export const NavigationMobileItem = styled.div`
  color: ${colors.dark};
  padding: 1rem 0.8rem;
  font-size: 16px;
  display: block;
  margin-left: 2rem;
  font-weight: 700;

  &:hover {
    color: ${colors.primary};
  }
`

export const NavigationLink = styled(Link)`
  -webkit-tap-highlight-color: transparent;
`
