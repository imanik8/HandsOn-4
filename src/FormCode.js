import React from "react";
import { Field, reduxForm } from "redux-form";
import { shore } from "./constants";

const validate = values => {
  const errors = {};
  if (!values.associateName) {
    errors.associateName = "Please enter the Associate Name.";
  } else if (!/^[A-z ]{5,30}$/i.test(values.associateName)) {
    errors.associateName = "Accepts Alphabets, space & Min 5 to Max 30 Char.";
  }
  if (!values.associateId) {
    errors.associateId = "Please enter the Associate Id.";
  } else if (!/^[0-9]{6}$/i.test(values.associateId)) {
    errors.associateId = "Invalid Associate Id.";
  }
  if (!values.projectId) {
    errors.projectId = "Please enter the Project Id.";
  } else if (!/^[a-zA-Z0-9]{12}$/i.test(values.projectId)) {
    errors.projectId = "Invalid Project Id.";
  }
  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label className="control-label">{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {touched &&
        ((error && <span className="text-danger">{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

let FormCode = props => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <Field
          name="associateName"
          component={renderField}
          label="Associate Name"
        />
      </div>
      <div className="form-group">
        <Field
          name="associateId"
          component={renderField}
          label="Associate ID"
        />
      </div>
      <div className="form-group">
        <Field name="projectId" component={renderField} label="Project ID" />
      </div>
      <div className="form-group">
        <button
          type="submit"
          disabled={pristine || submitting}
          className="btn btn-primary"
        >
          Submit
        </button>
        <button type="reset" className="btn btn-danger ml-4">
          Reset
        </button>
      </div>
    </form>
  );
};
FormCode = reduxForm({
  form: "contact",
  validate
})(FormCode);

export default FormCode;
