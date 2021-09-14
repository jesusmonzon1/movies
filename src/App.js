import './App.css';
import { BrowserRouter as Router , Link, Route } from 'react-router-dom';
import Home from './Home';
import Movie from './MoviePage/Movie';
import About from './About/About';
import NavBar from './NavBar/NavBar';
import MovieRec from './MoviePage/MovieRec';
import Search from './MoviePage/MovieSearch';

function App() {
  return (
    <Router>
      <MovieRec/>
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route path="/about" component={About} />
        <Route exact path="/movie/:movieId" component={Movie}  />
        <Route path="/search/:searchTerm" component={Search} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
