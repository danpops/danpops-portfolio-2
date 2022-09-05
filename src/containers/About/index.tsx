import me from '../../assets/me.jpeg'
import colors from '../../design/colors'
import { AboutSection, AboutContainer, ImageCircle } from './styles'
import { Divider, Header3, ParagraphText } from '../../components/Text'
import { about } from '../../data/uiText'

function About (): JSX.Element {
  return (
    <AboutSection>
      <AboutContainer>
        <ImageCircle src={me} />
        <Header3 color={colors.white}>{about.heading}</Header3>
        <Divider color={colors.white} />
        <ParagraphText>{about.content}</ParagraphText>
      </AboutContainer>
    </AboutSection>
  )
}

export default About
