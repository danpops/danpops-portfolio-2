import { About, Hero, Specialties } from './containers'
import Layout from './components/Layout'
import GlobalStyle from './design/global'

function App (): JSX.Element {
  return (
    <Layout>
      <GlobalStyle />
      <Hero />
      <About />
      <Specialties />
    </Layout>
  )
}

export default App
