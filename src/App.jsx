import About from "./components/About";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className='bg-neutral-800'>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Clients />
      <Projects />
      <Contact />
    </div>
  );
};
export default App;
