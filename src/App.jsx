import BackToTopButton from "~components/BackToTopButton"
import About from "./components/About"
import Clients from "./components/Clients"
import Contact from "./components/Contact"
import Hero from "~/components/Hero"
import Navbar from "~/components/Navbar"
import Projects from "~/components/Projects"
import Skills from "~/components/Skills"

const App = () => {
  return (
    <div className='bg-neutral-900 font-kanit leading-loose'>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Clients />
      <Projects />
      <Contact />
      <BackToTopButton />
    </div>
  )
}
export default App
