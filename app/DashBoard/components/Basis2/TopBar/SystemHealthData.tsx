"use client";

import { TableHeadData } from "@/app/ReportTables/components/Tabledata";
import React from "react";
import SystemHealth from "./SystemHealth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 w-full grid-rows-1">
      {TableHeadData?.map((item: TableHeadData, index: number) => (
        <Card className="flex justify-center flex-col" key={index}>
          {/* <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-medium justify-center flex">{item}</CardTitle>
          </CardHeader> */}
          <CardContent>
            <div className="text-2xl font-bold">
              <SystemHealth System={item} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TopBarHealthData;
