import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Jumbo from "./JumboComponent";
import TodoList from "./TodoListComponent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    const todos = [
      { id: 1, text: "Wash dishes", done: false },
      { id: 2, text: "Do laundry", done: false },
      { id: 3, text: "Take shower", done: false },
    ];
  }
  render() {
    return (
      <div className="App">
        <Navbar dark color="secondary navbar-brand">
          <NavbarBrand href="/">To Do Now</NavbarBrand>
        </Navbar>
        <Jumbo />
        <h1 className="text-center">Project Manager</h1>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

export default App;
