"use client";

import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

import { Zoneapi } from "@/app/ReportTables/components/Tabledata";
import useSWR from "swr";
import DeleteData from "./DeleteData";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";

export const url = "/api/Zones";
const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const DeleteZone = () => {
  //  console.log("fetcher in delete zone", fetcher);

  //  useSWR(url, fetcher)
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  if (isLoading) {
    return <div>loading...</div>;
  }


  const handleDelete = async (event: React.MouseEvent<HTMLElement>) => {
    const id = (event.currentTarget as HTMLButtonElement).value;

    try {
      const response = await axios.delete(`/api/Zones/${id}`);
      // if (isLoading) {
      //   return <div>loading...</div>;
      // }
      // if(!data){
      //   return <div>loading...</div>;
      // }
      // if data was succesfull mutate will update the data
      if (response.data.statusbar === "success") {
        toast.success(response.data.message);
        mutate();
      }
      // console.log(
      //   "response in delete zone",
      //   response.data,
      //   response.data.statusbar
      // );

      if (response.data.statusbar === "success") {
        toast.success(response.data.message);
      }

      if (response.data.statusbar === "error") {
        toast.error(response.data.error);
      }
    } catch (error) {
  
      toast.error("something went wrong");
    } finally {
      //  setloading(false);
    }
  };

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
          data?.result.map((item: Zoneapi) => (
            <TableRow key={item.id} >
              <DeleteData item={item} mutate={mutate} />
            
            </TableRow>
          ))}
       
         
      </TableBody>
    </Table>
  );
};

export default DeleteZone;
