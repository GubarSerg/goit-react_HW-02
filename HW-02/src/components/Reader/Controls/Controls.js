import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Reader.module.css';

const Controls = ({ items, index, onNext, onPrev }) => (
  <>
    <section className={styles.controls}>
      <button
        onClick={onPrev}
        type="button"
        disabled={index <= 0}
        className={styles.button}
      >
        Назад
      </button>
      <button
        onClick={onNext}
        type="button"
        disabled={index >= items.length - 1}
        className={styles.button}
      >
        Вперед
      </button>
    </section>
  </>
);

Controls.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  index: PropTypes.number.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrev: PropTypes.func.isRequired,
};

export default Controls;
