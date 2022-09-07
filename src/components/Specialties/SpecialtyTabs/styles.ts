import styled from 'styled-components'
import devices from '../../../utils/devices'
import { IThemeStyle } from '../../../types'
import { PrimaryButton } from '../../Buttons/styles'

export const SpecialtiesTabsContainer = styled.div`
  display: grid;
  grid-area: tabs;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-items: center;
  grid-gap: 0.5rem;
  margin-bottom: 2rem;

  @media ${devices.md} {
    margin-bottom: 0rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }

  @media ${devices.lg} {
    align-items: center;
    grid-template-columns: repeat(2, minmax(9rem, 1fr));
    grid-template-rows: repeat(2, minmax(5rem, 1fr));
  }
`

const getButtonStyle = (theme: IThemeStyle): string => `
  background-color: ${theme.bgColor};
  color: ${theme.color};
`

export const SpecialtiesTabItem = styled.div``

export interface ISpecialtyProps {
  active: boolean
  activeBg: string
  activeColor: string
  color: string
  bgColor: string
}

export const SpecialtiesButton = styled(PrimaryButton)`
  width: 8rem;
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
