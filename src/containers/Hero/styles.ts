import styled from 'styled-components'
import { IBackgroundColor, IThemeStyle } from '../../types'
import { Header1, Header5 } from '../../components/Text'
import devices from '../../utils/devices'
import { animated } from 'react-spring'

export const HeroMasthead = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 1;
  ${(props: IBackgroundColor) => `background-color: ${props.bgColor};`}
`

export const ContentContianer = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  padding: 0.2rem;
  flex-direction: column;
  z-index: 3;
`

export const ParticleContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  ${(props: IBackgroundColor) => `background-color: ${props.bgColor};`}
  z-index: 2;
`
export const HeroContainer = styled.div`
  text-align: center;
  z-index: 3;
`

export const HeroHeader5 = styled(Header5)`
  margin-bottom: 4rem;
`

export const HeroHeader1 = styled(Header1)`
  margin: 0.4rem 0;
  font-size: 2.8rem;
  align-self: start;
  text-align: start;

  @media ${devices.md} {
    font-size: 4.4rem;
  }
`

export const TypewriterContainer = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: start;
  align-items: flex-start;
  text-align: start;
`

export const HeroButton = styled(animated.button)`
  box-shadow: 0 0.125rem 0.25rem #00000055 !important;
  text-transform: lowercase !important;
  border-radius: 1.8rem;
  border: none;
  font-weight: 500;
  padding: 1rem 2rem;
  font-size: 0.9rem;
  cursor: pointer;
  ${(props: IThemeStyle) => `
    color: ${props.color};
    background-color: ${props.bgColor};
  `}
`
