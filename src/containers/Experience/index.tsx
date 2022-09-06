import { colors } from '../../design'
import { Divider, Header3 } from '../../components/Text'
import { Section, HeaderContainer } from '../../components/Layout/styles'
import Carousel from '../../components/Carousel'
import { CarouselContainer } from './styles'
import { experience } from '../../assets/data/text'

function Experience (): JSX.Element {
  return (
    <Section bgColor={colors.dark}>
      <HeaderContainer>
        <Header3 color={colors.white}>{experience.heading}</Header3>
        <Divider color={colors.white} />
      </HeaderContainer>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
    </Section>
  )
}

export default Experience
