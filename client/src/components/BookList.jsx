import Book from "./Book"
import "../css/BookList.css"
import { useEffect, useState } from "react";

export default function BookList(props) {
  const [search, setSearch] = useState("");
  const [field, setField] = useState("title");
  const {books, setActiveTab, setFrom} = props;

  useEffect(() => {setFrom("list")}, [setFrom]);

  const matchesSearch = (book) => {
    const choices = field === "keyword" ? [book.fields.title, book.fields.author, book.fields.genre, book.fields.summary] : [book.fields[field]];
    return choices.some(field => field.toLowerCase().includes(search.toLowerCase()));
  }

  return (
    <div className="books-page">
      <form onSubmit={e => e.preventDefault()}>
        <div className="form-group"> 
          <label htmlFor="search">Search:</label>
          <input type="text" name="search" id="search" value={search} onChange={e => setSearch(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="field">Search by:</label>
          <select name="field" id="field" onChange={e => setField(e.target.value)}>
            <option value="title" selected>Title</option>
            <option value="author">Author</option>
            <option value="genre">Genre</option>
            <option value="keyword">Keyword</option>
          </select>
        </div>
      </form>
      <div className="book-list">
        {books.filter(book => matchesSearch(book))
          .map((book, index) => <Book book={book} key={index} setActiveTab={() => setActiveTab("")} />)}
        <a href="#top" id="to-top">To Top</a>
      </div>
    </div>
  )
}