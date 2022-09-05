import styled from 'styled-components'
import { colors } from '../../design'
import devices from '../../utils/devices'

export const Divider = styled.hr`
  width: 3.25rem;
  border-width: 0.1rem;
  border-color: ${({ color }) => color};
  margin-top: 2rem;
  margin-bottom: 2rem;
`
export const Header1 = styled.h1`
  font-weight: 500;
  line-height: 1.2;
  font-size: 2rem;

  @media ${devices.md} {
    font-size: 2.5rem;
  }
`
export const Header3 = styled.h1`
  font-size: 1.85rem;
  font-weight: 400;
  color: ${({ color }) => color};
  @media ${devices.md} {
    font-size: 2.1rem;
  }
`
export const Header5 = styled.h1`
  font-size: 1.25rem;
  font-weight: 500;

  @media ${devices.md} {
    font-size: 1.5rem;
  }
`
export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5rem;
  font-weight: 300;
  color: ${colors.light};
`
