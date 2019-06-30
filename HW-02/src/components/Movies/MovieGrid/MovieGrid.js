import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieGrid.module.css';

const MovieGrid = ({ items }) => (
  <ul className={styles['movie-grid']}>
    {items.map(item => (
      <li key={item.id}>
        <MovieCard {...item} />
      </li>
    ))}
  </ul>
);

MovieGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default MovieGrid;
