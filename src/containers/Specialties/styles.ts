import styled from 'styled-components'
import { ISection } from '../../types'
import devices from '../../utils/devices'

export const SpecialtiesSection = styled.div`
  padding: 8rem 0rem;
  background-color: ${({ bgColor }: ISection) => bgColor};
  width: 100%;
  text-align: center;
`

export const SpecialtiesContainer = styled.div`
  display: grid;
  text-align: center;
  grid-template-areas:
    'tabs'
    'content';
  justify-items: center;
  margin-top: 3rem;

  @media ${devices.md} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-areas: 'tabs content';
    padding-left: 8rem;
    padding-right: 8rem;
  }

  @media ${devices.lg} {
    grid-template-columns: 30rem auto;
    grid-template-areas: 'tabs content';

    margin: 4.5rem auto;
    max-width: 65rem;
  }
`
