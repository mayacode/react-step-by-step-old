import React, { Component } from 'react';
import MyButton from './MyButton';
import BookContainer from './BookContainer';

export default class Main extends Component {
  state = {
    number: 0,
  };

  displayName = 'Main';

  clickHandler = () => {
    const num = this.state.number;
    this.setState({ number: num + 1 });
  };

  render() {
    return (
      <div>
        Hello World!
        <MyButton number={this.state.number} clickHandler={this.clickHandler} />
        <hr />
        <BookContainer />
      </div>
    );
  }
}
