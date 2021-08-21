import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function BookDetails(props) {
  const params = useParams();

  if (props.books.length === 0) return null;

  const book = props.books.find(book => book.id === params.id);

  return book.fields.title ? (
    <div className="details">
      <h2>{book.fields.title}</h2>
      <h3>{book.fields.author}</h3>
      <img src={book.fields.image} alt={`${book.fields.title} cover`} />
      <p>Genre: {book.fields.genre}</p>
      <p>Summary: {book.fields.summary}</p>
      <Link to={`/books/edit/${book.id}`}>Edit</Link>
    </div>
  ) : null;
}