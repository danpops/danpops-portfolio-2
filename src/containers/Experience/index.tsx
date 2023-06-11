import { Divider, Header3 } from '../../components/Text'
import { Section, HeaderContainer } from '../../components/Layout/styles'
import Carousel from '../../components/Carousel'
import { CarouselContainer } from './styles'
import { experience, sections } from '../../assets/data'
import useTheme from '../../hooks/useTheme'

function Experience (): JSX.Element {
  const { theme } = useTheme()
  return (
    <Section id={sections.EXPERIENCE} bgColor={theme.primary}>
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
