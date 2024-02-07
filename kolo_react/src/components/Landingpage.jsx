import React from "react";
import Button from "./Button";
import arrowRight from "../assets/ph_arrow-right-thin.png";

const Landingpage = () => {
  return (
    <section className="landingbackground pt-4">
      <nav className=" d-flex justify-content-between mx-5 align-items-center">
        <span className=" text-light">LOGO</span>
        <div>
          <Button className="logbtu" text="Log In" />
          <Button className="creabtu" text="Create an Account" />
        </div>
      </nav>
      <div className="col-4 ms-5  landingtext">
        <h1 className=" text-light ">
          Unlock the Power of KOLO and Achieve Your Financial Goals.
        </h1>
        <Button
          text={
            <p className=" m-0 d-flex justify-content-evenly align-items-center">
              Create a Thrift
              <img src={arrowRight} alt="" />
            </p>
          }
        />
      </div>
    </section>
  );
};

export default Landingpage;
