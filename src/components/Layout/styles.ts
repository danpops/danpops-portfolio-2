import styled from 'styled-components'
import { ISection } from '../../types'
import devices from '../../utils/devices'

export const Section = styled.section`
  diplay: flex;
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
  padding-left: 2rem;
  padding-right: 2rem;

  @media ${devices.md} {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  @media ${devices.lg} {
    max-width: 53rem;
    padding-left: 10rem;
    padding-right: 10rem;
  }
`
