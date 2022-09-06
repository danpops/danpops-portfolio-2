import ParticlesBg from 'particles-bg'
import { HeroContainer, HeroHeader5, HeroMasthead } from './styles'
import { Divider, Header1 } from '../../components/Text'
import { PrimaryButton } from '../../components/Buttons'
import { colors } from '../../design'
import { hero } from '../../assets/data/text'
import { Link } from 'react-scroll'

function Hero (): JSX.Element {
  return (
    <HeroMasthead id='hero'>
      <ParticlesBg num={60} type='cobweb' color={colors.primary} bg />
      <HeroContainer>
        <Header1>{hero.heading1}</Header1>
        <Header1>{hero.heading2}</Header1>
        <Divider color={colors.primary} />
        <HeroHeader5>{hero.heading3}</HeroHeader5>
        <Link to='about' smooth duration={500}>
          <PrimaryButton>{hero.buttonText}</PrimaryButton>
        </Link>
      </HeroContainer>
    </HeroMasthead>
  )
}

export default Hero
