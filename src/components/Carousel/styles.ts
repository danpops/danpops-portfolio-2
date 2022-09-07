import styled from 'styled-components'
import { ICompanyImage } from '../../types'

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
  margin: 0rem auto 1.3rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
`

export const CompanyText = styled.a`
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  line-height: 1.5rem;
  font-weight: 400;
  letter-spacing: 0.02rem;
  text-decoration: none;
  color: ${({ color }) => color};
`
