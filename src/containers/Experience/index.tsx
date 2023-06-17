import { Divider, Header3 } from '../../components/Text'
import { Section, HeaderContainer } from '../../components/Layout/styles'
import { experience, sections } from '../../assets/data'
import useTheme from '../../hooks/useTheme'
import { ExperienceContainer } from './styles'
import { ExperienceCard } from '../../components/ExperienceCard'

function Experience (): JSX.Element {
  const { theme } = useTheme()
  const cards = experience.data.map((item, i) => (
    <ExperienceCard key={i} experience={item} />
  ))
  return (
    <Section id={sections.EXPERIENCE} bgColor={theme.primary}>
      <HeaderContainer>
        <Header3 color={theme.light}>{experience.heading}</Header3>
        <Divider color={theme.light} />
      </HeaderContainer>
      <ExperienceContainer>{cards}</ExperienceContainer>
    </Section>
  )
}

export default Experience
