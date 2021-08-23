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
  const [books, setBooks] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getBooks = async () => {
      const res = await axios.get(baseUrl, config);
      setBooks(res.data.records);
    }
    getBooks();
  }, [toggleFetch]);

  return (
    <>
      <header>
        <div className="header">
          <h1>Roulette</h1>
          <i class="fas fa-2x fa-bars"></i>
        </div>
        <Navbar />
      </header>
      <Route path="/" exact>
        <Roulette books={books}/>
      </Route>
      <Route path="/books" exact>
        <BookList books={books}/>
      </Route>
      <Route path="/books/new">
        <Form books={books} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/books/show/:id">
        <BookDetails books={books} setToggleFetch={setToggleFetch}/>
      </Route>
      <Route path="/books/edit/:id">
        <Form books={books} setToggleFetch={setToggleFetch}/>
      </Route>
    </>
  );
}

export default App;
