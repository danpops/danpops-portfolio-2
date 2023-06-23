import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { IDispatch } from '../../hooks/useTheme'
import { RootState } from '../../redux/store'
import { toggleActiveItem } from '../../redux/themeSlice'
import { IExpExpand } from '../../types'
import { HeaderContainer, Section } from '../Layout/styles'
import { Header3 } from '../Text'
import devices from '../../utils/devices'

const expandedStyle = `
  opacity: 1;
  height: 100%;
  transition: height 0.75s ease-out;
  transition: all 0.75s ease-in;
  min-height: 10rem;
  align-content: flex-start;
  padding-top: 1rem;
  padding-bottom: 1rem;
`
const ExpandedSection = styled(HeaderContainer)`
  display: grid;
  grid-area: content;
  align-items: flex-start;
  @media ${devices.mobile} {
    -webkit-tap-highlight-color: transparent;
    align-items: center;
    clear: both;
    height: 0;
    overflow: hidden;
    padding-top: 0;
    padding-bottom: 0;
    transition: all 0.75s ease-out;
    opacity: 0;
    ${({ expanded }: IExpExpand) => `${expanded ? expandedStyle : ''}`}
  }
`

export function ExpandSectionCustom (props: any): any {
  const { children, section, heading, bgColor, color } = props
  const { activeItem } = useSelector((state: RootState) => state.theme)
  const isExpanded = activeItem === section
  const dispatch = useDispatch()
  const toggleSection = (): IDispatch => dispatch(toggleActiveItem({ section }))
  // useEffect(() => {}, [activeItem])
  return (
    <Section id={section} bgColor={bgColor}>
      <HeaderContainer>
        <Header3 color={color} onClick={toggleSection}>
          {heading}
        </Header3>
      </HeaderContainer>
      <ExpandedSection expanded={isExpanded}>{children}</ExpandedSection>
    </Section>
  )
}
interface IExpHero {
  bgColor: string
  expanded: boolean
}
const heroExpanded = `
  ${expandedStyle}
  height: 20rem;
`
const ExpandedHero = styled(ExpandedSection)`
  display: grid;
  grid-area: content;
  align-items: center;
  @media ${devices.mobile} {
    -webkit-tap-highlight-color: transparent;
    clear: both;
    height: 0;
    overflow: hidden;
    padding: 0;
    transition: all 0.75s ease-out;
    opacity: 0;
    ${(props: IExpHero) => `
    background-color: ${props.bgColor};
    ${props.expanded ? heroExpanded : ''}
  `}
  }
`
const expandedHeaderStyle = `
  display: none;
`
const headerTabStyle = `
  display: grid;
  grid-template-rows: minmax(0, 1fr);
  grid-template-columns: auto;
  margin: 0;
  justify-content: center;
  align-items: center;
`
const HeroHeader = styled(HeaderContainer)`
  display: ${({ expanded }: { expanded: boolean }) =>
    expanded ? expandedHeaderStyle : headerTabStyle};
`
export function ExpandHero (props: any): any {
  const { children, section, heading, bgColor, color } = props
  const { activeItem } = useSelector((state: RootState) => state.theme)
  const isExpanded = activeItem === section
  const dispatch = useDispatch()
  const toggleSection = (): IDispatch => dispatch(toggleActiveItem({ section }))
  // useEffect(() => {}, [activeItem])
  return (
    // <Section id={section} bgColor={bgColor}>
    <Section bgColor={isExpanded ? 'transparent' : bgColor}>
      {/* {!isExpanded && ( */}
      <HeroHeader expanded={isExpanded}>
        <Header3 color={color} onClick={toggleSection}>
          {heading}
        </Header3>
      </HeroHeader>
      {/* )} */}
      <ExpandedHero
        bgColor={bgColor}
        expanded={isExpanded}
        onClick={toggleSection}
      >
        {children}
      </ExpandedHero>
    </Section>
    // </Section>
  )
}
