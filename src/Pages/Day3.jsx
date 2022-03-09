import React from "react";
import Child from "../Components/Day3User";

class Day3 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      date: new Date(),
    };

    this.updateCount = this.updateCount.bind(this);
  }
  updateCount() {
    this.setState({ count: this.state.count + 1 });
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1> Count: {this.state.count} </h1>
        <Child
          clickHandler={this.updateCount}
          name="Mansi Senjaliya"
          count={this.state.count}
        />
        <h2>Now, Time is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
export default Day3;
