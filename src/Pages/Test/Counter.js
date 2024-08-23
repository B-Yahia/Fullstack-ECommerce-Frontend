import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
    };
  }
  componentDidMount() {
    console.log("The Counter component has mounted.");
  }
  componentDidUpdate() {
    console.log(`The count has been updated to ${this.state.count}`);
  }
  componentDidCatch() {
    console.log("The Counter component is about to be unmounted.");
  }
  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };
  dec = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.inc}>Increment</button>
        <button onClick={this.dec}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
