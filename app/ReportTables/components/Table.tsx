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
    <Table className=" border-collapse border-l border-slate-500 mt-2 h-screen w-5/6">
      <TableCaption>Weekly Table</TableCaption>
      <TableHeader>
        <TableRow className=" md:my-4 mx-2 md:text-2xl font-semibold ">
          <TableHead className="">Time</TableHead>
          {TableHeadData.map((item, index) => (
            <React.Fragment key={index} >
              <TableHead className="">{item}</TableHead>
            </React.Fragment>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRows />
      </TableBody>
    </Table>
  );
};

export default MyTable;
