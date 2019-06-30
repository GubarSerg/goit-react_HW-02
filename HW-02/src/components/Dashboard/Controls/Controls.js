import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ value, onChangeInput, onDeposit, onWithdraw }) => (
  <section className={styles.controls}>
    <input
      type="text"
      pattern="[0-9]*"
      value={value}
      onChange={onChangeInput}
    />
    <button onClick={onDeposit} type="button">
      Deposit
    </button>
    <button onClick={onWithdraw} type="button">
      Withdrawal
    </button>
  </section>
);
Controls.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  onDeposit: PropTypes.func.isRequired,
  onWithdraw: PropTypes.func.isRequired,
};

export default Controls;
