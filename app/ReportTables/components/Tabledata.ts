import { table } from "console";

interface Regionapi {
  id: string;
  name: string;
}


export interface Zoneapi {
  id: string;
  name: string;
  regionId: string;
  region: Regionapi;
  zoneNames: string[];
}




type TableHeadDatas =
  | "Basis2"
  | "INTERFACE"
  | "CMS"
  | "SPMS"
  | "NEW PERPAY"
  | "OLD PERPAY"
  | "UTILITY MASTER"
  | "INTERNET"
  | "Exchange BrowserMail";



export const TableHeadData:TableHeadDatas[] = [
    "Basis2",
    "INTERFACE",
    "CMS",
    "SPMS",
    "NEW PERPAY",
    "OLD PERPAY",
    "UTILITY MASTER",
    "INTERNET",
    "Exchange BrowserMail",
  ];


// looping table head
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

 export enum TableName {
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
  from_1200PM = "from_1200PM",
  from_1300PM = "from_1300PM",
  from_1400PM = "from_1400PM",
  from_1500PM = "from_1500PM",
  from_1600PM = "from_1600PM",
}

interface TableCell {
    name : TableName;
    value : number;
}


type TableRow = {
  id: FromTime;
  cells: TableCell[];
};
export const tableData1: TableCell[] = [
  { name: TableName.CMS, value: 0},
  { name: TableName.Basis2, value: 4 },
  { name: TableName.INTERFACE, value: 3 },
  { name: TableName.SPMS, value: 5 },
  { name: TableName.NEW_PERPAY, value: 4 },
  { name: TableName.OLD_PERPAY, value: 2 },
  { name: TableName.UTILITY_MASTER, value: 4},
  { name: TableName.INTERNET, value: 1 },
  { name: TableName.Exchange_BrowserMail, value: 4 },
];

export const tableData: TableRow[] = [

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
    id: FromTime.from_1200PM,
    cells: tableData1
  },
  {
    id: FromTime.from_1300PM,
    cells: tableData1
  },
  // add 4 more rows
  {
    id: FromTime.from_1400PM,
    cells: tableData1
  },

  {
    id: FromTime.from_1500PM,
    cells: tableData1
  },
  {
    id: FromTime.from_1500PM,
    cells: tableData1
  },
  {
    id: FromTime.from_1500PM,
    cells: tableData1
  },
  {
    id: FromTime.from_1600PM,
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


type Zone = {
  id: string;
  name: string;
  regionId: string;
};
export type RegionDataTypes = {
  id: string;
  name: string;
  zones: Zone[];
};
  
export interface PositionDataTypes {
  id: string;
  name: string;
}





export type TableDataCreateManyInput = {
  id?: string;
  value: number;
  time: string;
  date?: Date;
  UpdatedAt?: Date;
  userId ?: string;
  zone?: string | null;
  systemName: string;
  TimeNow: Date;
  disabled: boolean;
};




export type userdata = {
  name: string;
  email: string;
  password: string;
  role: 'ADMIN'| 'USER';
  region: 'westernRegion' | 'southernRegion' | 'northEasternRegion' | 'northernRegion' | 'easternRegion' | 'centralRegion' | 'informalSettlements';
  clerkid: string;
  position: string;
};



export type UserDataDB = {
  clerkid: string;
  createdAt: string;
  email: string;
  id: string;
  myNumber: string | null;
  name: string;
  password: string;
  positionId: string | null;
  regionId: string;
  role: "ADMIN" | "USER";
  updatedAt: string;
};