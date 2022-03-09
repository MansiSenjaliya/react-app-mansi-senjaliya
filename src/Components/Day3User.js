import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Mansi Senjaliya", count: this.props.count };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.count !== state.count) {
      return {
        count: props.count,
      };
    }
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.count === nextState.count) {
      return {
        count: nextProps.count,
      };
    }
    return null;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate", this.state.count);
  }
  render() {
    return (
      <>
        <button onClick={this.props.clickHandler}>Add One More</button>
        <h2>My name is {this.state.name}</h2>
        <h1>The count is: {this.state.count}</h1>
      </>
    );
  }
}

export default Child;
