import styled from 'styled-components'
import devices from '../../utils/devices'

export const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-auto-flow: row;
  row-gap: 3.5rem;
  margin: 0;
  padding: 0 2.5rem;
  @media ${devices.md} {
    padding: 0 6.5rem;
  }
  @media ${devices.lg} {
    padding: 0 19.5rem;
  }
`
