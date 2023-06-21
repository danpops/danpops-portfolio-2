import styled from 'styled-components'
import { ISection } from '../../types'
import devices from '../../utils/devices'

export const MetaTag = styled.meta``

export const Main = styled.main``
export const Section = styled.section`
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${({ bgColor }: ISection) => bgColor};
  text-align: center;
  width: 100%;
  padding: 4rem 0rem;
  @media ${devices.md} {
    padding: 8rem 0rem;
  }
  @media ${devices.lg} {
    padding: 8rem 0rem;
  }
`
export const HeaderContainer = styled.div`
  margin: 0;
  text-align: start;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  @media ${devices.md} {
    padding: 0;
    margin: 0 auto;
    max-width: 40rem;
  }
  @media ${devices.lg} {
    max-width: 60rem;
  }
`
