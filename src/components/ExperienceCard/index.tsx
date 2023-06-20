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
    <ExperienceCardContainer bgColor={theme.shadow} color={theme.tertiary}>
      <ExperienceHeader>
        <ExperiencePosition>{experience.title}</ExperiencePosition>
        <ExperienceCompany>{experience.company}</ExperienceCompany>
        <ExperienceDate color={theme.primary}>{experience.date}</ExperienceDate>
      </ExperienceHeader>
      <ExperienceList>
        {experience.notes.map((item, i) => (
          <ExperienceListItem
            textColor={theme.tertiary}
            color={theme.primary}
            key={i}
          >
            {item}
          </ExperienceListItem>
        ))}
      </ExperienceList>
    </ExperienceCardContainer>
  )
}
