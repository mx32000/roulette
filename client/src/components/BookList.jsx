import Book from "./Book"
import "../css/BookList.css"

export default function BookList(props) {
  props.setFrom("list");

  return (
      <div className="book-list">
        {props.books.map((book, index) => <Book book={book} key={index} setActiveTab={() => props.setActiveTab("")} />)}
        <a href="#" id="to-top">To Top</a>
      </div>
  )
}