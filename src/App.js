import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="secondary">
          <div className="container">
            <div className="row">
              <div className="col-3">
                <NavbarBrand href="/">To Do Now</NavbarBrand>
              </div>
              <div className="col">
                <NavbarText>
                  {" "}
                  <h4>Time</h4>{" "}
                </NavbarText>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
