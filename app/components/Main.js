import React, { Component } from 'react';
import MyButton from './MyButton';

export default class Main extends Component {
    state = {
        number: 0,
    };

    clickHandler = () => {
        const num = this.state.number;
        this.setState({ number: num + 1 });
    };

    render() {
        return (
            <div>
                Hello World!
                <MyButton number={this.state.number} clickHandler={this.clickHandler} />
            </div>
        );
    }
}
