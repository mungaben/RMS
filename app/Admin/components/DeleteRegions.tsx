"use client";

import axios from "axios";

import { RegionDataTypes } from "@/app/ReportTables/components/Tabledata";
import useSWR from "swr";


import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import DeleteRegionData from "./DeleteRegionData";

export const url = "/api/Regions";
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const DeleteZone = () => {
  //  console.log("fetcher in delete zone", fetcher);

  //  useSWR(url, fetcher)
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  if (isLoading) {
    return <div>loading...</div>;
  }



  return (
    <Table>
      <TableHeader>
        <TableRow>
        
          <TableHead> Name</TableHead>
          <TableHead> Region</TableHead>
          <TableHead>totalzones</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
      
        {data &&
          data?.regions.map((item:RegionDataTypes) => (
            <TableRow key={item.id} >
              <DeleteRegionData item={item} mutate={mutate} />
            
            </TableRow>
          ))}
       
         
      </TableBody>
    </Table>
  );
};

export default DeleteZone;
