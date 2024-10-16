"use client";
import {
  TableHeadData,
  TableName,
} from "@/app/ReportTables/components/Tabledata";
import useTableStore from "@/app/ReportTables/lib/store/TableStore";
import { useMemo, useState } from "react";
import AllDatas from "../AllDatas";

const DetailData = () => {
  const TablesData = useTableStore((state) => state.tableRowData);
  const TablecellData = useTableStore((state) => state.tablecellData);
  const [lowests, setlowest] = useState<TableCell>();
  interface TableCell {
    name: TableName;
    value: number;
  }
  type lowestDta = {
    name: string;
    value: number;
  };
  const dataAvail = useMemo(() => {
    let HEALTHIESTSYTEM = 0;
    let HEALTHIESTSYTSEMDATA: TableCell[] = [];
    let Lowest: number = Infinity;
    let LowestData: TableCell[] = [];

    const data = TableHeadData.map((item) => {
      const itemisdata = TablecellData.filter((cell) => cell.name === item);

      const HighestsytemVlaueTotal = itemisdata.reduce(
        (sum, cell) => sum + cell.value,
        0
      );
      // get lowesst of HighestsytemVlaueTotal
      if (Lowest > HighestsytemVlaueTotal) {
        Lowest = HighestsytemVlaueTotal;
        LowestData = itemisdata;
      }

      if (HighestsytemVlaueTotal > HEALTHIESTSYTEM) {
        HEALTHIESTSYTEM = HighestsytemVlaueTotal;
        HEALTHIESTSYTSEMDATA = itemisdata;
      }

      return {
        id: item,
        data: itemisdata,
      };
    });

    return {
      data,
      Highest: {
        Highest: HEALTHIESTSYTEM,
        HighestData: HEALTHIESTSYTSEMDATA,
        lowest: Lowest ? Lowest : 0,
        lowestData: LowestData,
      },
    };
  }, [TableHeadData, TablecellData]);



  return (
    <div>
      <div className="space-y-8">
        {/* <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>
              {dataAvail.Highest.HighestData[0].name}
            </AvatarFallback>
          </Avatar>
          <div className="mx-5 ml-5 space-y-2 ">
            <p className="text-sm font-medium leading-none ">
              {" "}
              {dataAvail.Highest.HighestData[0].name}
            </p>
            <p className="text-sm text-muted-foreground">
              length of {dataAvail.Highest.HighestData.length} points
            </p>
          </div>
          <div className="ml-auto font-medium">{dataAvail.Highest.Highest}  <span>total reported</span></div>
        </div> */}

        {/* <div className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>
              {dataAvail.Highest.lowestData[0]?.name}
            </AvatarFallback>
          </Avatar>
          <div className="mx-5 ml-5 space-y-2 ">
            <p className="text-sm font-medium leading-none ">
              {" "}
              {dataAvail.Highest.lowestData[0]?.name}
            </p>
            <p className="text-sm text-muted-foreground">
              length of {dataAvail.Highest.HighestData.length} points
            </p>
          </div>
          <div className="ml-auto font-medium">{dataAvail.Highest.lowest} <span>total reported</span></div>
        </div> */}
      </div>
      <div>
        <AllDatas/>
      </div>
    </div>
  );
};

export default DetailData;
