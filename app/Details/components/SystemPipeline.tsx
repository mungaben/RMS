


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
import * as V from 'victory';
import { VictoryBar } from 'victory';
import { ScrollArea } from '@/components/ui/scroll-area'
import Loading from '../loading'


type AllDtaTableTypes={
  systemName:string,
  dataAvail:TableDataCreateManyInput[]
}



const SystemPipeline:React.FC<AllDtaTableTypes> = ({systemName,dataAvail}) => {
  // organize data by time posted
  // if(!dataAvail) return <div> <Loading/></div>


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
  // console.log(dataByTimePosted);
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
    <Card className=' w-full overflow-scroll mx-4 '>
      <CardHeader>
        <CardTitle>System Pipeline</CardTitle>
      </CardHeader>
      <CardContent className=' bg-green-100  flex flex-col space-y-2 h-full overflow-scroll p-3 mt-3'>
   
    
          {
            Object.entries(datasavailble).map(([time, total]) =>
              <div className="flex flex-row justify-between peer hover:text-lg space-x-5" key={time}>
                <span className='mx-2 text-sm peer hover:text-sm'>
                  {time}
                </span>
                <Progress value={total/dataAvail.length*100}  className={`bg-red-200 w-full h-2 hover:bg-slate-500`}/>
              </div>
            )
          }
      
   
      </CardContent>
    </Card>
  )
}

export default SystemPipeline