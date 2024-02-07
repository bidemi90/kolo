import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import axios from 'axios';
import { useNavigate, Route, Routes } from 'react-router-dom';
import logo from "../assets/Untitled-1.jpg";
import { ImEyeBlocked } from "react-icons/im";
import { ImEye } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { featchinguserdataSuccessful } from "./Redux/Userdata";

const Login = () => {
  const dispatch=useDispatch();

  const {userdata}=useSelector((state)=>state.Userdata)
  

const [showPassword, setShowPassword] = useState(true);

const handleTogglePassword = () => {
  setShowPassword(!showPassword);
};
const navigate=useNavigate()
  const formik = useFormik({
    initialValues: {
      emailorusername: "",
      password: "",
    },
    validationSchema: Yup.object({
      emailorusername: Yup.string().required("Username/Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);

      axios
        .post("http://localhost:8332/kolo/login", {
          emailorusername: values.emailorusername,
          password: values.password,
        })
        .then((res) => {
          console.log(res.data);
          alert(res.data.message);
          dispatch(featchinguserdataSuccessful(res.data.user))
          console.log(userdata);
          navigate("/userdashboard")

        })
        .catch((err) => {
          console.log(err);
          alert(err.response.data.message);
        });
    },
  });

  return (
    <section className=" position-relative screen loginscreen d-flex justify-content-center align-items-center">
       
      <form onSubmit={formik.handleSubmit} className="loginform">
      <div className=" d-flex justify-content-center ">
      <img className="  logotop" src={logo} alt="" />
      </div>
        <h2 className="text-primary text-center text-capitalize">Log In</h2>
        <label htmlFor="emailorusername" className="loglabel">
          <p>Username/Email</p>
          <input
            type="text"
            name="emailorusername"
            id="emailorusername"
            placeholder="student@sqi.com"
            className="loglabelinput"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.emailorusername}
          />
          {formik.touched.emailorusername && formik.errors.emailorusername && (
            <p className="text-danger fw-semibold error-message">
              {formik.errors.emailorusername}
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

        <Button
          className="btn btn-primary rounded-5 m-3"
          text="Log in"
          type="submit"
        />

        <p className="text-dark text-decoration-none w-100 text-center">
          Don’t have an account?
          <a href="">Sign Up</a>
        </p>
      </form>
    </section>
  );
};

export default Login;
