"use client";
import React, { useMemo } from "react";
import useTableStore from "../ReportTables/lib/store/TableStore";
import { TableHeadData, TableName } from "../ReportTables/components/Tabledata";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const AllDatas = () => {
  const TablesData = useTableStore((state) => state.tableRowData);
  const TablecellData = useTableStore((state) => state.tablecellData);
  interface TableCell {
    name: TableName;
    value: number;
  }
  type lowestDta = {
    name: string;
    value: number;
  };

  const dataAvail = useMemo(() => {
    const data = TableHeadData.map((item) => {
      const itemisdata = TablecellData.filter((cell) => cell.name === item);
      return itemisdata;
    });
    return {
      data,
    };
  }, [TableHeadData, TablecellData]);
  console.log(dataAvail.data);
  return (
    <Card className=" my-4 p-4  ">
      <div className=" flex flex-col m-2 ">
        <CardTitle>Systems Data</CardTitle>
        <CardDescription>All systems Details</CardDescription>
      </div>
      <div className="space-y-8">
        {dataAvail.data.map((item, idex) => (
          <Link
            className="flex items-center hover:shadow-lg overflow-x-scroll"
            key={idex}
            href={`/Details/${item[0].name}`}
          >
            <Avatar className="h-9 w-9">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>{item[0].name}</AvatarFallback>
            </Avatar>
            <div className="mx-5 ml-5 space-y-2 ">
              <p className="text-sm font-medium leading-none ">
                {item[0].name}
              </p>
              {/* <p className="text-sm text-muted-foreground">
                {item.cells.length}
              </p> */}
            </div>
            <div className="ml-auto font-medium">
              {item.length} <span>total reported</span>
            </div>
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default AllDatas;
