import React from "react";
import { GiWallet } from "react-icons/gi";

const Userfundwallet = () => {
  return (
    <section className="w-100  ms-3 p-4">
      <div className=" d-flex flex-column align-items-center">
        <div className="fundimg ">
          <GiWallet />
          <p className=" text-capitalize fw-bold fs-4">fund wallet</p>
        </div>
        <div className="holdimgfundingdetails shadow">
            <input type="text" className=" form-control"  placeholder=" enter amount" />
          <div className=" d-flex justify-content-between align-items-center">
            <p>lorem</p>
            <p>lorem</p>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            <p>lorem</p>
            <p>lorem</p>
          </div>
          <div className=" d-flex justify-content-between align-items-center">
            <p>lorem</p>
            <p>lorem</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Userfundwallet;
