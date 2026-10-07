import './App.css';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';
import VoltarAoTopo from './components/BackToTop/BackToTop';

function App() {

  return (
    <main>
      {/* Organiza as principais seções do portfólio na ordem de exibição. */}
      <Navigation />

      <About />
      <Projects />
      <Skills />
      <Contact />

      <VoltarAoTopo />
    </main>
  )
}

export default App
