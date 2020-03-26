import React from 'react';
import './App.scss';
import 'bulma'


import Navbar from './components/Navbar'
import HeroPage from './components/HeroPage'

function App() {
  return (
    <main>
      <Navbar/>
      <HeroPage/>

    </main>
  );
}

export default App;
