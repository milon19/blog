import React from "react";
import * as Yup from "yup";

import { Formik, Field, Form, ErrorMessage } from "formik";

const registrationValidationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required."),
  lastName: Yup.string().required("Last name is required."),
  email: Yup.string()
    .email("Enter a valid email.")
    .required("Email is required."),
  password1: Yup.string().required("Password is required."),
  password2: Yup.string().required("Verify Password is required."),
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
              <label htmlFor="firstName">First Name*</label>
              <Field
                className="form-control"
                id="firstName"
                name="firstName"
                type="text"
              />
              <ErrorMessage name="firstName">
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
              <label htmlFor="lastName">Last Name*</label>
              <Field
                className="form-control"
                id="lastName"
                name="lastName"
                type="text"
              />
              <ErrorMessage name="lastName">
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
                type="password1"
                id="password1"
                name="password"
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
                type="password2"
                id="password2"
                name="password"
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
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
