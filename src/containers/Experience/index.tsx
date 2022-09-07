import { Divider, Header3 } from '../../components/Text'
import { Section, HeaderContainer } from '../../components/Layout/styles'
import Carousel from '../../components/Carousel'
import { CarouselContainer } from './styles'
import { experience } from '../../assets/data/text'
import useTheme from '../../hooks/useTheme'

function Experience (): JSX.Element {
  const { theme } = useTheme()
  return (
    <Section id='experience' bgColor={theme.primary}>
      <HeaderContainer>
        <Header3 color={theme.light}>{experience.heading}</Header3>
        <Divider color={theme.light} />
      </HeaderContainer>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
    </Section>
  )
}

export default Experience
