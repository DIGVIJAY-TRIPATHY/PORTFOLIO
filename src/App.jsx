import './App.css'
import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import Experience from './components/experience.jsx';
import Projects from './components/projects.jsx';
import Testimonial from './components/testimonial.jsx';
import Contact from './components/contact.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Experience/>
      <Projects />
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default App
