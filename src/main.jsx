import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import Home from './Home.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<Home />*/}
    <Router basename='/noel'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </StrictMode>,
)
