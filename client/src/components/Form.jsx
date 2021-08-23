import axios from "axios";
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { baseUrl, config } from "../services";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [summary, setSummary] = useState("");

  const params = useParams();

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
    if (params.id) {
      await axios.put(`${baseUrl}/${params.id}`, {fields: newBook}, config)
    } else {
      await axios.post(baseUrl, {fields: newBook}, config);
    }
    props.setToggleFetch(prevState => !prevState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
      <label htmlFor="author">Author</label>
      <input type="text" name="author" id="author" value={author} onChange={e => setAuthor(e.target.value)}/>
      <label htmlFor="image">Image URL</label>
      <input type="text" name="image" id="image" value={image} onChange={e => setImage(e.target.value)}/>
      <label htmlFor="genre">Genre</label>
      <input type="text" name="genre" id="genre" value={genre} onChange={e => setGenre(e.target.value)}/>
      <label htmlFor="summary">Summary</label>
      <textarea name="summary" id="summary" value={summary} onChange={e => setSummary(e.target.value)}></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}