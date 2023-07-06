

"use client"
import useTableStore from '@/app/ReportTables/lib/store/TableStore'
import React from 'react'
import LineChart from './LineChart';
import TopBar from './TopBar';
import { useDashboardStore } from '../../lib/store/Dashboardstore';
import SystemHealth from "@/app/DashBoard/components/Basis2/TopBar/SystemHealth";


const Basis2Data = () => {
  const system=useDashboardStore(state=>state.system);
  // console.log("system in basis2data",system);
  
 

  return (
    <div className=' flex flex-col bg-red-400 p-4 justify-center  space-y-4 mx-auto w-full'>
     
      <div className=' w-full flex items-center justify-between  overflow-x-hidden' >
        
        <div>
          <TopBar/>
        </div>
      </div>
      <div className=' flex  md:mt-10 md:bottom-6 border-[1px] shadow-md bg-white p-5 '>
      <LineChart  System={system} />
      </div>
     
    </div>
  )
}

export default Basis2Data