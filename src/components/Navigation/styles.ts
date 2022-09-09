import styled from 'styled-components'
import devices from '../../utils/devices'
import { INavigationContainer } from '../../types'

const navigationDefault = `
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`
const navigationTransparent = `
  @media ${devices.lg} {
    background-color: transparent;
    box-shadow: none;
  }
`

export const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);

  ${({ isTransparent, bgColor, color }: INavigationContainer) =>
    `
      background-color: ${bgColor};
      @media ${devices.lg} {
        color: ${color};
        ${isTransparent ? navigationDefault : navigationTransparent}
      }
    `}
`

export const NavigationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;

  @media ${devices.lg} {
    max-width: 960px;
    margin: 0 auto;
    padding: 1.2rem 1rem;
  }
`
