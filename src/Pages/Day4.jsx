import React from "react";

class Day4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] , loading: true};
  }
  componentDidMount() {
     this.setState({ loading: false });
    setTimeout(() => this.getUsers(), 1000 * 3);
  }

  getUsers() {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => res.json())
      .then((json) => {
        this.setState({ users: json.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <h1 align="center">Information About Users</h1>
        <table border="1" align="center">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Avatar</th>
            </tr>
            {this.state.users.length === 0 ? (
              <tr>
                <td colSpan={99}>No Record Founds.</td>
              </tr>
            ) : (
              this.state.users.map((user) => (
                <tr key={user.id}>
                  <td> {user.id}</td>
                  <td>{user.email}</td>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>
                    <img src={user.avatar} alt="avatar" />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </>
    );
  }
}
export default Day4;
