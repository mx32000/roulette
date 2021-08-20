import { useEffect, useState } from "react"
import Book from "./Book"

export default function Roulette(props) {
  const [book, setBook] = useState({});
  const {books} = props;

  const spin = () => {
    const bookInd = Math.floor(Math.random() * books.length);
    setBook(books[bookInd].fields);
  }

  useEffect(() => {
    if(books.length===0) return;
    spin();
  }, [books])

  return(
    <>
      <Book book={book}/>
      <button onClick={spin}>Spin!</button>
    </>
  )
}