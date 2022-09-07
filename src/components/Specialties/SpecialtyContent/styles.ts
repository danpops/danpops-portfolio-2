import { animated } from 'react-spring'
import styled from 'styled-components'
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

export const SpecialtyItemContainer = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 8rem;
  width: 8rem;
  cursor: pointer;
`

export const SpecialtyItemContent = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SpecialtiesImage = styled.img`
  width: 4rem;
  height: 4rem;
`
export const SpecialtiesItemLabel = styled.p`
  font-weight: 500;
  margin-top: 0.8rem;
  margin-bottom: 0;
  color: ${({ color }) => color};

  @media ${devices.md} {
    margin-top: 1rem;
  }
`
