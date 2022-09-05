import styled from 'styled-components'
import devices from '../../utils/devices'

export const Section = styled.section`
  diplay: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8rem 0rem;
  background-color: ${({ bgColor }: { bgColor: string }) => bgColor};
  text-align: center;
  width: 100%;
`
export const Container = styled.div`
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
