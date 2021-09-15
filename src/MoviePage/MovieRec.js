import React, { Component } from 'react';
import config from '../config';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import SlickSlider from '../Slider/Slider';


class MovieRec extends Component {
  constructor(){
    super();
    this.state = {
      photos: []
    }
  }
  // console.log(props.mid);

  componentDidMount(){
    const mid = this.props.mid
    const moviePhotos = `https://api.themoviedb.org/3/movie/${mid}/recommendations?api_key=${config.api_key}`

    axios.get(moviePhotos).then((response)=>{
      const movieData = response.data.results
      this.setState ({
        photos: movieData
      })
    })
  }

  componentDidUpdate(prevProps, nextProps) {
    // console.log(nextProps)
    if (this.props.mid !== prevProps.mid) {
      // Refetch your data here because the "name" has changed.
      window.location.reload();
    }
     
  }
  

  render(){
    const imageUrl = "https://image.tmdb.org/t/p/w300";
    const movieGrid = this.state.photos.map((movie,index)=>{
      return (
        <div className="col s3" key={index}>
          <Link to={`/movie/${movie.id}`}>
            <img src={`${imageUrl}${movie.poster_path}`} />
          </Link>
        </div>
      )
    })

  return(
    <div>
      <SlickSlider elements={movieGrid} />
    </div>
   )
  }
  
}

export default MovieRec;