import styled from 'styled-components'
import { IColor } from '../../types'
import { animated } from 'react-spring'
import devices from '../../utils/devices'

export const SpecialtyItemContainer = styled(animated.div)`
  width: 100%;
`
export const SpecialtyItemGrid = styled.a`
  display: grid;
  justify-items: center;
  grid-template-rows: auto;
  grid-template-columns: auto;
  align-self: center;
  margin: 0;
  row-gap: 0.75rem;
  cursor: pointer;
  text-decoration: none;
  @media ${devices.md} {
    row-gap: 1.5rem;
    grid-template-rows: auto auto;
  }
`
export const SpecialtiesIcon = styled.div`
  color: ${(props: IColor) => props.color};
`
export const SpecialtiesItemLabel = styled.p`
  font-weight: 500;
  margin: 0;
  color: ${({ color }) => color};
  text-decoration: none;
  font-size: 0.6rem;
  @media ${devices.md} {
    font-size: 0.85rem;
  }
`
