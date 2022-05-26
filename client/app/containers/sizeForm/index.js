import React, { Component } from "react";

export class SizeForm extends Component {
  render() {
    return (
      <div className="product-container" style={{ zIndex: "50" }}>
        <form action="form.php">
          <input name="fName" type={"text"}></input>
          <br></br>
          <button type={"submit"}>Submit</button>
          <br></br>
        </form>
      </div>
    );
  }
}

export default SizeForm;
