import React from "react";
import FormCode from "./FormCode";

class App extends React.Component {
  submit = values => {
    alert("submitted");
    console.log(values);
  };
  render() {
    return (
      <div className="container">
        <h3 className="jumbotron">
          Form Validation <span className="text-danger">*</span>
        </h3>
        <FormCode onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;
