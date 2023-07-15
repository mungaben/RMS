"use client";

import { TableCell, TableRow } from "@/components/ui/table";
import React, { useState } from "react";
import { TableDataCreateManyInput, TablecellObjects } from "./Tabledata";
import TableInputs from "./TableInputs";
import { FromTime } from "./Tabledata";
import { Button } from "@/components/ui/button";
import useTableStore from "../lib/store/TableStore";
import { useTableDatastore } from "../lib/store/TableDatastore";
import toast from "react-hot-toast";
import axios from "axios";

const TableRows = () => {
  const fromTimeArray = Object.entries(FromTime);
  const storedata = useTableStore((state) => state.tableRowData);
  const TableData = useTableDatastore((state) => state.tableData);
  const [disbaled, setdisbaled] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState<string[]>([]);
  // from db if db contains data for presnt date from date value with the same key disbale the button
  // if db for new date .getdate() for today has data for the keys then set value of the keys
  //   map it
  const handlePostData = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const posteddataavil=await axios.get("/api/Reports")
    console.log("posted data",posteddataavil.data)
    

    const value = (event.target as HTMLInputElement).value;
    console.log("value", value);
    // from_0900AM
    // get the time from value get the [1] and get the first and second value and last of 2 values

    const time = value.split("_")[1].slice(0, 2);
    const AMorPM = value.split("_")[1].slice(4, 6);
    console.log("time", time, AMorPM);
    const timeValue = time + AMorPM;
    // convert time to date


    const timeDtae = new Date();
    timeDtae.setHours(parseInt(time), 0, 0, 0);
  
    // Format the time value and get firt two values
    const formattedTime = timeDtae.toLocaleTimeString("en-US", {  hour: "2-digit",
    minute: "2-digit",
    hour12: false });
    console.log("formatted time", formattedTime.split(':'));
    const formattedTimeValue = formattedTime.split(':')[0] 
    console.log("formatted time value", formattedTimeValue);
    


 


    // current time
    const currenttime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false
  
    });
    console.log("current time", currenttime.split(':').join(""),formattedTime.split(':').join(""));
    const currenttimeValue =parseInt(currenttime.split(':')[0])+ (parseInt(currenttime.split(':')[1]))/100 
    console.log("current time value", currenttimeValue);
    // check if time is less  30 or past 30 minutes to current time  crazy logic
    const timeDiff =Math.abs(parseInt((currenttimeValue- parseInt(formattedTimeValue)).toFixed(2).split('.')[0]))===0
    const secondpart= Math.abs(parseInt((currenttimeValue- parseInt(formattedTimeValue)).toFixed(2).split('.')[1]))<=30
    // if time is more tahn 30 or less tahn current time  then true
    // const timeDiff2 = Math.abs(parseInt((currenttimeValue- parseInt(formattedTimeValue)).toFixed(2).split('.')[0]))>30

    // const timeDifferent = timeDiff > 0.30 || timeDiff < -0.30
    console.log("time diff", timeDiff,"Table.tsx",secondpart);
    

    const filteredTableData = TableData.filter((data) => data.time === value);


    // Validate filteredTableData against the TableDataCreateManyInput type
    const isValidData = filteredTableData.every(
      (data) => data as TableDataCreateManyInput
    );

    if (isValidData&& timeDiff) {
      // Data is valid, continue with the logic
      const tableDataLength = filteredTableData.length;

      if (tableDataLength === 9) {
        setDisabledButtons((prevDisabledButtons) => [
          ...prevDisabledButtons,
          value,
        ]);

        console.log("filtered table data", filteredTableData);

        const dataAvail = await axios.post("/api/Reports", filteredTableData);
        console.log("result", dataAvail.data);

        toast.success("Saved Successfully");
      } else if (tableDataLength < 9) {
        toast.error("Please Fill All Fields");
      } else {
        toast.success("Saved Successfully");
      }
    } else {
      // Invalid data
      if(!timeDiff){
        toast.error("Post not open");
      }else{
        toast.error(" invalid");
      }
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
            <Button
              onClick={handlePostData}
              disabled={disabledButtons.includes(key)}
              value={key}
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
