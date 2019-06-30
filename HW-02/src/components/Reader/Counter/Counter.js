import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Reader.module.css';

const Counter = ({ index, items }) => (
  <p className={styles.counter}>
    {index + 1}/{items.length}
  </p>
);

Counter.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  index: PropTypes.number.isRequired,
};
export default Counter;
