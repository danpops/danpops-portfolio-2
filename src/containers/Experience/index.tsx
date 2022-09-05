import { colors } from '../../design'
import { Divider, Header3 } from '../../components/Text'
import { Section, Container } from '../../components/Layout/styles'
import Carousel from '../../components/Carousel'
import { CarouselContainer } from './styles'
import { experience } from '../../data/text'

function Experience (): JSX.Element {
  return (
    <Section bgColor={colors.dark}>
      <Container>
        <Header3 color={colors.light}>{experience.heading}</Header3>
        <Divider color={colors.light} />
      </Container>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
    </Section>
  )
}

export default Experience
