import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

class Reader extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
    step: PropTypes.number,
  };

  state = {
    index: 0,
  };

  nextPage = () => {
    this.setState(state => ({
      index: state.index + this.props.step,
    }));
  };

  prevPage = () => {
    this.setState(state => ({
      index: state.index - this.props.step,
    }));
  };

  render() {
    const { items } = this.props;
    const { index } = this.state;
    return (
      <div className="reader_container">
        <Publication items={items[index]} />
        <Counter items={items} index={index} />
        <Controls
          items={items}
          index={index}
          onNext={this.nextPage}
          onPrev={this.prevPage}
        />
      </div>
    );
  }
}

export default Reader;
