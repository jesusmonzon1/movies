// https://developers.themoviedb.org/3/search/search-movies
import React, { Component } from 'react';
import config from '../config';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Movie.css';

class Search extends Component{

state = {
  results: [],
}

async componentDidMount(){
  const searchTerm = this.props.match.params.searchTerm;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${config.api_key}&language=en-US&query=${searchTerm}&page=1&include_adult=false`
  const resp = await axios.get(url)
  this.setState({
    results: resp.data.results
  })
}

  render(){
    const imageUrl = "https://image.tmdb.org/t/p/w300";
    const movieResults = this.state.results.map((movie,index)=>{
      return (
        
        <div key={index}>
          <Link to={`/movie/${movie.id}`}>
            <div className="movie-results">
              <img src={`${imageUrl}${movie.poster_path}`} />
              <div className="movie-results-text">
                {movie.original_title}
              <br/>
                {movie.release_date}
              </div>
            </div>
          </Link>
        </div>
      )
    })
    const searchTerm1 = this.props.match.params.searchTerm;
    return(
      <div>
        <div className="movie-results-text">
          results for {searchTerm1}
        </div>
        
        <div className="movie-body">
        
        <div>
          
          { movieResults }
        </div>
      </div>
      </div>
     
    
    )
  }
}

export default Search;