import React, { useCallback, useEffect } from "react";
import { Line } from "react-chartjs-2";
import useSWR from "swr";
import axios from "axios";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  FromTime,
  TableDataCreateManyInput,
} from "@/app/ReportTables/components/Tabledata";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
interface LineChartProps {
  System: string;
}

const LineChart: React.FC<LineChartProps> = ({ System }) => {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const {
    data: reportdata,
    isLoading,
    error,
    mutate,
  } = useSWR("/api/Reports", fetcher);

  const fromTimeArray = Object.values(FromTime);

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
  // data for current region
  const Basis2Data = useCallback(() => {
    const basis2DataList = reportdata?.result?.filter(
      (item: TableDataCreateManyInput) => item.systemName === System
    );
    return basis2DataList;
  }, [System, reportdata?.result]);

  useEffect(() => {
    Basis2Data();
  }, [Basis2Data]);

  const basis2DataList = Basis2Data();

  const labels = fromTimeArray.map((item) => item);

  const dataavil = reportdata?.result?.reduce(
    (acc: { [x: string]: any[] }, curr: { time: any }) => {
      const timePosted = curr.time;
      if (!acc[timePosted]) {
        acc[timePosted] = [];
      }
      acc[timePosted].push(curr);
      return acc;
    },
    {} as { [key: string]: TableDataCreateManyInput[] }
  );
  // for each data get total of all data.value

  if (!dataavil) {
    return null;
  }

  // Explicitly tell TypeScript the type of dataavil
  const dataavilTyped: { [key: string]: TableDataCreateManyInput[] } = dataavil;

  // Calculate the total of all data.value for each time
  const timeTotals: { [key: string]: number } = {};
  Object.entries(dataavilTyped).forEach(([time, data]) => {
    const total = data.reduce(
      (sum: number, item: TableDataCreateManyInput) => sum + item.value,
      0
    );

    const totalTobe = 5 * data.length;

    // const totalCeil = Math.ceil(total / data.length); // Round up the average
    timeTotals[time] = total;
  });

  const timeLabels = Object.keys(timeTotals).map((time) =>
    time.split("_")[1].slice(0, 2)
  );
  const timeValues = Object.values(timeTotals);

  // Use the timeTotals to set the data for the LineChart
  const labelsX = Object.keys(timeTotals).map((time) =>
    time.split("_")[1].slice(0, 2)
  );

  const data = {
    labels: labelsX,
    datasets: [
      {
        label: System,
        data: Object.values(timeTotals), // Use the rounded-up totals as data
        borderColor: "green",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderWidth: 0.5,
      },
    ],
  };

  // eslint-disable-next-line react-hooks/rules-of-hooks

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="h-full w-full text-sm md:flex flex-1">
      <Line options={options} data={data} />
    </div>
  );
};

export default LineChart;
