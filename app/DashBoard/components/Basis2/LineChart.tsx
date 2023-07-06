"use client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import React, { useCallback, useEffect, useState } from "react";
import { SystemModule, faker } from "@faker-js/faker";
import { string } from "zod";
import useTableStore from "@/app/ReportTables/lib/store/TableStore";
import { FromTime } from "@/app/ReportTables/components/Tabledata";
import { useDashboardStore } from "../../lib/store/Dashboardstore";

import { shallow } from "zustand/shallow";
interface LineChartProps {
  System: string;
}

const LineChart: React.FC<LineChartProps> = ({ System }) => {
  // console.log("system in line chart", System);
  
  const fromTimeArray: FromTime[] = Object.values(FromTime);
  const dashboard = useDashboardStore((state) => state.dashboard);
  const tabledatas=useTableStore((state) => state.tableRowData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: `Data for ${System}`,
      },
    },
  };

  const tableData = useTableStore((state) => state.tableRowData);
  const Basis2Data = useCallback(() => {
    const basis2DataList = tabledatas?.flatMap((item) => {
      return item.cells
        .filter((cell) => cell.name === System)
        .map((cell) => ({
          id: item.id,
          cell: cell,
        }));
    });
    console.log("basis2DataList from tablestore in Linecharts", basis2DataList);
    

    return basis2DataList;
  },[System]);


  // console.log(basis2DataList);
  
  useEffect(() => {
    console.log("time set in the graph", dashboard);
      Basis2Data();
  }, [System]);

 const basis2DataList =Basis2Data();
  const labels = fromTimeArray.map((item) => item);
  const dataavil = labels
    .map((item) =>
      basis2DataList
        .filter((data) => data.id === item)
        .map((data) => data.cell.value)
        .flat()
    )
    .flat();

  // console.log(dataavil);

  const data = {
    labels,
    datasets: [
      {
        label: System,
        data: dataavil,
        borderColor: "green",
        backgroundColor: "rgba(255, 99, 132, 0.5)",

        borderWidth: 0.5,
      },
    ],
  };
 
  return (
    <div className=" mx-auto h-full w-full ">
      <Line options={options} data={data} />;
    </div>
  );
};

export default LineChart;
