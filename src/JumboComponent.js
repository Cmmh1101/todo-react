import React from "react";
import { Jumbotron } from "reactstrap";

function Jumbo() {
  return (
    <Jumbotron className="p-2">
      <div className="container">
        <div className="row">
          <div className="col d-flex">
            <div className="col-4">
              <h4>Time:</h4>
              <p>Display time</p>
            </div>
            <div className="col-4">
              <h4>Today is:</h4>
              <p>Display date</p>
            </div>
            <div className="col-4">
              <h4>Todays Message</h4>
              <p>Display Quote</p>
            </div>
          </div>
        </div>
      </div>
    </Jumbotron>
  );
}

export default Jumbo;
