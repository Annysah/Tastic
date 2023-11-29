import React from 'react'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import About from './components/About';
import Menu from './components/Menu';
import Team from './components/Team';
import Offers from './components/Offers';

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
    </>
  )
}
 
export default App