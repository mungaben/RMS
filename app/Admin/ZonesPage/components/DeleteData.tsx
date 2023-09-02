"use client";


import { Zoneapi } from "@/app/ReportTables/components/Tabledata";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableCell } from "@/components/ui/table";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";


const DeleteData = ({ item, mutate }: { item: Zoneapi; mutate: any }) => {
  const url = `/api/Zones/${item.id}`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const [setloading, setsetloading] = useState(false);
  const [zonename, setzonename] = useState("")

  const { data, error, isLoading } = useSWR(url, fetcher);

  const handleDelete = async (event: React.MouseEvent<HTMLElement>) => {
    const id = (event.currentTarget as HTMLButtonElement).value;

    try {
      setsetloading(true);
      const response = await axios.delete(`/api/Zones/${id}`);
      mutate();
      // if (isLoading) {
      //   return <div>loading...</div>;
      // }
      // if(!data){
      //   return <div>loading...</div>;
      // }
      // if data was succesfull mutate will update the data
      if (response.data.statusbar === "success") {
        toast.success(response.data.message);
      }

      // console.log(
      //   "response in delete zone",
      //   response.data,
      //   response.data.statusbar
      // );

      if (response.data.statusbar === "error") {
        toast.error(response.data.error);
      }
    } catch (error) {
   
      toast.error("something went wrong");
      setsetloading(false);
    } finally {
      setsetloading(false);
    }
  };


  const handleUpdate = async (event: React.MouseEvent<HTMLElement>) => {
    const id = (event.currentTarget as HTMLButtonElement).value;
    // zonename must be an enum of zoneapi
    // check if zonename is type of zoneapi
    // if not return error toast
    // if yes then update
     // Extract or define the valid zone names
  
  const validZoneNames = item.name; // Assuming `item` contains the relevant data

  // Check if zonename is a valid zone name
  if (!validZoneNames.includes(zonename)) {
    toast.error("Invalid zone name");
    return;
  }


    

    try {
      setsetloading(true);
      const response = await axios.put(`/api/Zones/${id}`,zonename);
      mutate();
      // if (isLoading) {
      //   return <div>loading...</div>;
      // }
      // if(!data){
      //   return <div>loading...</div>;
      // }
      // if data was succesfull mutate will update the data
      if (response.data.statusbar === "success") {
        toast.success(response.data.message);
      }

      // console.log(
      //   "response in delete zone",
      //   response.data,
      //   response.data.statusbar
      // );

      if (response.data.statusbar === "error") {
        toast.error(response.data.error);
      }

      toast.error("something went wrong");
      setsetloading(false);
    } finally {
      setsetloading(false);
    }
  };
  return (
   

     <>

        <TableCell>
        <h2> {item.name}</h2>
        </TableCell>
        <TableCell>
          <Input
          placeholder={item.name}
          value={zonename}
          onChange={(e) => setzonename(e.target.value)}
          />

        </TableCell>
        <TableCell>
          <h2>
            {item.zoneNames.length}
          </h2>
        </TableCell>



        {/* <td className=" mx-4">
        <Button
          value={item.id}
          variant='outline'
          disabled={setloading}
          onClick={handleUpdate}
        >
          update
        </Button>
        </td> */}
        <td className="mx-2">
        <Button
          value={item.id}
          variant="default"
          disabled={setloading}
          onClick={handleDelete}
        >
          delete
        </Button>
        </td>
       


      
     
        </>
  );
};

export default DeleteData;
