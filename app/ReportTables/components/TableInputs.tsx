"use client";

"use client";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import useTableStore from "../lib/store/TableStore";
import { FromTime } from "./Tabledata";

interface TableInputsProps {
  id: FromTime;
  name: string;
}

const TableInputs: React.FC<TableInputsProps> = ({ id, name }) => {
  const [inputValue, setInputValue] = useState("");

  const setCellData = useTableStore((state) => state.setCellData);
  const tablecellData = useTableStore((state) => state.tablecellData);
  const tablerowData = useTableStore((state) => state.tableRowData);
  const setRowData = useTableStore((state) => state.setRowData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

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
  };

  return (
    <>
      <Input
        type="number"
        name={name}
        value={inputValue}
        onChange={handleInputChange}
        min="0"
        max="5"
        disabled={parseInt(inputValue) > 5}
      />
    </>
  );
};

export default TableInputs;
