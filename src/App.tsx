import { About, Hero, Specialties, Experience, Contact } from './containers'
import Layout from './components/Layout'
import GlobalStyle from './design/global'

function App (): JSX.Element {
  return (
    <Layout>
      <GlobalStyle />
      <Hero />
      <About />
      <Specialties />
      <Experience />
      <Contact />
    </Layout>
  )
}

export default App
