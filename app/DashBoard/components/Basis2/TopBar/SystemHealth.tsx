"use client";

import React, { useCallback, useEffect } from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import {
  FromTime,
  TableHeadData,
} from "@/app/ReportTables/components/Tabledata";
import useTableStore from "@/app/ReportTables/lib/store/TableStore";
import { useDashboardStore } from "@/app/DashBoard/lib/store/Dashboardstore";
import { shallow } from "zustand/shallow";

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
  const tabledatas = useTableStore((state) => state.tableRowData);
  const system = useDashboardStore((state) => state.system);

  const tableData = useTableStore((state) => state.tableRowData, shallow);

  const Basis2Data = useCallback(() => {
    const basis2DataList = tabledatas?.flatMap((item) => {
      return item.cells
        .filter((cell) => cell.name === System)
        .map((cell) => ({
          id: item.id,
          cell: cell,
        }));
    });

    return basis2DataList;
  }, [tabledatas]);

  useEffect(() => {
    console.log("time set in the graph in system Health", dashboard);
    Basis2Data();
  }, []);

  const basis2DataList = Basis2Data();
  const labels = fromTimeArray.map((item) => item);
  const dataavil = labels
    .map((item) =>
      basis2DataList
        .filter((data) => data.id === item)
        .map((data) => data.cell.value)
        .flat()
    )
    .flat();

  const ExpectedTotals = dataavil.length * 5;

  const TotalValues = dataavil.reduce((a, b) => a + b, 0);

  const remainingData = ExpectedTotals - TotalValues;

  const percentageDifference = (remainingData / ExpectedTotals) * 100;

  let backgroundColor = "green";
  let titlelable = "";
  if (percentageDifference > 25) {
    titlelable = "ok";
    backgroundColor = "lightgreen";
  }
  if (percentageDifference > 50) {
    titlelable = "warning";
    backgroundColor = "purple";
  }
  if (percentageDifference > 75) {
    titlelable = "warning";
    backgroundColor = "brown";
  } else if (percentageDifference > 10) {
    titlelable = "warning";
    backgroundColor = "yellow";
  } else if (percentageDifference > 5) {
    titlelable = "working";
    backgroundColor = "red";
  }

  const data = {
    labels: [System],
    datasets: [
      {
        data: [TotalValues, remainingData],
        backgroundColor: [backgroundColor, "white"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className=" flex flex-col justify-center items-center mt-5 mb-5  md:mx-5 h-full">
      <div className="m-5">
        <h1>
          <span className="text-2xl font-bold flex">
            {System.toLowerCase()} System
          </span>
        </h1>
      </div>
      <div className=" flex m-auto">
        <Doughnut data={data} />
      </div>
      <div className=" m-4">{titlelable}</div>
    </div>
  );
};

export default SystemHealth;
