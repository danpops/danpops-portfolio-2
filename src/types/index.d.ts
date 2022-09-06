export interface LayoutProps {
  children: JSX.Element | JSX.Element[]
}
export interface SpecialtyData {
  image: string
  alt: string
  name: string
  href: string
}
export interface SpecialtiesAction {
  type: SpecialtiesActionKind.SET_SPECIALTY_CATEGORY
  title: string
  data: SpecialtyData[]
}
export interface SpecialtyState {
  title: string
  data: SpecialtyData[]
}
export interface IUseSpecialties {
  activeSpecialty: string
  activeData: SpecialtyData[]
  setActiveSpecialty: (type: SpecialtiesType) => () => void
}
export interface ISpecialtyTabs {
  activeSpecialty: string
  setActiveSpecialty: (type: SpecialtiesType) => () => void
}
export interface ISpecialtyContent {
  data: SpecialtyData[]
}
export interface IUseCarousel {
  length: number
}
export interface IExperienceData {
  company: string
  image: string
  url?: string
}
export interface IContactOption {
  icon: JSX.Element
  href: string
}
export interface INavigationMobile {
  expanded: boolean
  toggleNavbar: () => void
}
export interface ICompanyImage {
  src: string
}
export interface ISection {
  bgColor: string
}
export interface INavigationMobileContainer {
  expanded: boolean
}
export interface INavigationContainer {
  isTransparent: boolean
}
