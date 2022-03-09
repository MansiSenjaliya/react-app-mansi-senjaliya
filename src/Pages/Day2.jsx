import React from "react";
import { User } from "../Components/Day2User";
class Day2 extends React.Component {
  constructor() {
    super();
    this.state = {
      details: {
        firstName: "Mansi",
        lastName: "Senjaliya",
        email: "mansi@gmail.com",
        password: "123@xyz",
        city: "Rajkot",
        state: "Gujarat",
        country: "India",
        age: "20",
        company: "The One Technology",
        phoneNumber: "9090909090",
      },
    };
  }
  render() {
    return (
      <>
        <User data={this.state.details} />
      </>
    );
  }
}
export default Day2;
