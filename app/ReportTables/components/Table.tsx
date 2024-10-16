"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableHeadData } from "./Tabledata";
import TableInputs from "./TableInputs";
import TableRows from "./TableRows";

const MyTable = () => {
  return (
    <Table className="w-11/12 mt-2 border-l border-collapse h-[450px] border-slate-500">
      <TableCaption>Daily Report</TableCaption>
      <TableHeader>
        <TableRow className="mx-2 font-semibold md:my-4 md:text-2xl">
          <TableHead className="">Time</TableHead>
          {TableHeadData.map((item, index) => (
            <React.Fragment key={index} >
              <TableHead className="">{item}</TableHead>
            </React.Fragment>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody className="mx-2 ">
        <TableRows />
      </TableBody>
    </Table>
  );
};

export default MyTable;
