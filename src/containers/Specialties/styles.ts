import styled from 'styled-components'
import { ISection } from '../../types'
import devices from '../../utils/devices'
import { Header3 } from '../../components/Text'
import { Section } from '../../components/Layout/styles'

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
    margin: 5rem auto;
    column-gap: 3rem;
    grid-template-columns: repeat(4, minmax(0, 8rem));
    grid-template-rows: minmax(0, 8rem);
    justify-items: flex-start;
  }
  @media ${devices.lg} {
    margin: 5rem auto;
    padding: 0;
    justify-content: center;
  }
`
export const SpecialtiesSection = styled(Section)`
  background-color: ${({ bgColor }: ISection) => bgColor};
  width: 100%;
  text-align: center;
`
export const SpecialtyHeader = styled(Header3)`
  text-align: center;
`
