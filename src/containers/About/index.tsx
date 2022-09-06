import me from '../../assets/images/me.png'
import { colors } from '../../design'
import { ImageCircle } from './styles'
import { Divider, Header3, Text } from '../../components/Text'
import { about } from '../../assets/data/text'
import { Section, HeaderContainer } from '../../components/Layout/styles'

function About (): JSX.Element {
  return (
    <Section id='about' bgColor={colors.primary}>
      <HeaderContainer>
        <ImageCircle src={me} />
        <Header3 color={colors.white}>{about.heading}</Header3>
        <Divider color={colors.white} />
        <Text>{about.content}</Text>
      </HeaderContainer>
    </Section>
  )
}

export default About
