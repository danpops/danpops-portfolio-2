import { LayoutProps } from '../../types'
import Footer from '../Footer'
import Navigation from '../Navigation'
import ScrollProgress from '../ScrollProgress'

function Layout ({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <ScrollProgress />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
