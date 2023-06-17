import useTheme from '../../hooks/useTheme'
import { IExperienceCard } from '../../types'
import {
  ExperienceCardContainer,
  ExperienceHeader,
  ExperiencePosition,
  ExperienceCompany,
  ExperienceDate,
  ExperienceList,
  ExperienceListItem
} from './styles'

export function ExperienceCard ({ experience }: IExperienceCard): JSX.Element {
  const { theme } = useTheme()
  return (
    <ExperienceCardContainer bgColor={theme.secondary} color={theme.tertiary}>
      <ExperienceHeader>
        <ExperiencePosition>{experience.title}</ExperiencePosition>
        <ExperienceCompany color={theme.primary}>
          {experience.company}
        </ExperienceCompany>
        <ExperienceDate>{experience.date}</ExperienceDate>
      </ExperienceHeader>
      <ExperienceList>
        {experience.notes.map((item, i) => (
          <ExperienceListItem key={i}>{item}</ExperienceListItem>
        ))}
      </ExperienceList>
    </ExperienceCardContainer>
  )
}
