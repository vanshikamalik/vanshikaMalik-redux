import React from "react";
import "./style.css";
import Users from "./Components/Users";

export default class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <Users />;
  }
}
