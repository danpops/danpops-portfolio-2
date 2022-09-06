import { colors } from '../../design'
import { Divider, Header3 } from '../../components/Text'
import { Section, HeaderContainer } from '../../components/Layout/styles'
import { SecondaryButton } from '../../components/Buttons'
import { GithubIcon } from './styles'

function Github (): JSX.Element {
  return (
    <Section bgColor={colors.primary}>
      <HeaderContainer>
        <GithubIcon size={90} />
        <Header3 color={colors.white}>check out my work on github!</Header3>
        <Divider color={colors.white} />
        <SecondaryButton
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/danpops'
        >
          danpops/github
        </SecondaryButton>
      </HeaderContainer>
    </Section>
  )
}

export default Github
