import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MovieResult extends Component{
  constructor(props){
    super(props);
    console.log(this.props.results)

  }
  render(){
    console.log(this.props.results)
    return(
      
      <h1>Test</h1>
    )
  }
}
export default MovieResult;