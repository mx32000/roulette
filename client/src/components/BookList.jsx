import Book from "./Book"
import "../css/BookList.css"
import { useEffect, useState } from "react";

export default function BookList(props) {
  const {books, setActiveTab, setFrom, query, setQuery} = props;
  const [search, setSearch] = useState("");
  const [field, setField] = useState("title");
  const [results, setResults] = useState(books);

  useEffect(() => {
    setFrom("list");
    setSearch(query[0]);
    setField(query[1]);
  }, [setFrom, setSearch, setField]);

  useEffect(() => {
    setResults(books.filter(book => matchesSearch(book)));
    setQuery([search, field]);
  }, [search, field, books]);

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
            <option value="title" selected={field === "title" ? "selected" : ""}>Title</option>
            <option value="author" selected={field === "author" ? "selected" : ""}>Author</option>
            <option value="genre" selected={field === "genre" ? "selected" : ""}>Genre</option>
            <option value="keyword" selected={field === "keyword" ? "selected" : ""}>Keyword</option>
          </select>
        </div>
      </form>
      <div className="book-list">
        {results.map((book, index) => <Book book={book} key={index} setActiveTab={setActiveTab} />)}
        {results.length > 1 ? <a href="#top" id="to-top">To Top</a> : null}
      </div>
    </div>
  )
}