import styled from 'styled-components'
import { colors } from '../../../design'
import devices from '../../../utils/devices'
import { PrimaryButton } from '../../Buttons'

export const SpecialtiesTabsContainer = styled.div`
  display: grid;
  grid-area: tabs;
  grid-template-columns: repeat(2, minmax(8.5rem, 1fr));
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
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
`

const activeButton = `
  background-color: ${colors.primary};
  color: ${colors.light};
`
const inactiveButton = `
  background-color: ${colors.light};
  color: ${colors.dark};
`

export const SpecialtiesTabItem = styled.div``

export const SpecialtiesButton = styled(PrimaryButton)`
  width: 8rem;

  ${({ active }: { active: boolean }) =>
    active ? activeButton : inactiveButton}
`
