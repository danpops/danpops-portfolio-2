import styled from 'styled-components'
import { INavigationExpand, IStroke } from '../../../../types'

const closeNavStyle = `
  path:nth-child(1) {
    stroke-dasharray 60 207;
    stroke-dashoffset 0;
  }

  path:nth-child(2) {
    stroke-dasharray 60 60;
    stroke-dashoffset 0;
  }

  path:nth-child(3) {
    stroke-dasharray 60 207;
    stroke-dashoffset 0;
  }
`
const expandedNavStyle = `
  path:nth-child(1) {
    stroke-dasharray 90 207;
    stroke-dashoffset -134;
  }

  path:nth-child(2) {
    stroke-dasharray 1 60;
    stroke-dashoffset -30;
  }

  path:nth-child(3) {
    stroke-dasharray 90 207;
    stroke-dashoffset -134;
  }
`

export const NavigationWrapper = styled.div`
  display: block;
  margin-top: 0.2rem;
  margin-left: 0.8rem;
  ${({ expanded }: INavigationExpand) =>
    expanded ? expandedNavStyle : closeNavStyle}
`

export const NavigationSVG = styled.svg`
  width: 3rem;
  height: 3rem;
`

export const BarPath = styled.path`
  fill: none;
  stroke-width: 7;
  transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
  ${(props: IStroke) => `stroke: ${props.stroke};`}
`
