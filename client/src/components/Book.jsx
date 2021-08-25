import {Link} from 'react-router-dom'
import '../css/Book.css'

export default function Book(props) {
  const {book} = props;
  return book.fields ? (
    <div className="book">
      <h2>{book.fields.title}</h2>
      <img src={book.fields.image} alt={`${book.fields.title} cover`} />
      <Link to={`/books/show/${book.id}`}>More info</Link>
    </div>
  ) : null;
}