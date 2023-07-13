"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import React from "react";
import { TablecellObjects } from "./Tabledata";
import TableInputs from "./TableInputs";
import { FromTime } from "./Tabledata";
import { Button } from "@/components/ui/button";
import useTableStore from "../lib/store/TableStore";

const TableRows = () => {
  const fromTimeArray = Object.entries(FromTime) ;
  const storedata=useTableStore((state)=>state.tableRowData)
//   map it
const handlePOstData=(event: React.MouseEvent<HTMLElement>)=>{


}

  return (
    <>
      {fromTimeArray.map(([key,value], index) => (
        <TableRow key={index}>
          {Object.entries(TablecellObjects).map(([cellkey, cellvalue], index) => (
            <TableCell key={cellkey}>
              <TableInputs id={FromTime[key as keyof typeof FromTime]} name={cellvalue} />
            </TableCell>
          ))}
          <td>
          <Button
          onClick={handlePOstData}

          >
            Save 
          </Button>
      

          </td>
          </TableRow>
         
      ))}
    </>
  );
};

export default TableRows;
