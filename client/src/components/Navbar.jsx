import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/books">See All Books</Link>
      <Link to="/books/new">Add New Book</Link>
    </nav>
  )
}