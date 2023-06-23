import ParticlesBg from 'particles-bg'
import {
  ContentContianer,
  HeroButton,
  HeroContainer,
  HeroHeader1,
  // HeroMasthead,
  ParticleContainer,
  TypewriterContainer
} from './styles'
import { hero, sections } from '../../assets/data'
import { Link } from 'react-scroll'
import useTheme from '../../hooks/useTheme'
import Typewriter from '../../components/Typewriter'
import useBoopAnimation from '../../hooks/animations/useBoopAnimation'
import styled from 'styled-components'
import devices from '../../utils/devices'
import { ExpandHero } from '../../components/ExpandedSection'

const CustomLink = styled(Link)`
  @media ${devices.mobile} {
    display: none;
  }
  display: block;
  margin-top: 0.5rem;
  @media ${devices.md} {
    margin: 0.5rem 0;
  }
`

function Hero (): JSX.Element {
  const { theme } = useTheme()
  const animatedProps = useBoopAnimation()
  return (
    <ExpandHero
      section='danpops'
      heading='danpops'
      bgColor={theme.primary}
      color={theme.secondary}
    >
      {/* <HeroMasthead bgColor={theme.secondary} id='hero'> */}
      <ParticleContainer bgColor={theme.secondary}>
        <ParticlesBg num={60} type='cobweb' color={theme.primary} />
      </ParticleContainer>
      <ContentContianer>
        <HeroContainer>
          <HeroHeader1 color={theme.tertiary}>{hero.heading1}</HeroHeader1>
          <HeroHeader1 color={theme.tertiary}>{hero.heading2}</HeroHeader1>
        </HeroContainer>
        <TypewriterContainer>
          <Typewriter content={hero.typewriterText} />
        </TypewriterContainer>
        <CustomLink to={sections.ABOUT} smooth duration={500}>
          <HeroButton
            color={theme.light}
            bgColor={theme.primary}
            {...animatedProps}
          >
            {hero.buttonText}
          </HeroButton>
        </CustomLink>
      </ContentContianer>
      {/* </HeroMasthead> */}
    </ExpandHero>
  )
}

export default Hero
