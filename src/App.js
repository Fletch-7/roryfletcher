import React from 'react';
import './App.scss';
import 'bulma'


import Navbar from './components/Navbar'
import HeroPage from './components/HeroPage'
import Software from './components/Software'

function App() {
  return (
    <main>
      <Navbar/>
      <HeroPage/>
      <Software/>

    </main>
  );
}

export default App;
