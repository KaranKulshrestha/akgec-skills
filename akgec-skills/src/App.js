import React from 'react'
import {Navbar, Brand, CTA} from './components';
import {Blog, Features, Footer, Header, Possibility, WhatAkgecSkills} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        <Brand />
        <WhatAkgecSkills />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </div>
  )
}

export default App