import React from "react";
import CreateZones from "./components/CreateZones";
import CreateZonesDrop from "./components/CreateZonesDrop";
import CreateZoneDropNames from "./components/CreateZoneDropNames";
import Dashboard from "./components/DashBoardComp/Dashboard";
import MainDash from "../DashBoard2/components/MainDash";

const page = () => {
  return <div className=" w-full h-screen  bg-gradient-to-r from-indigo-700 via-blue-700 to-blue-300 ">


    <MainDash />

  </div>;
};

export default page;
