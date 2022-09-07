import ParticlesBg from 'particles-bg'
import {
  HeroContainer,
  HeroHeader5,
  HeroMasthead,
  ParticleContainer
} from './styles'
import { Divider, Header1 } from '../../components/Text'
import { PrimaryButton } from '../../components/Buttons'
import { hero } from '../../assets/data/text'
import { Link } from 'react-scroll'
import useTheme from '../../hooks/useTheme'

function Hero (): JSX.Element {
  const { theme } = useTheme()
  return (
    <HeroMasthead bgColor={theme.secondary} id='hero'>
      <ParticleContainer bgColor={theme.secondary}>
        <ParticlesBg num={60} type='cobweb' color={theme.primary} />
      </ParticleContainer>
      <HeroContainer>
        <Header1 color={theme.tertiary}>{hero.heading1}</Header1>
        <Header1 color={theme.tertiary}>{hero.heading2}</Header1>
        <Divider color={theme.primary} />
        <HeroHeader5 color={theme.tertiary}>{hero.heading3}</HeroHeader5>
        <Link to='about' smooth duration={500}>
          <PrimaryButton color={theme.secondary} bgColor={theme.primary}>
            {hero.buttonText}
          </PrimaryButton>
        </Link>
      </HeroContainer>
    </HeroMasthead>
  )
}

export default Hero
