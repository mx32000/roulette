import { useEffect, useState } from "react";
import Book from "./Book";
import "../css/Roulette.css";

export default function Roulette(props) {
  const [book, setBook] = useState({});
  const {books} = props;

  const spin = () => {
    const bookInd = Math.floor(Math.random() * books.length);
    setBook(books[bookInd]);
  }

  useEffect(() => {
    
  })

  return (
    <div className="roulette">
      {
        book.fields ? <Book book={book}/> : <img src="https://res.cloudinary.com/dcdasnmmz/image/upload/v1629514381/Roulette/mystery_tgwugj.png" alt="question mark" />
      }
      <button onClick={spin}>Spin!</button>
    </div>
  )
}