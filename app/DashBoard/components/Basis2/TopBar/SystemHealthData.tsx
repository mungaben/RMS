"use client";

import { TableHeadData } from "@/app/ReportTables/components/Tabledata";
import React from "react";
import SystemHealth from "./SystemHealth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useDashboardStore } from "@/app/DashBoard/lib/store/Dashboardstore";
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

const TopBarHealthData = () => {
  const system = useDashboardStore((state) => state.system);
  return (
    <div className="flex justify-start mt-10 space-x-4 overflow-scroll ">
      {TableHeadData?.map((item: TableHeadData, index: number) => (
        <Card className="flex flex-col justify-center" key={index}>
          {/* <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="flex justify-center text-sm font-medium">{item}</CardTitle>
          </CardHeader> */}
          <CardContent>
            <div className="font-bold ">
              <SystemHealth System={item} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TopBarHealthData;
