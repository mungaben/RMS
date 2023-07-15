




import { type } from "os";
import { create } from "zustand";



// store data with user /not must ,time-default now,id time -enum of fromTime,system name ,value
// Tabledata interface
export type TableData = {
    user ?: string,
    time: string,
    systemName: string,
    value: number
    id ?: number
    TimeNow:Date
    disabled: boolean
    region:string
}


export interface TableDatastore {
    tableData:TableData[]
    setTableData:(tableData:TableData[])=>void
    deleteData:(id:number)=>void
    // delete all data
    deleteAllData:()=>void
}


export const useTableDatastore = create<TableDatastore>((set)=>({
    tableData:[],
    setTableData:(tableData:TableData[])=>{
        set((state)=>({
            tableData
        }))
    },
    // Delete all data in tableData
    deleteData:(id:number)=>{
        set((state)=>({
            tableData:state.tableData.filter((tableData)=>tableData.id!==id)
        }))
    },
    // Delete all data in tableData
    deleteAllData:()=>{
        set((state)=>({
            tableData:[]
        }))
    },
   
}))
