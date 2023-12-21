import styled from 'styled-components'
import devices from '../../utils/devices'
import { IBackgroundColor, IColor } from '../../types'

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100%;
  padding: 0.6rem 0rem;
  
  ${(props: IBackgroundColor) => `
  background-color: ${props.$bgcolor};
  `}
  
  @media ${devices.md} {
    padding: 0.8rem 0rem;
  }
  
  @media ${devices.lg} {
    padding: 1.2rem 0rem;
  }
`

export const FooterText = styled.h5`
  text-align: center;
  ${(props: IColor) => `
    color: ${props.color};
  `}
  font-weight: 400;
`
