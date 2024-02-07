import React from "react";
import logo from "../assets/Untitled-1.jpg";
import Button from "./Button";
import { Link } from 'react-router-dom'
import { RiDashboardFill } from "react-icons/ri";
import { MdGroups2 } from "react-icons/md";
import { GiWallet } from "react-icons/gi";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { RiArrowGoBackFill } from "react-icons/ri";
import { RiSettings3Fill } from "react-icons/ri";
import { RiLogoutBoxRFill } from "react-icons/ri";

const Usernav = () => {
  return (
    <nav className="usernav d-flex flex-column p-4 align-items-center ">
      <div>
        <img className="navlogo" src={logo} alt="" />
      </div>

      <div className=" d-flex flex-column  my-5 ">
      <Link className="navbutt shadow" to=""> <RiDashboardFill/> Dashboard </Link>
      <Link className="navbutt shadow" to="groups"> <MdGroups2/> Groups  </Link>
      <Link className="navbutt shadow" to="fundwallet"> <GiWallet/> Fund Wallet  </Link>
      <Link className="navbutt shadow" to=""> <TbMessageCircle2Filled/> Messages  </Link>
      <Link className="navbutt shadow" to=""> <RiArrowGoBackFill/>Track Payment </Link>
      <Link className="navbutt shadow" to=""> <RiSettings3Fill/> Setting </Link>
      <Link className="navbutt shadow" to=""> <RiLogoutBoxRFill/> Log Out </Link>
        
      </div>
    </nav>
  );
};

export default Usernav;
