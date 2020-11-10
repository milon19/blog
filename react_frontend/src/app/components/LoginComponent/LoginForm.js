import React from "react";
import * as Yup from "yup";

import { Formik, Field, Form, ErrorMessage } from "formik";

const loginValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const LoginForm = ({ loginInit, doLogin }) => {
  return (
    <Formik
      initialValues={loginInit}
      enableReinitialize={true}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => {
        doLogin(values);
      }}
    >
      {() => (
        <Form>
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
              <label htmlFor="password">Password*</label>
              <Field
                className="form-control"
                type="password"
                id="password"
                name="password"
              />
              <ErrorMessage name="password">
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

export default LoginForm;
