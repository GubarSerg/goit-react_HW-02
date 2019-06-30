/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, deposit, withdraw }) => (
  <section className={styles.balance}>
    <span>
      <i style={{ color: '#00d500' }} className="fas fa-long-arrow-alt-up" />
      {deposit}$
    </span>
    <span>
      <i style={{ color: 'red' }} className="fas fa-long-arrow-alt-down" />
      {withdraw}$
    </span>
    <span>Balance: {balance}$</span>
  </section>
);
Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  withdraw: PropTypes.number.isRequired,
  deposit: PropTypes.number.isRequired,
};
export default Balance;
