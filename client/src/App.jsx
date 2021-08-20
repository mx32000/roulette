import './App.css';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Roulette from './components/Roulette';
import BookList from './components/BookList';
import Form from './components/Form';

function App() {
  return (
    <>
      <header><h1>Roulette</h1></header>
      <Navbar />
      <Route path="/" exact>
        <Roulette />
      </Route>
      <Route path="/books" exact>
        <BookList />
      </Route>
      <Route path="/new">
        <Form />
      </Route>
    </>
  );
}

export default App;
