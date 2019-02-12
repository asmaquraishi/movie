import React, { Component } from 'react';
import './App.css';
import Movie from './movie';
import Review from './review';
import MovieList from './movielist';

class App extends Component {
  render() {

    return (
      <div >
        <MovieList/>

      </div> 
    );
  }
}

export default App;
