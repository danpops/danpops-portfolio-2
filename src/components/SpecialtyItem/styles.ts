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
  row-gap: 1.5rem;
  cursor: pointer;
  text-decoration: none;
  @media ${devices.md} {
    grid-template-rows: auto auto;
  }
`
export const SpecialtiesIcon = styled.div`
  color: ${(props: IColor) => props.color};
`
export const SpecialtiesItemLabel = styled.p`
  display: none;
  @media ${devices.md} {
    display: block;
    font-weight: 500;
    font-size: 0.85rem;
    margin: 0;
    color: ${({ color }) => color};
    text-decoration: none;
  }
`
