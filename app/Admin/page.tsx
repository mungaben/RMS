import React from "react";
import CreateZones from "./components/CreateZones";
import CreateZonesDrop from "./components/CreateZonesDrop";
import CreateZoneDropNames from "./components/CreateZoneDropNames";
import Dashboard from "./components/DashBoardComp/Dashboard";
import MainDash from "../DashBoard2/components/MainDash";

const page = () => {
  return <div className=" w-full h-screen bg-red-300">
   
    {/* <div className=" ">
    <CreateZonesDrop/>
    </div>
    <div className=" ">
    <CreateZoneDropNames/>
    </div> */}
    <MainDash/>
    
  </div>;
};

export default page;
