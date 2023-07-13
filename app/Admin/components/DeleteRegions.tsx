"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import useSWR from "swr";
import { RegionDataTypes, Zoneapi } from "@/app/ReportTables/components/Tabledata";


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
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
  console.log("data in delete zone", data, error, isLoading);


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
