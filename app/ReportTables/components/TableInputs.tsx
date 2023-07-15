"use client";

"use client";
import { Input } from "@/components/ui/input";
import React, { use, useState } from "react";
import useTableStore from "../lib/store/TableStore";
import { FromTime } from "./Tabledata";
import { TableData, useTableDatastore } from "../lib/store/TableDatastore";
import toast from "react-hot-toast";
import { useRegionStore } from "../lib/store/RegionStore";

interface TableInputsProps {
  id: FromTime;
  name: string;
}
// to post to db get the time,date,system type from table

const TableInputs: React.FC<TableInputsProps> = ({ id, name }) => {
  const [inputValue, setInputValue] = useState("");

  const setCellData = useTableStore((state) => state.setCellData);
  const tablecellData = useTableStore((state) => state.tablecellData);
  const tablerowData = useTableStore((state) => state.tableRowData);
  const setRowData = useTableStore((state) => state.setRowData);
  const [filled, setfilled] = useState(false);
  const setTableData = useTableDatastore((state) => state.setTableData);
  const TableData = useTableDatastore((state) => state.tableData);
  const region=useRegionStore(state=>state.regions);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // check if value is either 0 ,=5 or five if it is continue else retun none

    //  value  be between 0 to 5

    if (parseInt(e.target.value) >= 0 && parseInt(e.target.value) <= 5) {


      const value = e.target.value;
      const time = e.target.id;
      const systemName = e.target.name;
      // if value not nan then set filled to true else if value changes to none or empy set filled to false not  null  and not undefined
      if (parseInt(value) >= 0 && value !== "" && value !== undefined) {
        setfilled(true);
      } else {
        setfilled(false);
      }

      const dataToAdd: TableData[] = [
        {
          value: parseInt(value),
          time: time,
          systemName,
          TimeNow: new Date(),
          disabled: false,
          region:region
        },
      ];
  

      // check if data exists  in TableData by time,systemName,and Timenow  date is today  change that data

      // from timenow what is today date

      if (TableData.length > 0) {
        const data = TableData.filter((data) => {
          return data.time === time && data.systemName === systemName;
        });
        if (data.length > 0) {
          data[0].value = parseInt(value);
        } else {
          dataToAdd[0].value = parseInt(value);
        }
     
      } else {
        dataToAdd[0].value = parseInt(value);
      }

   

      //  add data to already existing data   in setTableData add it to the table
      setTableData([...TableData, ...dataToAdd]);

   

      if (value === "" || (parseInt(value) >= 0 && parseInt(value) <= 5)) {
        setInputValue(value);

        const updatedRowData = tablerowData.map((row) => {
          if (row.id === id) {
            const updatedCells = row.cells.map((cell) => {
              if (cell.name === name) {
                return { ...cell, value: Number(value) };
              }
              return cell;
            });

            return { ...row, cells: updatedCells };
          }

          return row;
        });

        setRowData(updatedRowData);

        setCellData(updatedRowData.flatMap((row) => row.cells));
      }
    } else {
      toast.error("Please enter a number between 0 to 5");
    }
  };

  return (
    <>
      <Input
        type="number"
        id={id}
        name={name}
        value={inputValue}
        onChange={handleInputChange}
        min="0"
        max="5"
        disabled={inputValue !== "" && parseInt(inputValue) <= 5}
        className={`${filled && "bg-black text-white"}`}
      />
    </>
  );
};

export default TableInputs;
