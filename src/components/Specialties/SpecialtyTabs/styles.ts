import styled from 'styled-components'
import devices from '../../../utils/devices'
import { ISpecialtyProps, IThemeStyle } from '../../../types'
import { animated } from 'react-spring'

export const SpecialtiesTabsContainer = styled.div`
  display: grid;
  grid-area: tabs;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(2, minmax(0, 1fr));
  justify-items: center;
  grid-gap: 1rem;
  margin-bottom: 4rem;

  @media ${devices.md} {
    margin-bottom: 0rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  @media ${devices.lg} {
    grid-gap: 0.5rem;
    align-items: center;
    grid-template-columns: repeat(2, minmax(10rem, 1fr));
    grid-template-rows: repeat(2, minmax(4rem, 1fr));
  }
`

const getButtonStyle = (theme: IThemeStyle): string => `
  background-color: ${theme.bgColor};
  color: ${theme.color};
`

export const SpecialtyButton = styled(animated.button)`
  box-shadow: 0 0.062rem 0.125rem #00000055 !important;
  text-transform: lowercase !important;
  border-radius: 1.8rem;
  border: none;
  font-weight: 500;
  font-size: 0.9rem;
  width: 8rem;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: background-color 0.5s ease-out;
  ${({ activeBg, active, activeColor, bgColor, color }: ISpecialtyProps) => {
    const activeStyle = { bgColor: activeBg, color: activeColor }
    const defaultStyle = { bgColor, color }
    return `
      ${getButtonStyle(active ? activeStyle : defaultStyle)}
      &:hover {
        ${getButtonStyle(activeStyle)}
      }`
  }}
`
