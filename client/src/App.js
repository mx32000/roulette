import './App.css';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <header><h1>Roulette</h1></header>
      <Navbar />
      <Route path="/" exact>
        <h1>Home page</h1>
      </Route>
      <Route path="/books" exact>
        <h1>Books page</h1>
      </Route>
      <Route path="/new">
        <h1>New Book</h1>
      </Route>
    </>
  );
}

export default App;
