import styled from 'styled-components'
import { IBackgroundColor } from '../../components/Buttons/styles'
import { Header5 } from '../../components/Text'

export const HeroMasthead = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  z-index: 1;
  ${(props: IBackgroundColor) => `background-color: ${props.bgColor};`}
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
