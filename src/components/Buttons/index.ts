import styled from 'styled-components'

export interface IThemeStyle {
  color: string
  bgColor: string
}
export interface IColor {
  color: string
}
export interface IHoverColor {
  color: string
  hoverColor: string
}
export interface IBackgroundColor {
  bgColor: string
}

export const PrimaryButton = styled.button`
  box-shadow: 0 0.125rem 0.25rem #00000055 !important;
  text-transform: lowercase !important;
  border-radius: 10rem;
  border: none;
  font-weight: 500;
  font-size: 0.85rem;
  padding: 1.25rem 2.25rem;
  cursor: pointer;
  ${(props: IThemeStyle) => `
    color: ${props.color};
    background-color: ${props.bgColor};
  `}
`

export const SecondaryButton = styled.a`
  box-shadow: 0 0.195rem 0.25rem #11000055 !important;
  text-transform: lowercase !important;
  text-decoration: none;
  border-radius: 10rem;
  border: none;
  margin-top: 10rem;
  font-weight: 500;
  font-size: 0.85rem;
  padding: 1.25rem 2.25rem;
  cursor: pointer;
  ${(props: IThemeStyle) => `
    color: ${props.color};
    background-color: ${props.bgColor};
  `}
`
