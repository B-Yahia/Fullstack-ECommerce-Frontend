import React from "react";
import { withRouter } from "../../Components/HOC/withRouter";

class Test extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Test</h1>
        <div>Id is :{this.props.router.params.id}</div>
      </div>
    );
  }
}

export default withRouter(Test);
