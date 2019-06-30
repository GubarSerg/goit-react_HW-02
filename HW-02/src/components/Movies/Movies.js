import React, { Component } from 'react';
import MovieGrid from './MovieGrid/MovieGrid';
import SearchBar from './SearchBar/SearchBar';
import movies from './movies.json';
import filterMovies from '../../helper';

class Movies extends Component {
  state = {
    filter: '',
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { filter } = this.state;
    const filteredMovies = filterMovies(movies, filter);
    return (
      <div className="movie_container">
        <SearchBar value={filter} onChange={this.handleChange} />
        {filteredMovies.length ? (
          <MovieGrid items={filteredMovies} />
        ) : (
          <p>No matching results!</p>
        )}
      </div>
    );
  }
}

export default Movies;
