"use client";

import React, { useCallback, useEffect, useMemo } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  FromTime,
  TableDataCreateManyInput,
  TableHeadData,
} from "@/app/ReportTables/components/Tabledata";
import useTableStore from "@/app/ReportTables/lib/store/TableStore";
import { useDashboardStore } from "@/app/DashBoard/lib/store/Dashboardstore";
import { shallow } from "zustand/shallow";
import axios from "axios";
import useSWR from "swr";
import { useRegionStore } from "@/app/ReportTables/lib/store/RegionStore";

ChartJS.register(ArcElement, Tooltip, Legend);
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

interface SystemHealthProps {
  System: TableHeadData;
}

const SystemHealth: React.FC<SystemHealthProps> = ({ System }) => {
  const fromTimeArray: FromTime[] = Object.values(FromTime);
  const dashboard = useDashboardStore((state) => state.dashboard);
  // const tabledatas = useTableStore((state) => state.tableRowData);
  // const system = useDashboardStore((state) => state.system);
  const region=useRegionStore((state)=>state.regions)

  const tableData = useTableStore((state) => state.tableRowData, shallow);
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const {
    data: tabledatas,
    error,
    isLoading,
  } = useSWR("/api/Reports", fetcher);


//  const filteredData: TableDataCreateManyInput[] = tabledatas?.result.filter(
//     (item: TableDataCreateManyInput) => item.Region===region && item.systemName === System
//   ) || [];

  // total vcalues 
  // const totalValuesdata= filteredData.reduce((total, data) => total + data.value, 0);

  useEffect(() => {
    // Fetch data here or perform any other side effects related to 'system'
  }, [region]);

  // Calculate TotalValues here, based on the 'filteredData'
  // const TotalValues = filteredData.reduce((total, data) => total + data.someNumberProperty, 0);


  const filteredData:TableDataCreateManyInput[]  = useMemo(() => {
    return tabledatas?.result.filter(
      (item: TableDataCreateManyInput) => item.Region === region && item.systemName === System
    ) || [];
  }, [region, System, tabledatas]);

  const expectedValue = useMemo(() => {
    return filteredData.length * 5;
  }, [filteredData]);

  const totalValues = useMemo(() => {
    return filteredData.reduce((total,data) => total + (Number(data.value) || 0), 0);
  }, [filteredData]);

  const remainingData = useMemo(() => {
    return expectedValue - totalValues;
  }, [expectedValue, totalValues]);

  const percentageDifference = useMemo(() => {
    return (remainingData / expectedValue) * 100;
  }, [remainingData, expectedValue]);
 

 let backgroundColor = "green";
let titlelable = "";

if (percentageDifference > 90) {
  titlelable = "critical";
  backgroundColor = "#FF0000"; // Bright Red
} else if (percentageDifference > 80) {
  titlelable = "high";
  backgroundColor = "#FF4500"; // Orange-Red
} else if (percentageDifference > 75) {
  titlelable = "warning";
  backgroundColor = "#8B0000"; // Dark Red
} else if (percentageDifference > 60) {
  titlelable = "alert";
  backgroundColor = "purple";
}
else if (percentageDifference > 50) {
  titlelable = "moderate";
  backgroundColor = "#ADFF4F";
 } else if (percentageDifference > 40) {
  titlelable = "moderate";
  backgroundColor = "#ADFF2F"; // Green-Yellow
} else if (percentageDifference > 30) {
  titlelable = "info";
  backgroundColor = "#7FFF00"; // Chartreuse Green
} else if (percentageDifference > 25) {
  titlelable = "ok";
  backgroundColor = "#00FF00"; // Green
} else if (percentageDifference > 15) {
  titlelable = "info";
  backgroundColor = "#00FA9A"; // Medium Spring Green
} else if (percentageDifference > 10) {
  titlelable = "working";
  backgroundColor = "#00FF7F"; // Spring Green
} else if (percentageDifference > 5) {
  titlelable = "working";
  backgroundColor = "#008000"; // Dark Green
} else {
  titlelable = "good";
  backgroundColor = "#006400"; // Dark Green
}
  const data = {
    labels: [System],
    datasets: [
      {
        data: [totalValues, remainingData],
        backgroundColor: [backgroundColor, "white"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center h-full md:mx-5">
      <div className="flex w-40 m-auto ">
        <Doughnut data={data} />
      </div>
      <div className="">{titlelable}</div>
    </div>
  );
};

export default SystemHealth;
