import React from "react";
import Basis2Data from "./components/Basis2/Basis2Data";
import SystemHealth from "./components/Basis2/TopBar/SystemHealth";
import TopBarHealth from "./components/Basis2/TopBar/TopBarHealth";

const page = () => {
  return (
    <div className="w-full h-screen">
      <div className="h-1/4 overflow-x-hidden">
        <TopBarHealth/>
      </div>
      <div>
        <Basis2Data />
      </div>
    </div>
  );
};

export default page;
