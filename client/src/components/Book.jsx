export default function Book(props) {
  const {book} = props;
  return book ? (
    <div className="book">
      <h2>{book.title}</h2>
      <img src={book.image} alt={`${book.title} cover`} />
    </div>
  ) : null;
}