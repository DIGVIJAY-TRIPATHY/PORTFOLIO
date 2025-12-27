import './App.css'
import Header from './components/header.jsx';
import Hero from './components/hero.jsx';
import Experience from './components/experience.jsx';
import Projects from './components/projects.jsx';
import Testimonial from './components/testimonial.jsx';
import Contact from './components/contact.jsx';
import About from './components/about.jsx';
import Footer from './components/footer/Footer.jsx';

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
