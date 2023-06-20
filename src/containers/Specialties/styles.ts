import styled from 'styled-components'
import { ISection } from '../../types'
import devices from '../../utils/devices'

export const SpecialtiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  margin: 0;
  align-items: center;
  justify-content: flex-start;
  margin-top: 3rem;
  row-gap: 3rem;
  @media ${devices.md} {
    padding: 0 6.5rem;
    max-width: 50rem;
    margin: 5rem auto;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    justify-items: flex-start;
  }
  @media ${devices.lg} {
    margin: 5rem 0;
    padding: 0 19.5rem;
    max-width: 53rem;
  }
`
export const SpecialtiesSection = styled.div`
  padding: 8rem 0rem;
  background-color: ${({ bgColor }: ISection) => bgColor};
  width: 100%;
  text-align: center;
`
