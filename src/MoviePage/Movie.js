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
      revenue: true,
      budget: true,
    }
  }
  
  componentDidMount(){
    const mid = this.props.match.params.movieId
    const singleMovie = `https://api.themoviedb.org/3/movie/${mid}?api_key=${config.api_key}`
    axios.get(singleMovie).then((response)=>{
      // console.log(response.data);
      this.setState ({
        movie: response.data
      })
      if (this.state.movie.revenue === 0){
        this.setState({
          revenue: false,
        })
      }
      if (this.state.movie.budget === 0){
        this.setState({
          budget: false,
        })
      }
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

  revenueZero = () => {
    if (this.state.movie.revenue === 0){
      this.setState({
        revenue: false,
      })
    }
  }

  render(){
    
    let mid = this.props.match.params.movieId
    const movie = this.state.movie;

    let budget = movie.budget;
    budget = budget + "";
    budget = budget.slice(0,-6);
    let revenue = movie.revenue;
    revenue = revenue + "";
    revenue = revenue.slice(0,-6);

    const imageUrl = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;

    let similar;
    let displayMovieRec;
    if (this.state.buttonState === true) {
      similar = <div className="buttonDiv"><button className="buttonSimilar" onClick={this.hideReviews}>Hide</button> 
        </div>
      displayMovieRec = <MovieRec mid={mid}/>
      
    } else {
      similar = <div className="buttonDiv"><button className="buttonSimilar" onClick={this.showReviews}>Similar Movies</button></div>
    }

    let budgetTemplate;
    if (this.state.budget === true) {
      budgetTemplate = <div><strong>Budget</strong>: {budget} Million</div>
    } else if (this.state.budget === false ) {
      budgetTemplate = <div><strong>Budget</strong> Not Available</div>
    }
    let revenueTemplate;
    if (this.state.revenue === true) {
      revenueTemplate = <div><strong>Revenue</strong>: {revenue} Million</div>
    } else if (this.state.revenue === false ) {
      revenueTemplate = <div><strong>Revenue</strong> Not Available</div>
    }
    
    // Keep below console log to see api individual movie response
    // console.log(movie)
    return(
      <div >
        <div>
          <div className="movie-body-single">
            <div>
              <img src={imageUrl} />
            </div>
            <div className="movie-body-p">
              <h2 className="title">{movie.title}</h2>
              <p><strong>Tagline</strong>: {movie.tagline}</p>
              <p><strong>Release</strong>: {movie.release_date}</p>
              <p><strong>Runtime</strong>: {movie.runtime} minutes </p>
              <p><strong>Overview</strong>: {movie.overview}</p>
              <p><strong>Fan Rating</strong>: {movie.vote_average}/10</p>
              <p>{budgetTemplate}</p>
              <p>{revenueTemplate}</p>
            </div>
          </div>
          <div className="buttonParent">
            {similar}
            {displayMovieRec}
          </div>
        </div>
      </div>
        
    )
  }
}

export default Movie;