import React, { Component } from "react";

export default class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count:0,
    };
  }

  render() {
    return (
      <div>
        <p>Counter: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button onClick={() => this.setState({count: this.state.count - 1})}>Decrement</button>
        <button onClick={() => this.setState({count: 0})}>Reset</button>
      </div>
    );
  }
}
