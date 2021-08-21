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
    if(books.length===0) return;
    spin();
  })

  return(
    <>
      <Book book={book}/>
      <button onClick={spin}>Spin!</button>
    </>
  )
}