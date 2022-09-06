import { colors } from '../../design'
import { Divider, Header3 } from '../../components/Text'
import { Section, HeaderContainer } from '../../components/Layout/styles'
import { SecondaryButton } from '../../components/Buttons'
import { GithubIcon } from './styles'
import { github } from '../../assets/data/text'

function Github (): JSX.Element {
  return (
    <Section id='github' bgColor={colors.dark}>
      <HeaderContainer>
        <GithubIcon size={90} />
        <Header3 color={colors.white}>{github.heading}</Header3>
        <Divider color={colors.white} />
        <SecondaryButton
          target='_blank'
          rel='noopener noreferrer'
          href={github.url}
        >
          {github.buttonText}
        </SecondaryButton>
      </HeaderContainer>
    </Section>
  )
}

export default Github
