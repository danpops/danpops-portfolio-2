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
  padding: 5.6rem 0rem;

  @media ${devices.md} {
    padding: 8rem 0rem;
  }

  @media ${devices.lg} {
    padding: 8rem 0rem;
  }
`
export const HeaderContainer = styled.div`
  margin: 0 auto;
  padding-left: 2.5rem;
  padding-right: 2.5rem;

  @media ${devices.md} {
    padding-left: 6.5rem;
    padding-right: 6.5rem;
  }

  @media ${devices.lg} {
    max-width: 53rem;
    padding-left: 10rem;
    padding-right: 10rem;
  }
`
