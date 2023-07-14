"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import React, { useState } from "react";
import { TablecellObjects } from "./Tabledata";
import TableInputs from "./TableInputs";
import { FromTime } from "./Tabledata";
import { Button } from "@/components/ui/button";
import useTableStore from "../lib/store/TableStore";
import { useTableDatastore } from "../lib/store/TableDatastore";
import toast from "react-hot-toast";

const TableRows = () => {
  const fromTimeArray = Object.entries(FromTime);
  const storedata = useTableStore((state) => state.tableRowData);
  const TableData = useTableDatastore((state) => state.tableData);
  const [disbaled, setdisbaled] = useState(false);

  //   map it
  const handlePOstData = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    // get data from store
    console.log("Tabledata", TableData);
    const value = (event.target as HTMLInputElement).value;
    console.log("value data availa", value);

    // filter from TableData  all  data with time equal value
    const filteredTableData = TableData.filter((data) => data.time === value);
    console.log("filteredTableData", filteredTableData);
    // set data to store

    const tabledatalength = filteredTableData.length;
    console.log("Tabledatalength", tabledatalength);
    if (tabledatalength === 9) {
      setdisbaled(true);
      toast.success("Saved Successfully");
    } else if (tabledatalength < 9) {
      toast.error("Please Fill All Fields");
    } else {
      toast.success("Saved Successfully");
    }
  };

  return (
    <>
      {fromTimeArray.map(([key, value], index) => (
        <TableRow key={index}>
          {Object.entries(TablecellObjects).map(
            ([cellkey, cellvalue], index) => (
              <TableCell key={cellkey}>
                <TableInputs
                  id={FromTime[key as keyof typeof FromTime]}
                  name={cellvalue}
                />
              </TableCell>
            )
          )}
          <td>
            <Button onClick={handlePOstData} value={key}>
              Save
            </Button>
          </td>
        </TableRow>
      ))}
    </>
  );
};

export default TableRows;
