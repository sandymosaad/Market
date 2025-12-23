import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Style from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CounterContext } from "../../Context/counterContext";

export default function Login() {
    const {userToken, setUserToken , logout} = useContext(CounterContext)
    let navigate = useNavigate();

    function submitLogin(values) {
    setUserToken(values.email);
    localStorage.setItem("userToken", values.email);
    navigate("/");
    }


  const validationSchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),

    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),

  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: submitLogin,
  });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">

          <h2 className="mb-4 text-center">Login</h2>

          <form onSubmit={formik.handleSubmit}>

            {["email", "password"].map((field) => (
              <div className="mb-3" key={field}>
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
                Login
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
