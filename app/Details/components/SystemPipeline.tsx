


"use client"



import { TableDataCreateManyInput } from '@/app/ReportTables/components/Tabledata'
import React, { useMemo } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"


type AllDtaTableTypes={
  systemName:string,
  dataAvail:TableDataCreateManyInput[]
}



const SystemPipeline:React.FC<AllDtaTableTypes> = ({systemName,dataAvail}) => {
  // organize data by time posted
  if(!dataAvail) return null


// make calulation sless expensive for system
const datasavailble=useMemo(()=>{
  const dataByTimePosted = dataAvail?.reduce((acc, curr) => {
    const timePosted = curr.time;
    if (!acc[timePosted]) {
      acc[timePosted] = [];
    }
    acc[timePosted].push(curr);
    return acc;
  }, {} as { [key: string]: TableDataCreateManyInput[] });
  console.log(dataByTimePosted);
  // from objects in dataByTimePosted add the values  and  craete a new arry with key as time and total added value as value
  const dataByTimePostedTotal = Object.entries(dataByTimePosted).map(
    ([time, data]) => {
      // console.log(time, data);
      
      return {
        time,
        total: data.reduce((acc, curr) => {
        
          
          return acc + curr.value;
        }, 0),
      };
    }
  );
  // if  time is same then add the value and craete a new arry with key as time and total added value as value
  const dataByTimePostedTotalByTime = dataByTimePostedTotal.reduce(
    (acc, curr) => {
      const time = curr.time;
      if (!acc[time]) {
        acc[time] = 0;
      }
      acc[time] += curr.total;
      return acc;
    },
    {} as { [key: string]: number }
  );
return dataByTimePostedTotalByTime
},[dataAvail])
  

  return (
    <Card className='flex-1 flex-grow w-full'>
      <CardHeader>
        <CardTitle>System Pipeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">


          {
            Object.entries(datasavailble).map(([time, total]) => 
            <div className="flex flex-row justify-between" key={time}>
                <span className='mx-2 text-sm'> 
                  {time}
                  </span> <Progress value={total*20} color='red'/> 

             </div>
              
              )
          }
          </div>
      </CardContent>
    </Card>
  )
}

export default SystemPipeline