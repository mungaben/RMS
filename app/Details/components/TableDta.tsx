"use client";

import useTableStore from "@/app/ReportTables/lib/store/TableStore";
import React, { useMemo } from "react";

type paramsid = {
  params: {
    id: string;
  };
};

const TableDta: React.FC<paramsid> = ({ params }) => {
  const tabledata = useTableStore((state) => state.tableRowData);
  // get all data with id
  const data = tabledata
    ?.filter((item) => item)
    .map((item) => item.cells.filter((cell) => cell.name === params.id));

  const dataAvail = useMemo(() => {
    // most active region system
    //  system with highest reports in the region
  }, [data]);

  // least active region system
  // with slowest system
  // with healthiest

  return (
    <div>
      <div>data</div>
    </div>
  );
};

export default TableDta;
