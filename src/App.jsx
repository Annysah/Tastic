import React from 'react'

import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Team from './components/Team/Team';
import Offers from './components/Services/Services';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


import './App.css';

const App = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <Menu />
      <Team />
      <Offers />
      <Contact />
      <Footer />
    </>
  )
}
 
export default App