import Book from "./Book";
import "../css/Roulette.css";

export default function Roulette(props) {
  const {book, setBook, books, setFrom, setActiveTab} = props;

  const spin = () => {
    if (!books.length) {
      alert("Oh no! The database is empty! Please add your own book(s) in order to spin.");
      return;
    }
    const bookInd = Math.floor(Math.random() * books.length);
    setBook(books[bookInd]);
    setFrom("roulette");
  }

  return (
    <div className="roulette">
      {
        book.fields ? <Book book={book} setActiveTab={setActiveTab}/> : (
          <>
            <p>Looking for a book to read? Look no further! Spin the wheel, and discover your fate.</p>
            <p className="wide">Roulette selects from a list of books entered by fellow readers. You can see the list under the See All Books tab, or enter your own book info to add to the selection!</p>
            <img src="https://res.cloudinary.com/dcdasnmmz/image/upload/v1629514381/Roulette/mystery_tgwugj.png" alt="question mark" />
          </>
        )
      }
      <button onClick={spin}>{book.fields ? "Spin again!" : "Go for a spin!"}</button>
    </div>
  )
}