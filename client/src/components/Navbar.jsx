import { Link } from "react-router-dom"
import "../css/Navbar.css"

export default function Navbar() {
  return (
    <header>
      <div className="header">
        <h1>Roulette</h1>
        <button onClick={() => console.log("hi")}><i className="fas fa-2x fa-bars"></i></button>
      </div>
      <div className="nav-container">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/books">See All Books</Link>
          <Link to="/books/new">Add New Book</Link>
        </nav>
      </div>
    </header>
  )
}