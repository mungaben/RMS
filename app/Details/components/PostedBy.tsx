


"use client"


import { TableDataCreateManyInput } from '@/app/ReportTables/components/Tabledata'
import React from 'react'


type AllDtaTableTypes={
  systemName:string,
  dataAvail:TableDataCreateManyInput[]
}



const PostedBy:React.FC<AllDtaTableTypes> = ({systemName,dataAvail}) => {
  return (
    <div>PostedBy</div>
  )
}

export default PostedBy