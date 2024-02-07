import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate, Route, Routes } from 'react-router-dom';
import * as Yup from "yup";
import Button from "./Button";
import { ImEyeBlocked } from "react-icons/im";
import { ImEye } from "react-icons/im";
import axios from 'axios'
import logo from "../assets/Untitled-1.jpg";



const Signup = () => {
    
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleTogglePassword2 = () => {
    setShowPassword2(!showPassword2);
  };
const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",     
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      username: Yup.string().required("Username is required").min(8, "username must be at least 8 characters long"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/,
          "Password must contain at least one uppercase letter, one lowercase letter, and one number"
        )
        .required("Password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
    }),

    onSubmit: (values) => {
      if (Object.values(values).some((value) => value === "")) {
        alert("Please fill in all the fields");
      } else if (values.password === values.confirmPassword) {
        console.log(values);
        console.log({
          name: values.name,
          username: values.username,
          email: values.email,
          password: values.password,
        });
        //   
        axios
          .post("http://localhost:8332/kolo/signup", {
            name: values.name,
            username: values.username,
            email: values.email,
            password: values.password,
          })
          .then((res) => {
            console.log(res.data);
            alert(res.data.message);
            navigate("/userlogin")

          })
          .catch((err) => {
            console.log(err);
            alert(err.response.data.message);
          });
      } else {
        alert("Password and Confirm Password do not match");
      }
    },
  });

  return (
    <section className=" position-relative screen loginscreen d-flex justify-content-center   ">
        
      <form onSubmit={formik.handleSubmit} className="loginform m-5">
      <div className=" d-flex justify-content-center ">
      <img className="  logotop" src={logo} alt="" />
      </div>
        <h2 className="text-primary text-center text-capitalize">
          Create account
        </h2>
        <label htmlFor="name" className="loglabel">
          <p>Name</p>
          <input
            className="loglabelinput"
            type="text"
            name="name"
            id="name"
            placeholder="tunde stone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-danger fw-semibold error-message">
              {formik.errors.name}
            </p>
          )}
        </label>
        <label htmlFor="username" className="loglabel">
          <p>Username</p>
          <input
            className="loglabelinput"
            type="text"
            name="username"
            id="username"
            placeholder="tunde224"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username && (
            <p className=" text-danger fw-semibold error-message">
              {formik.errors.username}
            </p>
          )}
        </label>
        <label htmlFor="email" className="loglabel">
          <p>Email</p>
          <input
            className="loglabelinput"
            type="text"
            name="email"
            id="email"
            placeholder="tunde@gmail.com"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-danger fw-semibold error-message">
              {formik.errors.email}
            </p>
          )}
        </label>
        <label htmlFor="password" className="loglabel">
          <p>Password</p>
          <div className="loglabeldiv">
            <input
              className=""
              name="password"
              id="password"
              type={showPassword ? "password" : "text    "}
              placeholder="*************"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <span onClick={handleTogglePassword}>
              {showPassword ? <ImEyeBlocked /> : <ImEye />}
            </span>
          </div>

          {formik.touched.password && formik.errors.password && (
            <p className=" text-danger fw-semibold error-message">
              {formik.errors.password}
            </p>
          )}
        </label>
        <label htmlFor="confirmPassword" className="loglabel">
          <p>Confirm password</p>
          <div className="loglabeldiv">
            <input
              className=""
              name="confirmPassword"
              id="confirmPassword"
              type={showPassword2 ? "password" : "text    "}
              placeholder="*************"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
            />
            <span onClick={handleTogglePassword2}>
              {showPassword2 ? <ImEyeBlocked /> : <ImEye />}
            </span>
          </div>
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className=" text-danger fw-semibold error-message">
              {formik.errors.confirmPassword}
            </p>
          )}
        </label>

        <Button
          type="submit"
          className="btn btn-primary rounded-5 m-3"
          text="Sign up"
        />

        <p className="text-dark text-decoration-none w-100 text-center">
          Already have an account?
          <a href="">Login</a>
        </p>
      </form>
    </section>
  );
};

export default Signup;
