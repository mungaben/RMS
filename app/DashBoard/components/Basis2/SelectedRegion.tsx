"use client";

import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  EnumRegions,
  Regions,
} from "@/app/ReportTables/components/TableSettlemets";
import { useRegionStore } from "@/app/ReportTables/lib/store/RegionStore";

const SelectRegion = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const setRegion = useRegionStore((state) => state.setRegions);

  const handleSelectChange = (value: EnumRegions) => {
    setSelectedOption(value);
    // console.log("slected option in Topnav",value);
    setRegion(value);

    // Your additional logic here, which will execute when the value changes.
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="">
        <SelectValue placeholder="Region" />
      </SelectTrigger>
      <SelectContent>
        {Regions.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectRegion;
