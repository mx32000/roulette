import './App.css';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Roulette from './components/Roulette';
import BookList from './components/BookList';
import Form from './components/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl, config } from './services';
import BookDetails from './components/BookDetails';

function App() {
  const tabNames = {
    "/": "Home",
    "/books": "See All Books",
    "/books/new": "Add New Book"
  }

  const [books, setBooks] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [activeTab, setActiveTab] = useState(tabNames[window.location.pathname]);
  const [from, setFrom] = useState("");
  const [book, setBook] = useState({});
  const [query, setQuery] = useState(["", "title"]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await axios.get(baseUrl, config);
      setBooks(res.data.records);
    }
    getBooks();
  }, [toggleFetch]);

  return (
    <>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
      <Route path="/" exact>
        <Roulette books={books} setActiveTab={setActiveTab} setFrom={setFrom} book={book} setBook={setBook}/>
      </Route>
      <Route path="/books" exact>
        <BookList books={books} setActiveTab={setActiveTab} setFrom={setFrom} query={query} setQuery={setQuery}/>
      </Route>
      <Route path="/books/new">
        <Form books={books} setToggleFetch={setToggleFetch} setActiveTab={setActiveTab}/>
      </Route>
      <Route path="/books/show/:id">
        <BookDetails books={books} setToggleFetch={setToggleFetch} setActiveTab={setActiveTab} from={from} setBook={setBook}/>
      </Route>
      <Route path="/books/edit/:id">
        <Form books={books} setToggleFetch={setToggleFetch} setActiveTab={setActiveTab}/>
      </Route>
    </>
  );
}

export default App;
