import useTheme from '../../hooks/useTheme'
import { LayoutProps } from '../../types'
import Footer from '../Footer'
import Navigation from '../Navigation'
import ScrollProgress from '../ScrollProgress'
import { Main, MetaTag } from './styles'

function Layout ({ id, children }: LayoutProps): JSX.Element {
  const { theme } = useTheme()
  return (
    <>
      <MetaTag name='theme-color' content={theme.secondary} />
      <MetaTag
        name='apple-mobile-web-app-status-bar-style'
        content={theme.secondary}
      />
      <ScrollProgress />
      <Navigation />
      <Main id={id}>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
