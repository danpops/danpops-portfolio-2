import styled from 'styled-components'
import devices from '../../utils/devices'

export const SpecialtiesSection = styled.div`
  padding: 8rem 0rem;
  background-color: ${({ bgColor }: { bgColor: string }) => bgColor};
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

export const SpecialtiesTabs = styled.div`
  display: grid;
  grid-area: tabs;
  grid-template-columns: repeat(2, minmax(8.5rem, 1fr));
  justify-items: center;
  grid-gap: 0.5rem;
  margin-bottom: 2rem;

  @media ${devices.md} {
    margin-bottom: 0rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  @media ${devices.lg} {
    align-items: center;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
`

export const SpecialtiesContent = styled.div`
  display: grid;
  grid-area: content;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  justify-items: center;

  @media ${devices.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
`
