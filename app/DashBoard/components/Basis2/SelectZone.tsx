"use client";

import { useEffect, useState } from "react";

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
import useSWR from "swr";
import axios from "axios";
import { Zoneapi } from "@/app/ReportTables/components/Tabledata";
import {
  ZoneName,
  useZoneNameStore,
} from "@/app/ReportTables/lib/store/ZoneNameStore";
import { Button } from "@/components/ui/button";

const SelectZoneData = () => {
  const url = "/api/Zones";
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);

  const [selectedOption, setSelectedOption] = useState<string>("");

  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  const setZone = useZoneStore((state) => state.setZones);
  const Zonename = useZoneNameStore((state) => state.zoneNames);
 const setZoneName=useZoneNameStore((state)=>state.setZones);

  

  const handleSelectChange = (value: string) => {
    setSelectedOption(value);
    setZoneName(value);
    // console.log("slected option in Topnav",value);
    // setZone(value);

    // Your additional logic here, which will execute when the value changes.
  };


  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className="">
        <SelectValue placeholder={Zonename} />
      </SelectTrigger>
      <SelectContent>
        {data &&
          data.result.map((item:Zoneapi) => (
            <SelectItem key={item.id} value={item.id}>
           {item.name}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  );
};

export default SelectZoneData;
