import './App.css';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Navigation from './components/Navigation/Navigation';

function App() {

  return (
    <main>
      <Navigation />

      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
