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
  console.log("region", region);

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

  const FormattedDate = (dateString: Date) => {
    const date = dayjs(dateString);
    const dayOfWeek = date.format("ddd");
    const dayOfMonth = date.format("D");
    const hour = date.format("h");
    const minute = date.format("mm");
    const amPm = date.format("A");

    const formattedDate = `${dayOfWeek} ${dayOfMonth} at ${hour}:${minute} ${amPm}`;

    return formattedDate;
  };

  // least active region system
  // with slowest system
  // with healthiest

  return (
    <Table>
      <TableCaption>details of {params.id}</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead> Time Posted</TableHead>
          <TableHead> Region Name</TableHead>
          <TableHead className="">Zone Name</TableHead>
          <TableHead className=""> Posted By </TableHead>
          <TableHead className="">Value </TableHead>
          <TableHead className="">Time </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataAvail?.map((item: TableDataCreateManyInput, index: any) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{item.systemName}</TableCell>
            <TableCell>{FormattedDate(item.TimeNow)}</TableCell>
            <TableCell>{item.Region}</TableCell>
            <TableCell className="">{item.zone}</TableCell>
            <TableCell className="">{item.userId}</TableCell>
            <TableCell className="">{item.value}</TableCell>
            <TableCell className="">{item.time}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableDta;
