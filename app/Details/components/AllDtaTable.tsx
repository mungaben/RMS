
"use client"


import React from 'react'

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table";
import { TableDataCreateManyInput } from '@/app/ReportTables/components/Tabledata';
import dayjs from 'dayjs';
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"



type AllDtaTableTypes={
      systemName:string,
      dataAvail:TableDataCreateManyInput[]
}


const FormattedDate = (dateString: Date) => {
    const date = dayjs(dateString);
    const dayOfWeek = date.format("ddd");
    const dayOfMonth = date.format("D");
    const hour = date.format("h");
    const minute = date.format("mm");
    const amPm = date.format("A");

    const formattedDate = `${dayOfWeek} ${dayOfMonth} at ${hour}:${minute} ${amPm}`;

    return formattedDate;
  };

const AllDtaTable:React.FC<AllDtaTableTypes> = ({systemName,dataAvail}) => {
  return (
    <ScrollArea className=' overflow-scroll'>
    <Card>
      <CardContent>
    <Table>
    <TableCaption>details of {systemName}</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Name</TableHead>
        <TableHead> Time Posted</TableHead>
        <TableHead> Region Name</TableHead>
        <TableHead className="">Zone Name</TableHead>
        <TableHead className=""> Posted By </TableHead>
        <TableHead className="">Value </TableHead>
        <TableHead className="">Time </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
     
      {dataAvail?.map((item: TableDataCreateManyInput, index: any) => (
        <TableRow key={index}>
          <TableCell className="font-medium">{item.systemName}</TableCell>
          <TableCell>{FormattedDate(item.TimeNow)}</TableCell>
          <TableCell>{item.Region}</TableCell>
          <TableCell className="">{item.zone}</TableCell>
          <TableCell className="">{item.userId}</TableCell>
          <TableCell className="">{item.value}</TableCell>
          <TableCell className="">{item.time}</TableCell>
        </TableRow>
      ))}
     
    </TableBody>
  </Table>
  </CardContent>
  </Card>
  </ScrollArea>
  )
}

export default AllDtaTable