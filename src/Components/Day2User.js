import React from "react";
import App from "../Components/Day2App.css";
export class User extends React.Component {
  render() {
    const {
      data: {
        firstName,
        lastName,
        email,
        password,
        city,
        state,
        country,
        age,
        company,
        phoneNumber,
      },
    } = this.props;
    return (
      <>
        <div className="details">
          <h1 className="user">User Information</h1>
          <h1>First Name : {firstName} </h1>
          <h1>Last Name : {lastName} </h1>
          <h1>Email : {email} </h1>
          <h1>Password : {password}</h1>
          <h1>City : {city} </h1>
          <h1>State : {state} </h1>
          <h1>Country : {country} </h1>
          <h1> Age : {age} </h1>
          <h1>Company : {company} </h1>
          <h1>PhoneNumber : {phoneNumber}</h1>
        </div>
      </>
    );
  }
}
export default App;
