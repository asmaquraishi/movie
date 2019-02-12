import React, { Component } from 'react';


class Movie extends Component {
  render() {
    return (
      <div >

        <h2>{this.props.movie.title}</h2>
        <img src={this.props.movie.poster} />
        
        <div> <strong>Rating: {this.props.movie.rating}</strong></div>
        <p>
        {this.props.movie.description}
        </p>
        <div> <strong>Director: {this.props.movie.director}</strong></div>
       
      </div>
    );
  }
}

export default Movie;
