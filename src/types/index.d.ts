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
export interface ISpecialtyTab {
  specialty: SpecialtiesType
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
  isHidden: boolean
  color: string
}
export interface INavigationContent {
  isHidden?: boolean
}
export interface INavigationItem {
  item: string
  active?: boolean
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
export interface ISpringAnimationItems {
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  style: any
}
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
  active?: boolean
}
export interface IBackgroundColor {
  bgColor: string
}
export interface INavigation {
  bgColor: string
  color: string
  isTransparent: boolean
  isExpanded: boolean
}
export interface ISpecialtyProps {
  active: boolean
  activeBg: string
  activeColor: string
  color: string
  bgColor: string
}
export interface IScrollStyle {
  width: string
  background: string
}
export interface IUseNavigation {
  progressBarStyle: IScrollStyle
  isHidden: boolean
  isNavigationExpanded: boolean
  isTransparent: boolean
  clickHero: () => void
  toggleNavbar: () => void
}
export interface ITypewriter {
  content: string
}
export interface IUseTypewriterProps {
  content: string
  speed: number
}
export interface ITypewriterIndex {
  timer: NodeJS.Timer
  content: string
}
