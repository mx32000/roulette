export default function Book(props) {
  return props.book ? (
    <h2>here lies a book: {props.book.title}</h2>
  ) : null;
}