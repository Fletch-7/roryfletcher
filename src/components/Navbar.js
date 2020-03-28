import React from 'react'

class Navbar extends React.Component{

render() {
  return (
    <nav className="navbar has-background-black has-text-white is-transparent">
    <div className="container">
      <div className="navbar-start">
        <a className="navbar-item"  href="#hero">Rory Fletcher </a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item " href="#About">about</a>
        <a className="navbar-item " href="#skill">skills</a>
        <a className="navbar-item"  href="#Projects">projects</a>
        <a className="navbar-item"  href="#Experience">experience</a>
        <a className="navbar-item"  href="#Contact">contact</a>
        </div>
    </div>
    </nav>
  ) 
}


}

export default Navbar
