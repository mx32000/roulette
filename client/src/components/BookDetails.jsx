import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { baseUrl, config } from "../services";

export default function BookDetails(props) {
  const params = useParams();
  const history = useHistory();

  const book = props.books.find(book => book.id === params.id);
  if (!book) return null;

  const deleteBook = async () => {
    await axios.delete(`${baseUrl}/${params.id}`, config);
    props.setToggleFetch(prevState => !prevState);
    history.push("/books")
  }

  return book.fields.title ? (
    <div className="details">
      <h2>{book.fields.title}</h2>
      <h3>{book.fields.author}</h3>
      <img src={book.fields.image} alt={`${book.fields.title} cover`} />
      <p>Genre: {book.fields.genre}</p>
      <p>Summary: {book.fields.summary}</p>
      <Link to={`/books/edit/${book.id}`}>Edit</Link>
      <button onClick={deleteBook}>Delete</button>
    </div>
  ) : null;
}