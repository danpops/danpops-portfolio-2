import me from '../../assets/images/me.jpeg'
import { colors } from '../../design'
import { ImageCircle } from './styles'
import { Divider, Header3, Text } from '../../components/Text'
import { about } from '../../data/text'
import { Section, Container } from '../../components/Layout/styles'

function About (): JSX.Element {
  return (
    <Section bgColor={colors.primary}>
      <Container>
        <ImageCircle src={me} />
        <Header3 color={colors.light}>{about.heading}</Header3>
        <Divider color={colors.light} />
        <Text>{about.content}</Text>
      </Container>
    </Section>
  )
}

export default About
