import styled from 'styled-components'
import { colors } from '../../../design'
import devices from '../../../utils/devices'

export const SpecialtiesContentContainer = styled.div`
  display: grid;
  grid-area: content;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  justify-items: center;
  align-items: center;

  @media ${devices.lg} {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
`

export const SpecialtiesItem = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  height: 10rem;
  width: 10rem;
  cursor: pointer;

  @media ${devices.lg} {
    height: 8rem;
  }
`

export const SpecialtiesImage = styled.div`
  background-image: ${({ src }: { src: string }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  width: 3.4rem;
  height: 3.4rem;
`
export const SpecialtiesItemLabel = styled.p`
  font-weight: 500;
  margin-top: 1.3rem;
  margin-bottom: 0;
  color: ${colors.black};
`
