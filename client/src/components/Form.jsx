import axios from "axios";
import { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom";
import { baseUrl, config } from "../services";
import "../css/Form.css";
import { Link } from "react-router-dom";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");

  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (props.books.length && params.id) {
      const book = props.books.find(book => book.id === params.id);
      if (book.fields) {
        setTitle(book.fields.title);
        setAuthor(book.fields.author);
        setImage(book.fields.image);
        setGenre(book.fields.genre);
        setSummary(book.fields.summary);
      }
    }
  }, [params.id, props.books])



  const handleSubmit = async e => {
    e.preventDefault();
    const newBook = {
      title,
      author,
      image,
      genre,
      summary
    }
    let res = null;
    if (params.id) {
      res = await axios.put(`${baseUrl}/${params.id}`, {fields: newBook}, config)
    } else {
      res = await axios.post(baseUrl, {fields: newBook}, config);
    }
    props.setToggleFetch(prevState => !prevState);
    props.setActiveTab("");
    history.push(`/books/show/${res.data.id}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Book Title" required/>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author Name"/>
        <label htmlFor="image">Image URL</label>
        <input type="text" name="image" id="image" value={image} onChange={e => setImage(e.target.value)} placeholder="Genre Name"/>
        <label htmlFor="genre">Genre</label>
        <input type="text" name="genre" id="genre" value={genre} onChange={e => setGenre(e.target.value)} placeholder="https://samplesite.org/book_cover.jpg"/>
        <label htmlFor="summary">Summary</label>
        <textarea name="summary" id="summary" value={summary} onChange={e => setSummary(e.target.value)} placeholder="John Doe, a fervid reader, was looking for a book to read. That's when he found a website that could choose one for him!"></textarea>
      </div>
      <div className="buttons">
        {params.id ? <Link to={`/books/show/${params.id}`}><button type="button" className="cancel-button">Cancel</button></Link> : null}
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}