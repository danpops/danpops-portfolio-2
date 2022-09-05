import styled from 'styled-components'
import colors from '../../design/colors'
import devices from '../../utils/devices'

export const AboutSection = styled.section`
  diplay: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 8rem 0rem;
  background-color: ${colors.primary};
  text-align: center;
  width: 100%;
`
export const AboutContainer = styled.div`
  margin: 0 auto;
  padding-left: 2rem;
  padding-right: 2rem;

  @media ${devices.md} {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  @media ${devices.lg} {
    max-width: 53rem;
    padding-left: 10rem;
    padding-right: 10rem;
  }
`

export const ImageCircle = styled.div`
  background-image: ${({ src }: { src: string }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-radius: 50%;
  width: 160px;
  height: 160px;
  margin: 0 auto;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
`
