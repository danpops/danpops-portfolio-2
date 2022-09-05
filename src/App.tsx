import { About, Hero } from './containers'
import Layout from './components/Layout'
import GlobalStyle from './design/global'

function App (): JSX.Element {
  return (
    <Layout>
      <GlobalStyle />
      <Hero />
      <About />
    </Layout>
  )
}

export default App
