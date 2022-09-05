import styled from 'styled-components'
import colors from '../../../design/colors'
import devices from '../../../utils/devices'

export const SpecialtiesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;

  @media ${devices.lg} {
    height: 8rem;
  }
`

export const SpecialtiesImage = styled.div`
  background-image: ${({ src }: { src: string }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 4rem;
  height: 4rem;
`
export const SpecialtiesItemLabel = styled.p`
  font-weight: 500;
  margin-top: 1.2rem;
  margin-bottom: 0;
  color: ${colors.dark}
`
