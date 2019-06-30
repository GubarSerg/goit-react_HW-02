import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import styles from './MovieCard.module.css';

const MovieCard = ({ posterUrl, title, overview }) => (
  <>
    <div className={styles['movie-card']}>
      <img src={posterUrl} alt={title} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <LinesEllipsis
          className={styles.descr}
          text={overview}
          maxLine="9"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
    </div>
  </>
);

MovieCard.propTypes = {
  posterUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
};

export default MovieCard;
