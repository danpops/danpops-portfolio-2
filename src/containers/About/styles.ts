import styled from 'styled-components'
import { defaultColors } from '../../design/colors'

export const ImageCircle = styled.div`
  background-image: ${({ src }: { src: string }) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-radius: 10%;
  border: 0.01rem solid ${defaultColors.dark};
  width: 8rem;
  height: 8rem;
  margin: 0;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
`
