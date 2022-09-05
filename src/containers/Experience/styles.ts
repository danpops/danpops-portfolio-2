import styled from 'styled-components'
import devices from '../../utils/devices'

export const CarouselContainer = styled.div`
  padding: 2rem 0;

  @media ${devices.lg} {
    padding: 3rem 14rem;
  }
`
