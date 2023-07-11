import React from "react";
import CreateZones from "./components/CreateZones";
import CreateZonesDrop from "./components/CreateZonesDrop";
import CreateZoneDropNames from "./components/CreateZoneDropNames";
import Dashboard from "./components/DashBoardComp/Dashboard";

const page = () => {
  return <div>
    <div>
      <Dashboard/>
    </div>
    <div className="flex items-center justify-center w-full h-screen">
    <CreateZonesDrop/>
    </div>
    <div className="flex items-center justify-center w-full h-screen bg-red-300">
    <CreateZoneDropNames/>
    </div>
    
  </div>;
};

export default page;
