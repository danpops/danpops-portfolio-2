import colors from '../../design/colors'
import styled from 'styled-components'

export const PrimaryButton = styled.button`
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  text-transform: lowercase !important;
  border-radius: 10rem;
  border: none;
  font-weight: 500;
  font-size: 0.85rem;
  padding: 1.25rem 2.25rem;
  cursor: pointer;
  color: ${colors.light};
  background-color: ${colors.primary};
`
