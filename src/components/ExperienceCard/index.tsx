import useTheme from '../../hooks/useTheme'
import { IExperienceCard } from '../../types'
import {
  ExperienceCardContainer,
  ExperienceHeader,
  ExperiencePosition,
  ExperienceCompany,
  ExperienceDate,
  ExperienceList,
  ExperienceListItem,
  TechnologyPill,
  TechnologyContainer,
  CompanyLogo,
  ImageContainer
} from './styles'

export function ExperienceCard ({ experience }: IExperienceCard): JSX.Element {
  const { theme } = useTheme()
  const renderTechPills = experience.technologies.map((item, i) => (
    <TechnologyPill bgColor={theme.primary} color={theme.light} key={i}>
      {item}
    </TechnologyPill>
  ))
  const renderList = experience.notes.map((item, i) => (
    <ExperienceListItem key={i}>{item}</ExperienceListItem>
  ))
  return (
    <ExperienceCardContainer color={theme.tertiary}>
      <ImageContainer>
        <CompanyLogo alt={experience.company} src={experience.logo} />
      </ImageContainer>
      <ExperienceHeader>
        <ExperiencePosition>{experience.title}</ExperiencePosition>
        <ExperienceDate>{experience.date}</ExperienceDate>
        <ExperienceCompany>{experience.company}</ExperienceCompany>
      </ExperienceHeader>
      <TechnologyContainer>{renderTechPills}</TechnologyContainer>
      <ExperienceList color={theme.gray}>{renderList}</ExperienceList>
    </ExperienceCardContainer>
  )
}
