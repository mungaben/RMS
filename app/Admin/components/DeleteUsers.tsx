


"use client";

import axios from "axios";

import { UserDataDB } from "@/app/ReportTables/components/Tabledata";
import useSWR from "swr";

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import DeleteUsersData from "./DeleteUsersData";

export const url = "/api/Users";
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
        </TableRow>
      </TableHeader>

      <TableBody>
        {data &&
          data?.users?.map((item: UserDataDB ) => (
            <TableRow key={item.id}>
              <DeleteUsersData item={item} mutate={mutate} />
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default DeleteZone;
