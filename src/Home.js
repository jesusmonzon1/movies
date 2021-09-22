import React, { Component } from 'react';
import axios from 'axios';
import config from './config';
import { Link } from 'react-router-dom';
import SlickSlider from './Slider/Slider';
import SearchBox from './Search/SearchBox';
import './Home.css'


class Home extends Component {
  constructor(){
    super();
    this.state = {
      movieList: []
    }
  }
  componentDidMount(){
    const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${config.api_key}`;
    axios.get(nowPlaying).then((response)=>{
      // console.log(response.data)
      const movieData = response.data.results
      this.setState({
        movieList: movieData
      })
    })
  }
  render(){
    // console.log(this.state.movieList)
    const imageUrl = "https://image.tmdb.org/t/p/w300";
    const movieGrid = this.state.movieList.map((movie,index)=>{
      return (
        <div className="col s3" key={index}>
          <Link to={`/movie/${movie.id}`}>
            <img src={`${imageUrl}${movie.poster_path}`} />
          </Link>
        </div>
      )
    })
    return(
      <div className="row">
        <div className="home-text">
          <h2>Welcome! Use this app to find details about movies and find similar titles.</h2>
        </div>
        <div className="home-text">
          <SearchBox history={this.props.history} />
        </div>
        <div className="home-text">
          <h2>Now Playing</h2>
        </div>
        <SlickSlider elements={movieGrid}/>
        <br></br>
      </div>
    )
  }
}

export default Home;