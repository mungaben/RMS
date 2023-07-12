"use client";

import TableData from "@/app/ReportTables/components/TableData";
import { Zoneapi } from "@/app/ReportTables/components/Tabledata";
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";

const DeleteData = ({ item, mutate }: { item: Zoneapi; mutate: any }) => {
  const url = `/api/Zones/${item.id}`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const [setloading, setsetloading] = useState(false);

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

      console.log(
        "response in delete zone",
        response.data,
        response.data.statusbar
      );

      if (response.data.statusbar === "error") {
        toast.error(response.data.error);
      }
    } catch (error) {
      console.log("error in delete zone", error);
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
          <h2>
            {item.region.name}
          </h2>

        </TableCell>
        <TableCell>
          <h2>
            {item.zoneNames.length}
          </h2>
        </TableCell>
        <TableData>
        <Button
          value={item.id}
          variant="default"
          disabled={setloading}
          onClick={handleDelete}
        >
          delete
        </Button>
        </TableData>
      
     
        </>
  );
};

export default DeleteData;
