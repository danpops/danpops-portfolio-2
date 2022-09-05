import { colors } from '../../design'
import { Divider, Header3 } from '../../components/Text'
import { Section, Container } from '../../components/Layout/styles'

function Projects (): JSX.Element {
  return (
    <Section bgColor={colors.primary}>
      <Container>
        <Header3 color={colors.light}>my projects</Header3>
        <Divider color={colors.light} />
      </Container>
    </Section>
  )
}

export default Projects
