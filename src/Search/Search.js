// https://developers.themoviedb.org/3/search/search-movies
import React, { Component } from 'react';
import config from '../config';
import axios from 'axios';
import MovieResult from '../MoviePage/MovieResult';
import { Link } from 'react-router-dom';

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
            <img src={`${imageUrl}${movie.poster_path}`} />
            <div>
              {movie.original_title}
            </div>
            <div>
              {movie.release_date}
            </div>
          </Link>
        </div>
      )
    })
    return(
    <div>
      { movieResults }
    </div>
    )
  }
}

export default Search;