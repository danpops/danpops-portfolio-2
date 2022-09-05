import { About, Hero, Specialties, Experience, Projects } from './containers'
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
      <Projects />
    </Layout>
  )
}

export default App
