import { Divider, Header3 } from '../../components/Text'
import { Section, HeaderContainer } from '../../components/Layout/styles'
import CustomButton from '../../components/Buttons'
import { ButtonContainer, GithubIcon } from './styles'
import { github } from '../../assets/data'
import useTheme from '../../hooks/useTheme'

const GITHUB_ICON_SIZE = 90

function Github (): JSX.Element {
  const { theme } = useTheme()
  return (
    <Section id='github' bgColor={theme.secondary}>
      <HeaderContainer>
        <GithubIcon size={GITHUB_ICON_SIZE} color={theme.tertiary} />
        <Header3 color={theme.tertiary}>{github.heading}</Header3>
        <Divider color={theme.tertiary} />
        <ButtonContainer
          target='_blank'
          rel='noopener noreferrer'
          href={github.url}
        >
          <CustomButton
            color={theme.secondary}
            bgColor={theme.tertiary}
            label={github.buttonText}
          />
        </ButtonContainer>
      </HeaderContainer>
    </Section>
  )
}

export default Github
