




"use client";

import TableData from "@/app/ReportTables/components/TableData";
import { UserDataDB, Zoneapi } from "@/app/ReportTables/components/Tabledata";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TableCell, TableRow } from "@/components/ui/table";
import { clerkClient } from "@clerk/nextjs";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";

const DeleteUserData = ({
  item,
  mutate,
}: {
  item: UserDataDB ;
  mutate: any;
}) => {
  // const url = `/api/Users/${item.id}`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const [setloading, setsetloading] = useState(false);
  const [zonename, setzonename] = useState("");

//   const { data, error, isLoading } = useSWR(url, fetcher);

  const handleDelete = async (event: React.MouseEvent<HTMLElement>) => {
    const id = (event.currentTarget as HTMLButtonElement).value;
   
    try {
      setsetloading(true);
      const responseClerk = await axios.post(`/api/ClerkUsers`,{ userId: item.clerkid });
   
      
      if (responseClerk.data.statusbar === "success") {
        toast.success(responseClerk.data.message);
      }
      if (responseClerk.data.statusbar === "error") {
        toast.error(responseClerk.data.error);
      }
      
      const response = await axios.delete(`/api/Users/${id}`);
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

  return (
    <>
      <TableCell>
        <h2> {item.name}</h2>
      </TableCell>

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

export default DeleteUserData;
