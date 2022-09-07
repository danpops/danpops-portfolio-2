import styled from 'styled-components'
import useTheme from '../../hooks/useTheme'
import { IBackgroundColor, IColor } from '../Buttons'

const FooterContainer = styled.footer`
  diplay: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1.4rem 0rem;
  ${(props: IBackgroundColor) => `
    background-color: ${props.bgColor};
  `}
  text-align: center;
  width: 100%;
`

const FooterText = styled.h5`
  text-align: center;
  ${(props: IColor) => `
    color: ${props.color};
  `}
  font-weight: 400;
`

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
