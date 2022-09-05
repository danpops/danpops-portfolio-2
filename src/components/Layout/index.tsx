import { LayoutProps } from '../../types'
// import Footer from '../Footer'
import Navigation from '../Navigation'

function Layout ({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
