import styled from 'styled-components'
import { IColor, IThemeStyle } from '../../types'
import devices from '../../utils/devices'

export const ExperienceCardContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content';
  border-radius: 0.6rem;
  margin: 0 1rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 0.062rem 0.125rem #00000055 !important;
  ${(props: IThemeStyle) => `
    background-color: ${props.bgColor};
    color: ${props.color};
  `}
  @media ${devices.md} {
    justify-items: space-between;
    align-items: center;
    margin: auto;
    padding: 2.2rem;
    max-width: 40rem;
  }
  @media ${devices.lg} {
    max-width: 55rem;
    padding: 2.5rem;
  }
`
export const ExperienceHeader = styled.div`
  display: grid;
  grid-area: header;
  grid-template-areas:
    'position date'
    'company  company';
  row-gap: 1rem;
  align-items: center;
  justify-content: space-between;
`
export const ExperienceList = styled.ul`
  text-align: start;
  padding: 0;
  line-height: 1.4rem;
  list-style-type: none;
`
export const ExperienceListItem = styled.li`
  font-size: 0.78rem;
  list-style-type: disc;
  &:nth-child(even) {
    list-style-type: circle;
  }
  @media ${devices.lg} {
    font-size: 0.9rem;
    line-height: 2.2rem;
    font-weight: 400;
  }
`
export const ExperienceText = styled.div`
  font-size: 0.92rem;
  font-weight: 400;
  @media ${devices.lg} {
    font-size: 1.15rem;
  }
`
export const ExperiencePosition = styled(ExperienceText)`
  grid-area: position;
  text-align: left;
  font-weight: 700;
`
export const ExperienceCompany = styled(ExperienceText)`
  grid-area: company;
  text-align: left;
  color: ${(props: IColor) => props.color};
`
export const ExperienceDate = styled(ExperienceText)`
  grid-area: date;
  text-align: right;
  font-weight: 300;
  font-size: 0.8rem;
  @media ${devices.lg} {
    font-size: 1rem;
  }
`
