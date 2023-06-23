import { experience, sections } from '../../assets/data'
import useTheme from '../../hooks/useTheme'
import { ExperienceContainer } from './styles'
import { ExperienceCard } from '../../components/ExperienceCard'
import { ExpandSectionCustom } from '../../components/ExpandedSection'

function Experience (): JSX.Element {
  const { theme } = useTheme()
  const cards = experience.data.map((item, i) => (
    <ExperienceCard key={i} experience={item} />
  ))
  return (
    <ExpandSectionCustom
      section={sections.EXPERIENCE}
      heading={experience.heading}
      bgColor={theme.shadow}
      color={theme.tertiary}
    >
      <ExperienceContainer>{cards}</ExperienceContainer>
    </ExpandSectionCustom>
  )
}

export default Experience
