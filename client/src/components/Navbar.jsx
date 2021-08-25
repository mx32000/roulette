import { useState } from "react";
import { Link } from "react-router-dom"
import "../css/Navbar.css"

export default function Navbar(props) {
  const {activeTab, setActiveTab} = props;
  const [menuStatus, setMenuStatus] = useState("collapsed");

  const toggleMenu = () => {
    setMenuStatus(menuStatus === "collapsed" ? "expanded" : "collapsed");
  }

  const changeActive = e => {
    setActiveTab(e.target.innerText);
    setMenuStatus("collapsed");
  }

  return (
    <header>
      <div className="header">
        <h1>Roulette</h1>
        <button onClick={toggleMenu}><i className="fas fa-2x fa-bars"></i></button>
      </div>
      <div className="nav-container">
        <nav className={menuStatus}>
          <Link to="/" className={activeTab === "Home" ? "active" : ""} onClick={changeActive}>Home</Link>
          <Link to="/books" className={activeTab === "See All Books" ? "active" : ""} onClick={changeActive}>See All Books</Link>
          <Link to="/books/new" className={activeTab === "Add New Book" ? "active" : ""} onClick={changeActive}>Add New Book</Link>
        </nav>
      </div>
    </header>
  )
}