import styled from 'styled-components'
import devices from '../../utils/devices'
import { INavigationContainer } from '../../types'
import { IHoverColor } from '../Buttons'

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
  z-index: 99999;

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
  padding-top: 0.34rem;
  padding-bottom: 0.34rem;

  @media ${devices.lg} {
    max-width: 960px;
    margin: 0 auto;
    padding: 1.2rem 1rem;
  }
`

export const NavigationBrand = styled.div`
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  font-weight: 700;
  margin-right: 0.7rem;

  ${(props: IHoverColor) => `
  color: ${props.color};
  &:hover {
    color: ${props.hoverColor};
  }
  `}
`
export const NavigationBrandContainer = styled.div`
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
`

export const ToggleContainer = styled.div`
  display: inline-block;
  cursor: pointer;
  float: right;
  padding: auto 2rem;
  -webkit-tap-highlight-color: transparent;
  position: relative;

  @media ${devices.lg} {
    display: none;
  }
`
