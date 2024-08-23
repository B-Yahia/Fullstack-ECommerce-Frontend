import React from "react";

class Greeting extends React.Component {
  render() {
    return <p>Hello {this.props.name}</p>;
  }
}

export default Greeting;
