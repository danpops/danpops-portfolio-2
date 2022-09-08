import useTheme from '../../hooks/useTheme'
import { FooterContainer, FooterText } from './styles'

function Footer (): JSX.Element {
  const { theme } = useTheme()
  const year = new Date().getFullYear()
  return (
    <FooterContainer bgColor={theme.secondary}>
      <FooterText color={theme.tertiary}>© {year} - danpops.ca</FooterText>
    </FooterContainer>
  )
}

export default Footer
