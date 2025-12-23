import React from "react";
import { useFormik } from "formik";
import Style from "./Register.module.css";
import * as Yup from 'yup';

export default function Register() {

  function submitRegister(values) {
    console.log(values);
  }

  function validate(values) {
    let errors = {};

    const phoneRegex = /^01[0-2,5]{1}[0-9]{8}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name
    if (!values.name) {
      errors.name = "Name is required";
    } else if (values.name.length < 3) {
      errors.name = "Name must be at least 3 characters";
    } else if (values.name.length > 10) {
      errors.name = "Name must be less than 10 characters";
    }

    // Email
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    // Phone
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (!phoneRegex.test(values.phone)) {
      errors.phone = "Invalid Egyptian phone number";
    }

    // Password
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    // RePassword
    if (!values.rePassword) {
      errors.rePassword = "Confirm password is required";
    } else if (values.rePassword !== values.password) {
      errors.rePassword = "Passwords do not match";
    }

    return errors;
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validate,
    onSubmit: submitRegister,
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <h2 className="mb-4 text-center">Register</h2>

          <form onSubmit={formik.handleSubmit}>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.errors.name && formik.touched.name && (
                <div className="alert alert-danger mt-1 p-1">
                  {formik.errors.name}
                </div>
              )}
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                name="phone"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.errors.phone && formik.touched.phone && (
                <div className="alert alert-danger mt-1 p-1">
                  {formik.errors.phone}
                </div>
              )}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="alert alert-danger mt-1 p-1">
                  {formik.errors.email}
                </div>
              )}
            </div>

            {/* Password */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="alert alert-danger mt-1 p-1">
                  {formik.errors.password}
                </div>
              )}
            </div>

            {/* RePassword */}
            <div className="mb-4">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="rePassword"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rePassword}
              />
              {formik.errors.rePassword && formik.touched.rePassword && (
                <div className="alert alert-danger mt-1 p-1">
                  {formik.errors.rePassword}
                </div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
              disabled={!(formik.isValid && formik.dirty)}
            >
              Register
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
