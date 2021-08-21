import { useEffect, useState } from "react"
import Book from "./Book"

export default function Roulette(props) {
  const [book, setBook] = useState({});
  const {books} = props;

  const spin = () => {
    console.log("spin");
    const bookInd = Math.floor(Math.random() * books.length);
    console.log(books[bookInd].fields.title)
    setBook(books[bookInd]);
  }

  useEffect(() => {
    
  })

  return (
    <>
      {
        book.fields ? <Book book={book}/> : <img src="https://res.cloudinary.com/dcdasnmmz/image/upload/v1629514381/Roulette/mystery_tgwugj.png" alt="question mark" />
      }
      <button onClick={spin}>Spin!</button>
    </>
  )
}