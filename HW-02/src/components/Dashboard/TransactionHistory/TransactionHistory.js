import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ history }) => (
  <table className={styles.history}>
    <thead>
      <tr>
        <th> TRANSACTION </th>
        <th> AMOUNT </th>
        <th> DATE </th>
      </tr>
    </thead>
    <tbody>
      {history.map(item => (
        <tr key={item.id}>
          <td> {item.type} </td>
          <td style={{ color: item.type === 'deposit' ? '#00d500' : 'red' }}>
            {item.amount}.00$
          </td>
          <td> {item.date} </td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
