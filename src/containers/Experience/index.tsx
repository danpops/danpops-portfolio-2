import { Section, HeaderContainer } from '../../components/Layout/styles'
import { experience, sections } from '../../assets/data'
import useTheme from '../../hooks/useTheme'
import { ExperienceContainer, ExperienceHeader } from './styles'
import { ExperienceCard } from '../../components/ExperienceCard'
import RevealAnimation from '../../components/RevealAnimation'

function Experience (): JSX.Element {
  const { theme } = useTheme()
  const cards = experience.data.map((item, i) => (
    <RevealAnimation key={i}>
      <ExperienceCard experience={item} />
    </RevealAnimation>
  ))
  return (
    <Section id={sections.EXPERIENCE} $bgcolor={theme.shadow}>
      <HeaderContainer>
        <RevealAnimation>
          <ExperienceHeader color={theme.tertiary}>
            {experience.heading}
          </ExperienceHeader>
        </RevealAnimation>
        <ExperienceContainer>{cards}</ExperienceContainer>
      </HeaderContainer>
    </Section>
  )
}

export default Experience
