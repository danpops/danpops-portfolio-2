import styled from 'styled-components'
import { IBackgroundColor } from '../../types'

const ProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: ${({ $bgcolor }: IBackgroundColor) => $bgcolor};
  left: 0;
  height: 0.3rem;
  width: 100%;
  z-index: 99;
`

const ProgressBar = styled.div`
  position: fixed;
  height: 0.3rem;
  z-index: 3;
  -webkit-transition: width ease;
  -moz-transition: width ease;
  -o-transition: width ease;
  transition: width ease;
`

export { ProgressBarContainer, ProgressBar }
