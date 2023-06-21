import styled from 'styled-components'
import { Header3 } from '../../components/Text'

export const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-auto-flow: row;
  row-gap: 2rem;
`
export const ExperienceHeader = styled(Header3)`
  text-align: start;
`
