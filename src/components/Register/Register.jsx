import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Style from "./Register.module.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
    let navigate = useNavigate();
  function submitRegister(values) {
        navigate('/login')
}

  const validationSchema = Yup.object({
    name: Yup.string('Name should be string')
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(10, "Name must be less than 10 characters"),

    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),

    phone: Yup.string()
      .required("Phone is required")
      .matches(/^01[0-2,5]{1}[0-9]{8}$/, "Invalid Egyptian phone number"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),

    rePassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password")], "Passwords do not match"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: submitRegister,
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <h2 className="mb-4 text-center">Register</h2>

          <form onSubmit={formik.handleSubmit}>

            {["name", "phone", "email", "password", "rePassword"].map((field) => (
              <div className="mb-3" key={field}>
                <label className="form-label text-capitalize">
                  {field === "rePassword" ? "Confirm Password" : field}
                </label>
                <input
                  type={field.includes("password") ? "password" : "text"}
                  name={field}
                  className="form-control"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[field]}
                />
                {formik.errors[field] && formik.touched[field] && (
                  <div className="alert alert-danger mt-1 p-1">
                    {formik.errors[field]}
                  </div>
                )}
              </div>
            ))}

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
