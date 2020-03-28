import React from 'react';
import './App.scss';
import 'bulma'


import Navbar from './components/Navbar'
import HeroPage from './components/HeroPage'
import Software from './components/Software'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {
  return (
    <main>
      <Navbar/>
      <HeroPage/>
      <Software/>
      <About/>
      <Skills/>
      <Projects/>

    </main>
  );
}

export default App;
