import React from "react";

import { FiTrendingDown } from "react-icons/fi";

const Usergroups = () => {
  return (
    <section className="w-100  ms-3 p-4">
        <h2 className=" headtext text-capitalize  fw-bold fs-3">
            your kolo groups
        </h2>
      <div className="groupholder shadow">
        <p className=" fw-bold fs-5 grouptexthead"> weekly kolo </p>
        <p className=" text-center text-capitalize fw-bold">
          no group found <FiTrendingDown />
        </p>
      </div>
      <div className="groupholder shadow">
        <p className=" fw-bold fs-5 grouptexthead"> monthly kolo </p>
        <p className=" text-center text-capitalize fw-bold">
          no group found <FiTrendingDown />
        </p>
      </div>
      <div className="groupholder shadow">
        <p className=" fw-bold fs-5 grouptexthead"> yearly kolo </p>
        <p className=" text-center text-capitalize fw-bold">
          no group found <FiTrendingDown />
        </p>
      </div>
    </section>
  );
};

export default Usergroups;
