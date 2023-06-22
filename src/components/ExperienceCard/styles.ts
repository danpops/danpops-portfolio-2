import styled from 'styled-components'
import { IColor, IThemeStyle } from '../../types'
import devices from '../../utils/devices'

const pillColor = (props: IThemeStyle): string => `  
  background-color: ${props.bgColor};
  color: ${props.color};
`
export const ExperienceCardContainer = styled.div`
  display: grid;
  grid-template-areas:
    'logo       header'
    'technology technology'
    'content    content';
  grid-template-columns: 4rem 1fr;
  grid-template-rows: repeat(minmax(0, 6rem));
  row-gap: 1.5rem;
  justify-content: flex-start;
  color: ${(props: IColor) => props.color};
  @media ${devices.md} {
    column-gap: 1rem;
    align-items: center;
  }
  @media ${devices.lg} {
    grid-template-areas:
      'logo header'
      '.    technology'
      '.    content';
  }
`
export const ExperienceHeader = styled.div`
  display: grid;
  grid-area: header;
  grid-template-areas:
    'date'
    'position'
    'company';
  height: 100%;
  column-gap: 0;
  align-items: center;
  row-gap: 0.25rem;
  @media ${devices.md} {
    row-gap: 0.5rem;
    column-gap: 0.5rem;
    grid-template-areas:
      'position date'
      'company .';
  }
`
export const CompanyLogo = styled.img`
  object-fit: contain;
  width: 3.5rem;
  height: 3.5rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.15) !important;
  border-radius: 8%;
  @media ${devices.md} {
    width: 4rem;
    height: 4rem;
  }
`
export const ExperienceList = styled.ul`
  text-align: start;
  grid-area: content;
  padding: 0;
  margin: 0;
  list-style: none;
  color: ${(props: IColor) => props.color};
`
export const ExperienceListItem = styled.li`
  font-size: 1rem;
  line-height: 150%;
  text-align: start;
  margin-bottom: 1rem;
  @media ${devices.lg} {
    font-size: 1.2rem;
    text-align: justify;
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
  font-size: 0.85rem;
  @media ${devices.md} {
    font-size: 1rem;
    text-align: end;
  }
  @media ${devices.lg} {
    font-size: 1.1rem;
  }
`
export const TechnologyContainer = styled.div`
  display: grid;
  grid-area: technology;
  grid-auto-flow: column;
  align-items: center;
  justify-self: start;
  column-gap: 0.5rem;
`
export const TechnologyPill = styled.div`
  padding: 0.35rem 0.6rem;
  font-size: 0.7rem;
  border-radius: 1.8rem;
  font-weight: 600;
  white-space: nowrap;
  align-items: center;
  justify-self: start;
  ${(props: IThemeStyle) => pillColor(props)}
  @media ${devices.lg} {
    font-size: 0.85rem;
    padding: 0.5rem 0.8rem;
  }
`
export const ImageContainer = styled.div`
  grid-area: logo;
  display: grid;
  justify-content: flex-start;
  align-items: center;
`
