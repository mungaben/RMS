

"use client"
import useTableStore from '@/app/ReportTables/lib/store/TableStore'
import React from 'react'

const Basis2Data = () => {
    const tableData = useTableStore((state) => state.tableRowData);
    const Basis2Data = () => {
        const basis2DataList = tableData.flatMap((item) => {
          return item.cells.filter((cell) => cell.name === "Basis2").map((cell) => ({
            id: item.id,
            cell: cell,
          }));
        });
      
        return basis2DataList;
      };
      
      const basis2DataList = Basis2Data();
      console.log(basis2DataList);

  return (
    <div>
        table
    </div>
  )
}

export default Basis2Data