import './App.css'
import Header from './components/Header/header.jsx'
import Hero from './components/Hero/hero.jsx'
import About from './components/About/about.jsx'
import Experience from './components/Experience/experience.jsx'
import Projects from './components/Projects/projects.jsx'
import Testimonial from './components/Testimonial/testimonial.jsx'
import Contact from './components/Contact/contact.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Experience/>
      <Projects />
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
