import { useState } from "react";
import Book from "./Book";
import "../css/Roulette.css";

export default function Roulette(props) {
  const [book, setBook] = useState({});
  const {books} = props;

  const spin = () => {
    const bookInd = Math.floor(Math.random() * books.length);
    setBook(books[bookInd]);
  }

  return (
    <div className="roulette">
      <p>Looking for a book to read? Look no further! Spin the wheel, and discover your fate.</p>
      <p>Roulette selects from a list of books entered by fellow readers. You can see the list under the See All Books tab, or enter your own book info to add to the selection!</p>
      {
        book.fields ? <Book book={book}/> : <img src="https://res.cloudinary.com/dcdasnmmz/image/upload/v1629514381/Roulette/mystery_tgwugj.png" alt="question mark" />
      }
      <button onClick={spin}>Spin!</button>
    </div>
  )
}