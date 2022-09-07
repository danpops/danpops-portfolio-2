import styled from 'styled-components'
import { colors } from '../../design'
import devices from '../../utils/devices'
import { Link } from 'react-scroll'
import { INavigationContainer } from '../../types'

const navigationDefault = `
  background-color: ${colors.white};
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`
const navigationTransparent = `
  background-color: transparent;
  box-shadow: none;
`

export const NavigationContainer = styled.div`
  position: fixed;
  box-shadow: 0 0.125rem 0.25rem rgb(0 0 0 / 8%);
  background: ${colors.white} !important;
  color: ${colors.black};
  top: 0;
  width: 100%;
  z-index: 99999;

  @media ${devices.lg} {
    ${({ isTransparent }: INavigationContainer) =>
      !isTransparent ? navigationTransparent : navigationDefault};
  }
`

export const NavigationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  @media ${devices.lg} {
    max-width: 960px;
    margin: 0 auto;
    padding: 1.2rem 1rem;
  }
`

export const NavigationBrand = styled(Link)`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  font-weight: 700;
  color: ${colors.black};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    color: ${colors.primary};
  }
`

export const NavigationToggle = styled.div`
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
