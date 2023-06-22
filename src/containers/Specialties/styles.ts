import styled from 'styled-components'
import { ISection } from '../../types'
import devices from '../../utils/devices'
import { Header3 } from '../../components/Text'
import { Section } from '../../components/Layout/styles'

export const SpecialtiesContainer = styled.div`
  display: grid;
  margin: 0;
  align-items: center;
  grid-template-columns: repeat(4, minmax(0, 6rem));
  grid-template-rows: minmax(0, 6rem);
  row-gap: 3rem;
  column-gap: 1rem;
  @media ${devices.md} {
    margin-top: 3rem;
    grid-template-columns: repeat(4, minmax(0, 8rem));
    grid-template-rows: minmax(0, 8rem);
    justify-items: flex-start;
  }
  @media ${devices.lg} {
    margin: 2rem 0;
    padding: 0;
    justify-content: flex-start;
  }
`
export const SpecialtiesSection = styled(Section)`
  background-color: ${({ bgColor }: ISection) => bgColor};
  width: 100%;
  text-align: center;
`
export const SpecialtyHeader = styled(Header3)``
