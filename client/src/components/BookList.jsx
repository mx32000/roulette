import Book from "./Book"
import "../css/BookList.css"
import { useEffect, useState } from "react";

export default function BookList(props) {
  const [search, setSearch] = useState("");
  const {books, setActiveTab, setFrom} = props;

  useEffect(() => {setFrom("list")}, [setFrom]);

  return (
    <div className="books-page">
      <label htmlFor="search">Search</label>
      <input type="text" name="search" id="search" placeholder="harry potter" value={search} onChange={e => setSearch(e.target.value)}/>
      <div className="book-list">
        {books.filter(book => book.fields.title.toLowerCase().includes(search.toLowerCase()))
          .map((book, index) => <Book book={book} key={index} setActiveTab={() => setActiveTab("")} />)}
        <a href="#top" id="to-top">To Top</a>
      </div>
    </div>
  )
}