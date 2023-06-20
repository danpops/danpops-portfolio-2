import { Divider, Header3, Text } from '../../components/Text'
import { about, sections } from '../../assets/data'
import { Section, HeaderContainer } from '../../components/Layout/styles'
import useTheme from '../../hooks/useTheme'

function About (): JSX.Element {
  const { theme } = useTheme()
  return (
    <Section id={sections.ABOUT} bgColor={theme.primary}>
      <HeaderContainer>
        <Header3 color={theme.light}>{about.heading}</Header3>
        <Divider color={theme.light} />
        <Text color={theme.light}>{about.content}</Text>
      </HeaderContainer>
    </Section>
  )
}

export default About
