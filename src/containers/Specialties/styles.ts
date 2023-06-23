import styled from 'styled-components'
import { ISection } from '../../types'
import devices from '../../utils/devices'
import { Header3 } from '../../components/Text'
import { Section } from '../../components/Layout/styles'

export const SpecialtiesContainer = styled.div`
  display: grid;
  margin: 0;
  align-items: flex-start;
  grid-template-columns: repeat(3, minmax(0, 6rem));
  grid-template-rows: minmax(2, 6rem);
  row-gap: 3rem;
  justify-items: flex-start;
  column-gap: 0.5rem;
  @media ${devices.md} {
    grid-template-columns: repeat(5, minmax(0, auto));
    grid-template-rows: minmax(0, 8rem);
    justify-content: flex-start;
    column-gap: 3rem;
  }
  @media ${devices.lg} {
    margin: 2rem 0;
    padding: 0;
    column-gap: 5rem;
  }
`
export const SpecialtiesSection = styled(Section)`
  background-color: ${({ bgColor }: ISection) => bgColor};
  width: 100%;
  text-align: center;
`
export const SpecialtyHeader = styled(Header3)``
