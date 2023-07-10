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
  zoneEnum,
} from "@/app/ReportTables/components/TableSettlemets";
import { useRegionStore } from "@/app/ReportTables/lib/store/RegionStore";
import { useZoneStore } from "@/app/ReportTables/lib/store/Zonestore";


const SelectZone = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

const zone=useZoneStore((state)=>state.zones)
const setZone=useZoneStore((state)=>state.setZones)
const zoneEnums: zoneEnum[] = ["Zone1", "Zone2", "Zone3", "Zone4", "Zone5", "Zone6"];

  const handleSelectChange = (value:zoneEnum) => {
    setSelectedOption(value);
    // console.log("slected option in Topnav",value);
    setZone(value)

    // Your additional logic here, which will execute when the value changes.
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="">
        <SelectValue placeholder={zone} />
      </SelectTrigger>
      <SelectContent>
        {zoneEnums.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectZone;
