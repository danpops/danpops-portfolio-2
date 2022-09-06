import styled from 'styled-components'
import { colors } from '../../design'

const FooterContainer = styled.footer`
  diplay: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1.4rem 0rem;
  background-color: ${colors.light};
  text-align: center;
  width: 100%;
`

const FooterText = styled.h5`
  text-align: center;
  color: ${colors.gray};
  font-weight: 400;
`

function Footer (): JSX.Element {
  const year = new Date().getFullYear()
  return (
    <FooterContainer>
      <FooterText>© {year} - danpops.ca</FooterText>
    </FooterContainer>
  )
}

export default Footer
