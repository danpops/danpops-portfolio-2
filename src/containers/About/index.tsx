import me from '../../assets/images/me.jpeg'
import colors from '../../design/colors'
import { ImageCircle } from './styles'
import { Divider, Header3, ParagraphText } from '../../components/Text'
import { about } from '../../data/uiText'
import { Section, Container } from '../../components/Layout/styles'

function About (): JSX.Element {
  return (
    <Section bgColor={colors.primary}>
      <Container>
        <ImageCircle src={me} />
        <Header3 color={colors.light}>{about.heading}</Header3>
        <Divider color={colors.light} />
        <ParagraphText>{about.content}</ParagraphText>
      </Container>
    </Section>
  )
}

export default About
