import React from "react";
import * as Yup from "yup";

import { Formik, Field, Form, ErrorMessage } from "formik";

const registrationValidationSchema = Yup.object().shape({
  first_name: Yup.string().required("First name is required."),
  last_name: Yup.string().required("Last name is required."),
  email: Yup.string()
    .email("Enter a valid email.")
    .required("Email is required."),
  password1: Yup.string().required("Password is required."),
  password2: Yup.string()
    .oneOf([Yup.ref("password1"), null], "Possword doesn't match.")
    .required("Password confirm is required"),
});

const RegistrationForm = ({ registrationInit, doRegistration }) => {
  return (
    <Formik
      initialValues={registrationInit}
      enableReinitialize={true}
      validationSchema={registrationValidationSchema}
      onSubmit={(values) => {
        doRegistration(values);
      }}
    >
      {() => (
        <Form>
          <div className="control-group form-group">
            <div className="controls">
              <label htmlFor="first_name">First Name*</label>
              <Field
                className="form-control"
                id="first_name"
                name="first_name"
                type="text"
              />
              <ErrorMessage name="first_name">
                {(msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label htmlFor="last_name">Last Name*</label>
              <Field
                className="form-control"
                id="last_name"
                name="last_name"
                type="text"
              />
              <ErrorMessage name="last_name">
                {(msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label htmlFor="email">Email*</label>
              <Field
                className="form-control"
                id="email"
                name="email"
                type="email"
              />
              <ErrorMessage name="email">
                {(msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label htmlFor="password1">Password*</label>
              <Field
                className="form-control"
                type="password"
                id="password1"
                name="password1"
              />
              <ErrorMessage name="password1">
                {(msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <div className="control-group form-group">
            <div className="controls">
              <label htmlFor="password2">Verify Password*</label>
              <Field
                className="form-control"
                type="password"
                id="password2"
                name="password2"
              />
              <ErrorMessage name="password2">
                {(msg) => (
                  <div className="alert alert-danger mt-2" role="alert">
                    {msg}
                  </div>
                )}
              </ErrorMessage>
            </div>
          </div>

          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
