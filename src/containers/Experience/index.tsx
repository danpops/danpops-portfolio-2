import { Section, HeaderContainer } from '../../components/Layout/styles'
import { experience, sections } from '../../assets/data'
import useTheme from '../../hooks/useTheme'
import { ExperienceContainer, ExperienceHeader } from './styles'
import { ExperienceCard } from '../../components/ExperienceCard'

function Experience (): JSX.Element {
  const { theme } = useTheme()
  const cards = experience.data.map((item, i) => (
    <ExperienceCard key={i} experience={item} />
  ))
  return (
    <Section id={sections.EXPERIENCE} $bgcolor={theme.shadow}>
      <HeaderContainer>
        <ExperienceHeader color={theme.tertiary}>
          {experience.heading}
        </ExperienceHeader>
        <ExperienceContainer>{cards}</ExperienceContainer>
      </HeaderContainer>
    </Section>
  )
}

export default Experience
