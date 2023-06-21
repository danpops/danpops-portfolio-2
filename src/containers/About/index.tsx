import { Divider, Header3, Text } from '../../components/Text'
import { about, sections } from '../../assets/data'
import { Section, HeaderContainer } from '../../components/Layout/styles'
import useTheme from '../../hooks/useTheme'

function About (): JSX.Element {
  const { theme } = useTheme()
  return (
    <Section id={sections.ABOUT} bgColor={theme.shadow}>
      <HeaderContainer>
        <Header3 color={theme.tertiary}>{about.heading}</Header3>
        <Divider color={theme.primary} />
        <Text color={theme.tertiary}>{about.content}</Text>
      </HeaderContainer>
    </Section>
  )
}

export default About
