import styled from 'styled-components'
import { ICompanyImage } from '../../types'
import { Text } from '../Text'

export const CompanyContainer = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CompanyImage = styled.div`
  background-image: ${({ src }: ICompanyImage) => `url(${src})`};
  background-size: cover;
  background-position: center;
  border-radius: 20%;
  width: 6.3rem;
  height: 6.3rem;
  margin: 0 auto;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
`

export const CompanyText = styled(Text)`
  margin-top: 2rem;
  font-weight: 500;
  font-size: 0.9rem;
`
