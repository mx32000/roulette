import { useState } from "react";
import { Link } from "react-router-dom"
import "../css/Navbar.css"

export default function Navbar() {
  const [menuStatus, setMenuStatus] = useState("collapsed")

  const toggleMenu = () => {
    setMenuStatus(menuStatus === "collapsed" ? "expanded" : "collapsed");
  }

  return (
    <header>
      <div className="header">
        <h1>Roulette</h1>
        <button onClick={toggleMenu}><i className="fas fa-2x fa-bars"></i></button>
      </div>
      <div className="nav-container">
        <nav className={menuStatus}>
          <Link to="/">Home</Link>
          <Link to="/books">See All Books</Link>
          <Link to="/books/new">Add New Book</Link>
        </nav>
      </div>
    </header>
  )
}