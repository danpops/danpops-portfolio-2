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
  bgColor: string
}
export interface INavigationExpand {
  expanded: boolean
  onClick?: () => void
}
export interface INavigationContainer {
  isTransparent: boolean
  bgColor: string
  color: string
}
export interface INavigationItem {
  item: string
  hoverColor: string
  color: string
  onClick?: () => void
}
export interface ICustomButton {
  label: string
  color: string
  bgColor: string
}
export interface ICarouselItem {
  exp: IExperienceData
}
export interface INavigationBrand {
  clickHero: () => void
}
export interface INavigationToggle {
  toggleNavbar: () => void
  expanded: boolean
}
export interface IStroke {
  stroke: string
}
export interface ISpecialtyItem {
  name: string
  href: string
  image: string
}
export interface IBoopAnimationReturn {
  onMouseEnter: () => void
  onMouseLeave: () => void
  style: any
}
