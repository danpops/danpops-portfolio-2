import styled from 'styled-components'
import { IBackgroundColor, IThemeStyle } from '../../types'
import { Header1, Header5 } from '../../components/Text'
import devices from '../../utils/devices'
import { animated } from 'react-spring'

export const HeroMasthead = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 1;
  ${(props: IBackgroundColor) => `background-color: ${props.bgColor};`}
`

export const ContentContianer = styled.div`
  display: grid;
  justify-content: flex-start;
  align-items: flex-start;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto;
  z-index: 3;
  margin: 0;
  padding: 0 2.5rem;
  @media ${devices.md} {
    width: 40rem;
    justify-content: flex-start;
    margin: 0 auto;
    align-items: flex-start;
  }
  @media ${devices.lg} {
    width: 60rem;
  }
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
  font-size: 2.3rem;
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
  appearance: button;
  backface-visibility: hidden;
  border-radius: 0.38rem;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 0.06rem inset,
    rgba(50, 50, 93, 0.1) 0 0.13rem 0.31rem 0,
    rgba(0, 0, 0, 0.07) 0 0.06rem 0.06rem 0;
  box-sizing: border-box;
  cursor: pointer;
  ${(props: IThemeStyle) => `
    color: ${props.color};
    background-color: ${props.bgColor};
  `}
  font-size: 100%;
  height: 2.75rem;
  line-height: 1.15;
  margin: 1rem 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 1rem;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all 0.2s, box-shadow 0.08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`
