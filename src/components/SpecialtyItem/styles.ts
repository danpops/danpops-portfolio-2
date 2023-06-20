import styled from 'styled-components'
import { IColor } from '../../types'
import { animated } from 'react-spring'

export const SpecialtyItemContainer = styled(animated.div)``
export const SpecialtyItemGrid = styled.a`
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  row-gap: 1.5rem;
  cursor: pointer;
  text-decoration: none;
`
export const SpecialtiesIcon = styled.div`
  color: ${(props: IColor) => props.color};
`
export const SpecialtiesItemLabel = styled.p`
  font-weight: 500;
  font-size: 1rem;
  margin: 0;
  color: ${({ color }) => color};
  text-decoration: none;
`
