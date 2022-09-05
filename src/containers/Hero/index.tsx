import ParticlesBg from 'particles-bg'
import { HeaderContainer, HeroHeader5, HeroMasthead } from './styles'
import { Divider, Header1 } from '../../components/Text'
import { PrimaryButton } from '../../components/Buttons'
import { colors } from '../../design'
import { hero } from '../../data/uiText'

function Hero (): JSX.Element {
  return (
    <HeroMasthead>
      <ParticlesBg num={60} type='cobweb' color={colors.primary} bg />
      <HeaderContainer>
        <Header1>{hero.heading1}</Header1>
        <Header1>{hero.heading2}</Header1>
        <Divider color={colors.primary} />
        <HeroHeader5>{hero.heading3}</HeroHeader5>
        <PrimaryButton>{hero.buttonText}</PrimaryButton>
      </HeaderContainer>
    </HeroMasthead>
  )
}

export default Hero
