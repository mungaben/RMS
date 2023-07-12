"use client";

import { Zoneapi } from "@/app/ReportTables/components/Tabledata";
import { Button } from "@/components/ui/button";
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useSWR from "swr";

const DeleteData = ({ item }: { item: Zoneapi }) => {
  const url = `/api/Zones/${item.id}`;
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const [setloading, setsetloading] = useState(false);

  const { data, error, isLoading,mutate } = useSWR(url, fetcher);
  

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
          mutate()
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
    } finally {
      //  setloading(false);
    }
  };
  return (
    <div>
      <div>
        <div>{item.name}</div>
        <Button
          value={item.id}
          variant="default"
          disabled={false}
          onClick={handleDelete}
        >
          delete
        </Button>
      </div>
    </div>
  );
};

export default DeleteData;
