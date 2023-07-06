"use client";

import { TableHeadData } from "@/app/ReportTables/components/Tabledata";
import React from "react";
import SystemHealth from "./SystemHealth";
type TableHeadData =
  | "Basis2"
  | "INTERFACE"
  | "CMS"
  | "SPMS"
  | "NEW PERPAY"
  | "OLD PERPAY"
  | "UTILITY MASTER"
  | "INTERNET"
  | "Exchange BrowserMail";

const TopBarHealth = () => {
  return (
    <div className="px-4 overflow-x-hidden">
      <div className=" flex flex-row  overflow-scroll justify-between items-center p-2 ">
        {TableHeadData.map((item: TableHeadData, index: number) => (
          <div key={index}>
            <div>
              <SystemHealth System={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBarHealth;
