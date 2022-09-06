import { About, Hero, Specialties, Experience, Github, Contact } from './containers'
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
      <Github />
      <Contact />
    </Layout>
  )
}

export default App
