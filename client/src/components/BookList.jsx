import Book from "./Book"
import "../css/BookList.css"

export default function BookList(props) {
  return (
    <>
      <h1>books</h1>
      <div className="book-list">
        {props.books.map((book, index) => <Book book={book} key={index}/>)}
      </div>
    </>
  )
}