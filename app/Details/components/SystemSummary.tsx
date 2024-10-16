"use client";
import { TableDataCreateManyInput } from "@/app/ReportTables/components/Tabledata";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import React, { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";

type AllDtaTableTypes = {
  systemName: string;
  dataAvail: TableDataCreateManyInput[];
};

ChartJS.register(ArcElement, Tooltip, Legend);

const SystemSummary: React.FC<AllDtaTableTypes> = ({
  systemName,
  dataAvail,
}) => {
  // organize data by time posted
  
  const datasavailble = useMemo(() => {
    
    const dataByTimePosted = dataAvail?.reduce((acc, curr) => {
      const timePosted = curr.time;
      if (!acc[timePosted]) {
        acc[timePosted] = [];
      }
      acc[timePosted].push(curr);
      return acc;
    }, {} as { [key: string]: TableDataCreateManyInput[] });
    console.log(dataByTimePosted);
    // from objects in dataByTimePosted add the values  and  craete a new arry with key as time and total added value as value
    const dataByTimePostedTotal =
      dataByTimePosted &&
      Object.entries(dataByTimePosted).map(([time, data]) => {
        // console.log(time, data);

        return {
          time,
          total: data.reduce((acc, curr) => {
            return acc + curr.value;
          }, 0),
        };
      });
    // if  time is same then add the value and craete a new arry with key as time and total added value as value
    const dataByTimePostedTotalByTime = dataByTimePostedTotal?.reduce(
      (acc, curr) => {
        const time = curr.time;
        if (!acc[time]) {
          acc[time] = 0;
        }
        acc[time] += curr.total;
        return acc;
      },
      {} as { [key: string]: number }
    );
    return dataByTimePostedTotalByTime;
  }, [dataAvail]);

  // get total values

  const data = {
    labels: Object.keys(datasavailble),

    datasets: [
      {
        label: "# posted",
        data: Object.values(datasavailble),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  // add up all values of datasavailble
  const total = datasavailble && Object.values(datasavailble).reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  // console.log(total);

  return (
    <Card className=" w-full grid relative overflow-scroll">
      <CardHeader>
        <CardTitle>SYSTEM SUMMARY</CardTitle>
      </CardHeader>
      <CardContent className=" flex h-96 p-3 mt-9 flex-col md:flex-row">
        <div className="w-full md:w-1/3  first-line:m-4 flex justify-center items-center">
          <span className="text-lg border border-1 shadow-lg mx-2 my-1 p-2">
            <h2 className=" text-4xl">{total}#</h2>
            <h3>reported for {systemName}</h3>
          </span>
        </div>

        <Doughnut
          data={data}
          options={options}
          style={{ width: "50%", height: "50%" }}
          className=" flex  flex-row text-green-500"
        />
      </CardContent>
    </Card>
  );
};

export default SystemSummary;
