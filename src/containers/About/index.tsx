import me from '../../assets/images/me.png'
import { ImageCircle } from './styles'
import { Divider, Header3, Text } from '../../components/Text'
import { about } from '../../assets/data/text'
import { Section, HeaderContainer } from '../../components/Layout/styles'
import useTheme from '../../hooks/useTheme'

function About (): JSX.Element {
  const { theme } = useTheme()
  return (
    <Section id='about' bgColor={theme.primary}>
      <HeaderContainer>
        <ImageCircle src={me} />
        <Header3 color={theme.light}>{about.heading}</Header3>
        <Divider color={theme.light} />
        <Text color={theme.light}>{about.content}</Text>
      </HeaderContainer>
    </Section>
  )
}

export default About
