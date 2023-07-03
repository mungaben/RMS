import { table } from "console";







export const TableHeadData = [
    "Basis 2",
    "INTERFACE",
    "CMS",
    "SPMS",
    "NEW PERPAY",
    "OLD PERPAY",
    "UTILITY MASTER",
    "INTERNET",
    "Exchange BrowserMail ",
  ];



  export const TablecellObjects = {
    1: "Basis2",
    2: "INTERFACE",
    3: "CMS",
    4: "SPMS",
    5: "NEW PERPAY",
    6: "OLD PERPAY",
    7: "UTILITY MASTER",
    8: "INTERNET",
    9: "Exchange BrowserMail",
  };

  enum TableName {
    CMS = "CMS",
    Basis2 = "Basis2",
    INTERFACE = "INTERFACE",
    SPMS = "SPMS",
    NEW_PERPAY = "NEW PERPAY",
    OLD_PERPAY = "OLD PERPAY",
    UTILITY_MASTER = "UTILITY MASTER",
    INTERNET = "INTERNET",
    Exchange_BrowserMail = "Exchange BrowserMail",
}


export enum FromTime {
  from_0700AM = "from_0700AM",
  from_0800AM = "from_0800AM",
  from_0900AM = "from_0900AM",
  from_1000AM = "from_1000AM",
  from_1100AM = "from_1100AM",
  from_1200AM = "from_1200AM",
  from_1300AM = "from_1300AM",
  from_1400AM = "from_1400AM",
  from_1500AM = "from_1500AM",
  from_1600AM = "from_1600AM",
}

interface TableCell {
    name: TableName;
    value: number;
}


type TableRow = {
  id: FromTime;
  cells: TableCell[];
};
export const tableData1: TableCell[] = [
  { name: TableName.CMS, value: 1},
  { name: TableName.Basis2, value: 1 },
  { name: TableName.INTERFACE, value: 3 },
  { name: TableName.SPMS, value: 5 },
  { name: TableName.NEW_PERPAY, value: 4 },
  { name: TableName.OLD_PERPAY, value: 2 },
  { name: TableName.UTILITY_MASTER, value: 4},
  { name: TableName.INTERNET, value: 1 },
  { name: TableName.Exchange_BrowserMail, value: 3 },
];

export const tableData: TableRow[] = [
  {
    id:FromTime.from_0700AM,
    cells: tableData1
  },
  {
    id: FromTime.from_0800AM,
    cells: tableData1
  },
  {
    id: FromTime.from_0900AM,
    cells: tableData1
  },
  {
    id: FromTime.from_1000AM,
    cells: tableData1
  },
  {
    id: FromTime.from_1100AM,
    cells: tableData1
  },
  {
    id: FromTime.from_1200AM,
    cells: tableData1
  },
  {
    id: FromTime.from_1300AM,
    cells: tableData1
  },
  // add 4 more rows
  {
    id: FromTime.from_1400AM,
    cells: tableData1
  },

  {
    id: FromTime.from_1500AM,
    cells: tableData1
  },
  {
    id: FromTime.from_1600AM,
    cells: tableData1
  },


];





export enum ToTime {
  to_0800AM,
  to_0900AM,
  to_1000AM,
  to_1100AM,
  to_1200AM,
  to_1300AM,
  to_1400AM,
  to_1500AM,
  to_1600AM,
  to_1700AM,
}



export type MyDataType = {
  from:
    | "from_0700AM"
    | "from_0800AM"
    | "from_0900AM"
    | "from_1000AM"
    | "from_1100AM"
    | "from_1200PM"
    | "from_1300PM"
    | "from_1400PM"
    | "from_1500PM"
    | "from_1600PM";
  to:
    | "to_0800AM"
    | "to_0900AM"
    | "to_1000AM"
    | "to_1100AM"
    | "to_1200PM"
    | "to_1300PM"
    | "to_1400PM"
    | "to_1500PM"
    | "to_1600PM"
    | "to_1700PM";
  Basis2: number | string;
  Interface: number | string;
  cms: number | string;
  spms: number | string;
  newperpay: number | string;
  oldperpay: number | string;
  utilitymaster: number | string;
  internet: number | string;
  exchangemail: number | string;
  comments: string;
  authorId?: string;
};
  