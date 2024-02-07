import React from "react";
import logo from "../assets/Untitled-1.jpg";
import Button from "./Button";
import { BsPiggyBank } from "react-icons/bs";

const Userhome = () => {
  return (
    <section className="w-100  ms-3 p-4">
      <div className="classcard rounded d-flex justify-content-between flex-wrap">
          <div className="oneofit rounded-5">
            <p className=" fs-2 fw-bold">0</p>
            <p className=" text-center text-capitalize fs-5 fw-semibold">wallet balance</p>
          </div>
          <div className=" oneofit rounded-5">
          <p className=" fs-2 fw-bold">0</p>
            <p className=" text-center text-capitalize fs-5 fw-semibold"> total kolo group </p>
          </div>
          <div className=" oneofit rounded-5">
          <p className=" fs-2 fw-bold">0</p>
            <p className=" text-center text-capitalize fs-5 fw-semibold"> total withdrawl</p>
          </div>
          <div className="oneofit rounded-5">
          <p className=" fs-2 fw-bold">0</p>
            <p className=" text-center text-capitalize fs-5 fw-semibold">group message</p>
          </div>
          <div className=" oneofit rounded-5">
          <p className=" fs-2 fw-bold">0</p>
            <p className=" text-center text-capitalize fs-5 fw-semibold">total kolo withdrawl </p>
          </div>
          <div className=" oneofit rounded-5">
          <p className=" fs-2 fw-bold">0</p>
            <p className=" text-center text-capitalize fs-5 fw-semibold">Successful Payment</p>
          </div>
      </div>
      <div className=" text-center">
        <Button text={
          <p className="m-0">
            create kolo <BsPiggyBank/>
          </p>
        }     className="createbutt shadow navbutt " />
      </div>
    </section>
  );
};

export default Userhome;
