import { colors } from '../../design'
import { Divider, Header3 } from '../../components/Text'
import { Section, HeaderContainer } from '../../components/Layout/styles'
import { SecondaryButton } from '../../components/Buttons'
import { ButtonContainer, GithubIcon } from './styles'
import { github } from '../../assets/data/text'

const GITHUB_ICON_SIZE = 90

function Github (): JSX.Element {
  return (
    <Section id='github' bgColor={colors.dark}>
      <HeaderContainer>
        <GithubIcon size={GITHUB_ICON_SIZE} />
        <Header3 color={colors.white}>{github.heading}</Header3>
        <Divider color={colors.white} />
        <ButtonContainer>
          <SecondaryButton
            target='_blank'
            rel='noopener noreferrer'
            href={github.url}
          >
            {github.buttonText}
          </SecondaryButton>
        </ButtonContainer>
      </HeaderContainer>
    </Section>
  )
}

export default Github
