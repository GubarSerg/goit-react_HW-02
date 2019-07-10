import React, { Component } from 'react';
import shortId from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import Balance from './Balance/Balance';
import Controls from './Controls/Controls';
import 'react-toastify/dist/ReactToastify.css';

const notEnough = () =>
  toast('На счету недостаточно средств для проведения операции!');
const notCorrect = () =>
  toast('Введите корректную сумму для проведения операции!');

class Dashboard extends Component {
  state = {
    inputAmount: '',
    balance: 0,
    deposit: 0,
    withdraw: 0,
    history: [],
  };

  changeInput = e => {
    const inputAmount = e.target.validity.valid
      ? e.target.value
      : // eslint-disable-next-line
        this.state.inputAmount;
    this.setState({ inputAmount });
  };

  clearInput = () => {
    // eslint-disable-next-line
    this.state.inputAmount = '';
  };

  addDeposit = () => {
    const { inputAmount } = this.state;
    const money = Number(inputAmount);
    const date = new Date();
    if (inputAmount <= 0) {
      notCorrect();
    } else {
      this.setState(
        state => ({
          history: [
            ...state.history,
            {
              id: shortId.generate(),
              type: 'deposit',
              amount: inputAmount,
              date: date.toLocaleString(),
            },
          ],
          deposit: state.deposit + money,
          balance: state.balance + money,
        }),
        this.clearInput(),
      );
    }
  };

  addWithdraw = () => {
    const { inputAmount, balance } = this.state;
    const money = Number(inputAmount);
    const date = new Date();
    if (inputAmount > balance) {
      notEnough();
    } else if (inputAmount <= 0) {
      notCorrect();
    } else {
      this.setState(
        state => ({
          history: [
            ...state.history,
            {
              id: shortId.generate(),
              type: 'withdraw',
              amount: inputAmount,
              date: date.toLocaleString(),
            },
          ],
          withdraw: state.withdraw + money,
          balance: state.balance - money,
        }),
        this.clearInput(),
      );
    }
  };

  render() {
    const { inputAmount, balance, deposit, withdraw, history } = this.state;
    return (
      <div className="dashboard">
        <ToastContainer />
        <Controls
          value={inputAmount}
          onChangeInput={this.changeInput}
          onDeposit={this.addDeposit}
          onWithdraw={this.addWithdraw}
        />
        <Balance balance={balance} deposit={deposit} withdraw={withdraw} />
        {history.length > 0 && <TransactionHistory history={history} />}
      </div>
    );
  }
}

export default Dashboard;
