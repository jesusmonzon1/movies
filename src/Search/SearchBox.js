import React, { Component } from 'react';
import './Search.css'

class SearchBox extends Component {
  state = {
    search: "",
  }

  changeSearch = (e)=>{
    this.setState({search: e.target.value})
  }

  submitSearch = (e)=>{
    e.preventDefault();
    this.props.history.push(`/search/${this.state.search}`)
  }
  render(){
    return(
      <div>
        <form onSubmit={this.submitSearch}>
          <input className="search" onChange={this.changeSearch} placeholder="Search movies" value={this.state.search} type="text" />
        </form>
      </div>
    )
  }
}

export default SearchBox;