import React from 'react'
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h3 className="mb-4">Menu</h3>
      <div className="navbar-nav">
        <Link to={"/"} className="nav-link">Home</Link>
        <Link to={"/courses"} className="nav-link">Cursos</Link>
        <Link to={"/about"} className="nav-link">Sobre</Link>
        <Link to={"/contact"} className="nav-link">Contato</Link>
      </div>
    </>
  )
}

export default App
