import styled from 'styled-components'
import { colors } from '../../../design'
import devices from '../../../utils/devices'

const expandedMenuStyle = `
  display: inline-block;
  max-height: 30rem;
  box-shadow: 0 0.3rem 0.15rem 0.15rem rgb(0 0 0 / 8%);
  transition: max-height 0.2s ease-in;
  padding-bottom: 1.3rem;
`

export const NavigationMobileContainer = styled.div`
  position: fixed;
  width: 100%;
  left: 0;
  flex-direction: column;
  max-height: 0;
  transition: max-height 0.2s ease-out;
  overflow: hidden;
  background-color: ${colors.white};
  padding-left: 2rem;
  
  ${({ expanded }: { expanded: boolean }) => expanded && expandedMenuStyle}
  
  @media ${devices.lg} {
    display: none;
  }
`

export const NavigationMobileItem = styled.div`
  color: ${colors.dark};
  padding: 0.6rem 0;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    color: ${colors.primary};
  }
`
