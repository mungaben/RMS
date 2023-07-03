"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";
import { TablecellObjects } from "./Tabledata";
import TableInputs from "./TableInputs";
import { FromTime } from "./Tabledata";

const TableRows = () => {
  const fromTimeArray = Object.entries(FromTime) ;
//   map it


  return (
    <>
      {fromTimeArray.map(([key,value], index) => (
        <TableRow key={index}>
          {Object.entries(TablecellObjects).map(([cellkey, cellvalue], index) => (
            <TableCell key={cellkey}>
              <TableInputs id={FromTime[key as keyof typeof FromTime]} name={cellvalue} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
};

export default TableRows;
