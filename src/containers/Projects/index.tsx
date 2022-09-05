import { colors } from '../../design'
import { Divider, Header3 } from '../../components/Text'
import { Section, HeaderContainer } from '../../components/Layout/styles'

function Projects (): JSX.Element {
  return (
    <Section bgColor={colors.primary}>
      <HeaderContainer>
        <Header3 color={colors.light}>my projects</Header3>
        <Divider color={colors.light} />
      </HeaderContainer>
    </Section>
  )
}

export default Projects
