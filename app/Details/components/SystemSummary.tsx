

"use client"
import { TableDataCreateManyInput } from '@/app/ReportTables/components/Tabledata'
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

type AllDtaTableTypes={
  systemName:string,
  dataAvail:TableDataCreateManyInput[]
}



const SystemSummary:React.FC<AllDtaTableTypes> = ({systemName,dataAvail}) => {
  return (
    <div>SystemSummary</div>
  )
}

export default SystemSummary