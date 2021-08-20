import Book from "./Book"

export default function BookList(props) {
  return (
    <>
      <h1>books</h1>
      {props.books.map(book => <Book book={book.fields} />)}
    </>
  )
}