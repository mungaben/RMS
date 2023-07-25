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
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import useSWR from "swr";
import { Input } from "@/components/ui/input";
import { useRegionStore } from "../lib/store/RegionStore";

dayjs.extend(customParseFormat);

const TableRows = () => {
  const fromTimeArray = Object.entries(FromTime);
  const storedata = useTableStore((state) => state.tableRowData);
  const TableData = useTableDatastore((state) => state.tableData);
  const [disbaled, setdisbaled] = useState(false);
  const [disabledButtons, setDisabledButtons] = useState<string[]>([]);
  const system = useRegionStore((state) => state.regions);

  // from db if db contains data for presnt date from date value with the same key disbale the button
  // if db for new date .getdate() for today has data for the keys then set value of the keys
  //   map it
  //  useswr fetcher
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR("/api/Reports", fetcher);

  // data && setDisabledButtons(data.result);

  const handlePostData = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const value = (event.target as HTMLInputElement).value;

    const dataexistindb =
      data &&
      data?.result?.filter((data: TableDataCreateManyInput) => {
        const timeNow = new Date(data.TimeNow);
        const currentDate = new Date();

        return (
          timeNow.getDate() === currentDate.getDate() &&
          data.time === value &&
          data.systemName === system
        );
      });

    if (dataexistindb?.length > 0) {
      toast.error("data already posted");
      return;
    }

    // if value exists in  DataWithDateToday  then toast errori

    // if value does not exist in DataWithDateToday then post data

    // from_0900AM
    // get the time from value get the [1] and get the first and second value and last of 2 values

    const time = value.split("_")[1].slice(0, 2);
    const AMorPM = value.split("_")[1].slice(4, 6);

    const timeValue = time + AMorPM;
    // convert time to date

    const timeDtae = new Date();
    timeDtae.setHours(parseInt(time), 0, 0, 0);

    // Format the time value and get firt two values
    const formattedTime = timeDtae.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    // current time
    const currenttime = new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });

    // const timeDiff =parseInt(currenttime)-parseInt(formattedTime)
    const timeDiffs = dayjs(currenttime, "HH:mm").diff(
      dayjs(formattedTime, "HH:mm"),
      "minute"
    );

    const timeDiff = timeDiffs >= -60 && timeDiffs <= 90;

    // check if time is less  30 or past 30 minutes to current time  crazy logic
    // const timeDiff =Math.abs(parseInt((currenttimeValue- parseInt(formattedTimeValue)).toFixed(2).split('.')[0]))===0
    // const secondpart= Math.abs(parseInt((currenttimeValue- parseInt(formattedTimeValue)).toFixed(2).split('.')[1]))<=30
    // if time is more tahn 30 or less tahn current time  then true
    // const timeDiff2 = Math.abs(parseInt((currenttimeValue- parseInt(formattedTimeValue)).toFixed(2).split('.')[0]))>30

    // const timeDifferent = timeDiff > 0.30 || timeDiff < -0.30
    // console.log("time diff", timeDiff,"Table.tsx",secondpart);

    const filteredTableData = TableData.filter((data) => data.time === value);

    // Validate filteredTableData against the TableDataCreateManyInput type
    const isValidData = filteredTableData.every(
      (data) => data as TableDataCreateManyInput
    );

    if (isValidData && timeDiff) {
      // Data is valid, continue with the logic
      const tableDataLength = filteredTableData.length;

      if (tableDataLength === 9) {
        setDisabledButtons((prevDisabledButtons) => [
          ...prevDisabledButtons,
          value,
        ]);

        const dataAvail = await axios.post("/api/Reports", filteredTableData);

        if (dataAvail.data.message === "success") {
          toast.success("Saved Successfully");
        } else {
          toast.error("Error");
        }
      } else if (tableDataLength < 9) {
        toast.error("Please Fill All Fields");
      } else {
        toast.success("Saved Successfully");
      }
    } else {
      // Invalid data
      if (!timeDiff) {
        toast.error("Post not open");
      } else {
        toast.error(" invalid");
      }
    }
  };

  return (
    <>
      {fromTimeArray.map(([key, value], index) => (
        <TableRow key={index} className="">
          <TableCell className="flex  bg-[#ffff]/40 max-w-[150px]">
            <Input value={key.split("_")[1]} className="flex" />
          </TableCell>
          {Object.entries(TablecellObjects).map(
            ([cellkey, cellvalue], index) => (
              <>
                <TableCell key={cellkey} className="">
                  <TableInputs
                    id={FromTime[key as keyof typeof FromTime]}
                    name={cellvalue}
                  />
                </TableCell>
              </>
            )
          )}
          <td>
            <Button
              onClick={handlePostData}
              disabled={disabledButtons.includes(key) || isLoading}
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
