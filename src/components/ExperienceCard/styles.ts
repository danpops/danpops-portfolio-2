import styled from 'styled-components'
import { IColor } from '../../types'
import devices from '../../utils/devices'

export const ExperienceCardContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content';
  color: ${(props: IColor) => props.color};
  @media ${devices.md} {
    align-items: center;
  }
`
export const ExperienceHeader = styled.div`
  display: grid;
  grid-area: header;
  grid-template-areas:
    'date'
    'position'
    'company';
  row-gap: 1rem;
  column-gap: 0;
  align-items: center;
`
export const ExperienceList = styled.ul`
  text-align: start;
  padding: 0;
  line-height: 1.4rem;
  list-style: none;
  color: ${(props: IColor) => props.color};
`
export const ExperienceListItem = styled.li`
  font-size: 1rem;
  line-height: 2rem;
  text-align: start;
  margin: 1rem 0;
  @media ${devices.lg} {
    font-size: 1.2rem;
    text-align: justify;
    line-height: 2.6rem;
  }
`
export const ExperienceText = styled.div`
  font-size: 1rem;
  font-weight: 400;
  @media ${devices.lg} {
    font-size: 1.2rem;
  }
`
export const ExperiencePosition = styled(ExperienceText)`
  grid-area: position;
  text-align: start;
  font-weight: 700;
`
export const ExperienceCompany = styled(ExperienceText)`
  grid-area: company;
  text-align: start;
  font-weight: 300;
`
export const ExperienceDate = styled(ExperienceText)`
  grid-area: date;
  text-align: start;
  font-weight: 300;
  font-size: 0.9rem;
`
