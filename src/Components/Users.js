import React, { Component } from "react";
import { connect } from "react-redux";
import fetchData from "../Actions/action";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h2>Users</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>john@example.com</td>
            </tr>
            <tr>
              <td>Mary</td>
              <td>Moe</td>
              <td>mary@example.com</td>
            </tr>
            <tr>
              <td>July</td>
              <td>Dooley</td>
              <td>july@example.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    state: state.user,
    error: state.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchData());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
