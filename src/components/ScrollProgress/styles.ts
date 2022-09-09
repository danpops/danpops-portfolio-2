import styled from 'styled-components'
import { IBackgroundColor } from '../../types'
import devices from '../../utils/devices'

const ProgressBarContainer = styled.div`
  position: fixed;
  top: 0;
  background-color: ${({ bgColor }: IBackgroundColor) => bgColor};
  left: 0;
  height: 0.5rem;
  width: 100vw;
  z-index: 99;

  @media ${devices.lg} {
    display: none;
  }
`

const ProgressBar = styled.div`
  position: fixed;
  height: 0.5rem;
  z-index: 3;
  transition: width 0.6s ease-out;
`

export { ProgressBarContainer, ProgressBar }
