import { useState } from 'react'
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
  ImageContainer,
  ExperienceExpanded,
  ExperienceChevron,
  ExperienceListDesktop,
  ChevronIcon
} from './styles'
import Markdown from 'react-markdown'
import useChevronAnimation from '../../hooks/animations/useChevronAnimation'

export function ExperienceCard ({ experience }: IExperienceCard): JSX.Element {
  const [expanded, setExpanded] = useState(false)
  const chevronAnimation = useChevronAnimation(expanded)
  const toggleExperience = (): void => setExpanded(!expanded)
  const { theme } = useTheme()
  const renderTechPills = experience.technologies.map((item, i) => (
    <TechnologyPill bgColor={theme.primary} color={theme.light} key={i}>
      {item}
    </TechnologyPill>
  ))
  const renderList = experience.notes.map((item, i) => (
    <ExperienceListItem key={i}>
      <Markdown>{item}</Markdown>
    </ExperienceListItem>
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
        <ExperienceChevron {...chevronAnimation} onClick={toggleExperience}>
          <ChevronIcon color={theme.primary} size={25} />
        </ExperienceChevron>
      </ExperienceHeader>
      <TechnologyContainer>{renderTechPills}</TechnologyContainer>
      <ExperienceExpanded expanded={expanded}>
        <ExperienceList color={theme.gray}>{renderList}</ExperienceList>
      </ExperienceExpanded>
      <ExperienceListDesktop color={theme.gray}>
        {renderList}
      </ExperienceListDesktop>
    </ExperienceCardContainer>
  )
}
