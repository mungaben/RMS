"use client";

import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { TableHeadData } from "@/app/ReportTables/components/Tabledata";
import { useDashboardStore } from "../../lib/store/Dashboardstore";
type TableHeadData =
  | "Basis2"
  | "INTERFACE"
  | "CMS"
  | "SPMS"
  | "NEW PERPAY"
  | "OLD PERPAY"
  | "UTILITY MASTER"
  | "INTERNET"
  | "Exchange BrowserMail";

const SelectSystem = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const setsystem = useDashboardStore((state) => state.setSystem);

  const handleSelectChange = (value: TableHeadData) => {
    setSelectedOption(value);
    // console.log("slected option in Topnav",value);
    setsystem(value);

    // Your additional logic here, which will execute when the value changes.
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="SYSTEM" />
      </SelectTrigger>
      <SelectContent>
        {TableHeadData.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectSystem;
