"use client";
import React, { useMemo } from "react";
import useTableStore from "../ReportTables/lib/store/TableStore";
import { TableDataCreateManyInput, TableHeadData, TableName } from "../ReportTables/components/Tabledata";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import useSWR from "swr";
import axios from "axios";
import { useRegionStore } from "../ReportTables/lib/store/RegionStore";
import { useDashboardStore } from "../DashBoard/lib/store/Dashboardstore";

const AllDatas = () => {
  const TablesData = useTableStore((state) => state.tableRowData);
  const TablecellData = useTableStore((state) => state.tablecellData);
  const system = useDashboardStore((state) => state.system);

  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR("/api/Reports", fetcher);

  interface TableCell {
    name: TableName;
    value: number;
  }
  type lowestDta = {
    name: string;
    value: number;
  };


  //  if there is  data filter the data that matches the system
  const dataAvail = useMemo(() => {
    if (data) {
      // Filtered data based on the 'system' property
      const filteredData = data.result.filter(
        (item: TableDataCreateManyInput) => item
      );

      // Organize data by 'systemName'
      const organizedData: Record<string, TableDataCreateManyInput[]> = {};
      filteredData.forEach((item: TableDataCreateManyInput) => {
        const systemName = item.systemName;
        if (organizedData[systemName]) {
          organizedData[systemName].push(item);
        } else {
          organizedData[systemName] = [item];
        }
      });

      return {
        data: organizedData,
      };
    }
  }, [data]);
 
    
 
 
  return (
    <Card className="p-4 my-4 ">
      <div className="flex flex-col m-2 ">
        <CardTitle>Systems Data</CardTitle>
        <CardDescription>All systems Details</CardDescription>
      </div>
      <div className="space-y-8">
        {dataAvail && Object.keys(dataAvail.data).map((systemName) => (
          <Link
            className="flex items-center overflow-x-scroll hover:shadow-lg"
            key={systemName}
            href={`/Details/${systemName}`}
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>{systemName}</AvatarFallback>
            </Avatar>
            <div className="mx-5 ml-5 space-y-2 ">
              <p className="text-sm font-medium leading-none ">
                {systemName}
              </p>
            </div>
            <div className="ml-auto font-medium">
              {dataAvail.data[systemName].length} <span>total reported</span>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default AllDatas;
