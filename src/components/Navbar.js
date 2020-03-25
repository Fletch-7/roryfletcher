import React from 'react'

class Navbar extends React.Component{

render() {
  return (
    <header>
    <nav>
      <ul className="nav-menu">
        <li><a href="#about">about</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#experience">experience</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
    </header>
  )
}


}

export default Navbar
