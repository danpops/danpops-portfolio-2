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
  TechnologyContainer
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
      <ExperienceHeader>
        <ExperiencePosition>{experience.title}</ExperiencePosition>
        <ExperienceCompany>{experience.company}</ExperienceCompany>
        <ExperienceDate>{experience.date}</ExperienceDate>
        <TechnologyContainer>{renderTechPills}</TechnologyContainer>
      </ExperienceHeader>
      <ExperienceList color={theme.gray}>{renderList}</ExperienceList>
    </ExperienceCardContainer>
  )
}
