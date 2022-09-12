import ParticlesBg from 'particles-bg'
import {
  ContentContianer,
  HeroButton,
  HeroContainer,
  HeroHeader1,
  HeroMasthead,
  ParticleContainer,
  TypewriterContainer
} from './styles'
import { hero } from '../../assets/data'
import { Link } from 'react-scroll'
import useTheme from '../../hooks/useTheme'
import Typewriter from '../../components/Typewriter'
import useBoopAnimation from '../../hooks/animations/useBoopAnimation'

function Hero (): JSX.Element {
  const { theme } = useTheme()
  const animatedProps = useBoopAnimation()
  return (
    <HeroMasthead bgColor={theme.secondary} id='hero'>
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
          <Link to='about' smooth duration={500}>
            <HeroButton
              color={theme.light}
              bgColor={theme.primary}
              {...animatedProps}
            >
              {hero.buttonText}
            </HeroButton>
          </Link>
        </TypewriterContainer>
      </ContentContianer>
    </HeroMasthead>
  )
}

export default Hero
