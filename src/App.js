import React, { Component } from 'react';
import MovieList from './Components/movielist';

export default class App extends Component {
  
  render(){
    
    return(
      <div className="container">
        <div className="row myheader">
          <h1>Movie Review App</h1>
          </div>
          <div className="row">
            <MovieList/>
        </div>
      </div>
    );
  }
} 
