import axios from 'axios';
import React, { Component } from 'react';
import config from '../config';
import { Link } from 'react-router-dom';
import MovieRec from './MovieRec';
import './Movie.css';

class Movie extends Component {
  constructor(){
    super();
    this.state = {
      movie: {},
      buttonState: false,
    }
  }
  
  componentDidMount(){
    const mid = this.props.match.params.movieId
    const singleMovie = `https://api.themoviedb.org/3/movie/${mid}?api_key=${config.api_key}`
    axios.get(singleMovie).then((response)=>{
      console.log(response.data);
      this.setState ({
        movie: response.data
      })
    })
  }

  showReviews = () => {
    this.setState({
      buttonState: true,
    })
  }

  hideReviews = () => {
    this.setState({
      buttonState: false,
    })
  }

  render(){
    
    let mid = this.props.match.params.movieId
    const movie = this.state.movie;
    const imageUrl = `http://image.tmdb.org/t/p/w300${movie.poster_path}`;

    let similar;
    if (this.state.buttonState === true) {
      similar = <div><button onClick={this.hideReviews}>Hide Similar Movies</button><MovieRec mid={mid}/> 
        </div>
      
    } else {
      similar = <button onClick={this.showReviews}>Show Similar Movies</button>
    }

    return(
      <div >
        <div>
          <div className="movie-body">
              <img src={imageUrl} />
            
            <div>
              <p>{movie.title}</p>
              <p>Budget: {movie.budget}</p>
              <p>Tagline: {movie.tagline}</p>
              <p>Overview: {movie.overview}</p>
            </div>
          </div>
          <div>
            {similar}
          </div>
        </div>
      </div>
        
    )
  }
}

export default Movie;