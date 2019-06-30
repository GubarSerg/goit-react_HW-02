import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Reader.module.css';

const Publication = ({ items }) => (
  <>
    <div className={styles.reader}>
      <article className={styles.publication}>
        <h2>{items.title}</h2>
        <p>{items.text}</p>
      </article>
    </div>
  </>
);

Publication.propTypes = {
  items: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Publication;
