import styled from 'styled-components'
import { PrimaryButton } from '../../../components/Buttons'
import colors from '../../../design/colors'

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
