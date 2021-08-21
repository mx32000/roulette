import Book from "./Book"

export default function BookList(props) {
  return (
    <>
      <h1>books</h1>
      {props.books.map((book, index) => <Book book={book} key={index}/>)}
    </>
  )
}