"use client";

import { TableDataCreateManyInput } from "@/app/ReportTables/components/Tabledata";
import { useRegionStore } from "@/app/ReportTables/lib/store/RegionStore";
import useTableStore from "@/app/ReportTables/lib/store/TableStore";
import axios from "axios";
import React, { useMemo } from "react";
import useSWR from "swr";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import dayjs from "dayjs";
import AllDtaTable from "./AllDtaTable";
import SystemPipeline from "./SystemPipeline";
import SystemSummary from "./SystemSummary";
import PostedBy from "./PostedBy";

type paramsid = {
  params: {
    id: string;
  };
};

const TableDta: React.FC<paramsid> = ({ params }) => {
  const tabledata = useTableStore((state) => state.tableRowData);
  // make a requests to report
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data: reportdata, error, mutate } = useSWR("/api/Reports", fetcher);
  const Region = useRegionStore((state) => state.regions);
  // get all data with id
  // get regionselected
  const region = useRegionStore((state) => state.regions);

  const dataAvail = useMemo(() => {
    // map the data
    if (reportdata) {
      const data = reportdata.result.filter(
        (item: TableDataCreateManyInput) => item.systemName === params.id
      );
      console.log("data", data);

      return data;
    }
  }, [reportdata]);

  // least active region system
  // with slowest system
  // with healthiest

  return (
    <div className="flex flex-col justify-between w-full md:flex-col h-full">
      <div className="flex-col md:flex-row justify-between h-1/2 w-full">
        <div className=" md:w-1/2 flex w-full flex-1 ">
          <SystemPipeline systemName={params.id} dataAvail={dataAvail} />
        </div>
        <div className=" md:w-1/2 flex flex-1 w-full">
          <SystemSummary systemName={params.id} dataAvail={dataAvail} />
        </div>
      </div>
      <div className="flex-col md:flex-row justify-between h-1/2 w-full">
        <div className=" md:w-1/2 flex flex-1 w-full">
          <AllDtaTable systemName={params.id} dataAvail={dataAvail} />
        </div>
        <div className=" md:w-1/2 flex flex-1 w-full">
          <PostedBy systemName={params.id} dataAvail={dataAvail} />
        </div>
      </div>
    </div>
  );
};

export default TableDta;
