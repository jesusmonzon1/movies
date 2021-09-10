import './App.css';
import { BrowserRouter as Router , Link, Route } from 'react-router-dom';
import Home from './Home';
import Movie from './Movie';
import About from './About/About';
import NavBar from './NavBar/NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={NavBar} />
        <Route path="/about" component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:movieId" component={Movie} />
      </div>
    </Router>
  );
}

export default App;
