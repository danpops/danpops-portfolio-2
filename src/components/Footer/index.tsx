import styled from 'styled-components'
import useTheme from '../../hooks/useTheme'
import devices from '../../utils/devices'
import { IBackgroundColor, IColor } from '../../types'

const FooterContainer = styled.footer`
  diplay: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  width: 100%;
  padding: 0.6rem 0rem;
  
  ${(props: IBackgroundColor) => `
  background-color: ${props.bgColor};
  `}
  
  @media ${devices.md} {
    padding: 0.8rem 0rem;
  }
  
  @media ${devices.lg} {
    padding: 1.2rem 0rem;
  }
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
