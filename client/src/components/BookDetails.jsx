import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { baseUrl, config } from "../services";
import "../css/BookDetails.css";

export default function BookDetails(props) {
  const params = useParams();
  const history = useHistory();

  const book = props.books.find(book => book.id === params.id);
  if (!book) return null;

  const deleteBook = async () => {
    const certain = window.confirm("Are you sure you want to delete this book? It will be removed from the database permanently.");
    if(certain) {
      await axios.delete(`${baseUrl}/${params.id}`, config);
      props.setToggleFetch(prevState => !prevState);
      props.setActiveTab("See All Books");
      history.push("/books")
    }
  }

  return book.fields.title ? (
    <div className="details">
      <img src={book.fields.image} alt={`${book.fields.title} cover`} className="wide"/>
      <div className="words">
        <h2>{book.fields.title}</h2>
        <h3>{book.fields.author}</h3>
        <img src={book.fields.image} alt={`${book.fields.title} cover`} className="narrow"/>
        <p>Genre: {book.fields.genre}</p>
        <p>Summary: {book.fields.summary}</p>
        <div className="buttons">
          <Link to={`/books/edit/${book.id}`}><button>Edit</button></Link>
          <button onClick={deleteBook} className="delete-button">Delete</button>
        </div>
      </div>
    </div>
  ) : null;
}