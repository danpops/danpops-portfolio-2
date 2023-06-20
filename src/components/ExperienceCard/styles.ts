import styled from 'styled-components'
import { IColor, IThemeStyle } from '../../types'
import devices from '../../utils/devices'

export const ExperienceCardContainer = styled.div`
  display: grid;
  grid-template-areas:
    'header'
    'content';
  border-radius: 1rem;
  margin: 0 1.5rem;
  row-gap: 1rem;
  padding: 2rem;
  box-shadow: 0 0.062rem 0.125rem #00000055 !important;
  ${(props: IThemeStyle) => `
    background-color: ${props.bgColor};
    border: 0.01rem solid ${props.bgColor};
    color: ${props.color};
  `}
  @media ${devices.md} {
    justify-items: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 2.2rem;
    max-width: 40rem;
    row-gap: 1.3rem;
  }
  @media ${devices.lg} {
    max-width: 55rem;
    padding: 4rem;
  }
`
export const ExperienceHeader = styled.div`
  display: grid;
  grid-area: header;
  grid-template-areas:
    'position date'
    'company  company';
  row-gap: 1rem;
  column-gap: 0;
  align-items: center;
`
export const ExperienceList = styled.ul`
  text-align: start;
  padding: 0;
  line-height: 1.4rem;
  list-style: none;
`
interface IListItem extends IColor {
  textColor: string
}
export const ExperienceListItem = styled.li`
  font-size: 1rem;
  line-height: 2rem;
  text-align: justify;
  ${(props: IListItem) => `
    color: ${props.textColor};
    &::before {
      content: '-';
      color: ${props.color};
      display: inline-block;
      width: 1em;
      font-weight: 900;
      margin-left: -1em;
    }
    `}
  @media ${devices.lg} {
    font-size: 1.2rem;
    text-align: justify;
    line-height: 2.6rem;
  }
`
export const ExperienceText = styled.div`
  font-size: 0.95rem;
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
  text-align: end;
  font-weight: 400;
  color: ${(props: IColor) => props.color};
`
