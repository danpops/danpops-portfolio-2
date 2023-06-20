import styled from 'styled-components'
import { ISection } from '../../types'
import devices from '../../utils/devices'

export const SpecialtiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  max-width: 20rem;
  margin: auto;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  row-gap: 3rem;
  @media ${devices.md} {
    max-width: 50rem;
    margin: 5rem auto;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
  }
`
export const SpecialtiesSection = styled.div`
  padding: 8rem 0rem;
  background-color: ${({ bgColor }: ISection) => bgColor};
  width: 100%;
  text-align: center;
`
