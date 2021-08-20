import { useEffect, useState } from "react"
import Book from "./Book"

export default function Roulette(props) {
  const [book, setBook] = useState({});
  const {books} = props;

  useEffect(() => {
    if(books.length===0) return;
    const bookInd = Math.floor(Math.random() * books.length);
    setBook(books[bookInd].fields)
  }, [books])

  return(
    <>
      <h1>Roulette</h1>
      <Book book={book}/>
    </>
  )
}