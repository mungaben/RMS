import { create } from "zustand";
import { tableData } from "../../components/Tabledata";

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

enum FromTime {
  from_0700AM,
  from_0800AM,
  from_0900AM,
  from_1000AM,
  from_1100AM,
  from_1200AM,
  from_1300AM,
  from_1400AM,
  from_1500AM,
  from_1600AM,
}

interface TableCell {
  name: TableName;
  value: number;
}

interface TableRow {
  id: FromTime;
  cells: TableCell[];
}

interface TableStore {
  tableRowData: TableRow[];
  tablecellData: TableCell[];
  setRowData: (rowData: TableRow[]) => void;
  setCellData: (cellData: TableCell[]) => void;
  addTableCell: () => void;
  deleteTableCell: (cellId: number) => void;
  deleteTableRow: (rowId: number) => void;
}

const useTableStore = create<TableStore>((set) => ({
  tableRowData: tableData,
  tablecellData: tableData.flatMap((row) => row.cells),
  setRowData: (rowData) => {
    console.log("rowData", rowData);
    
    set({ tableRowData: rowData });
  },
  setCellData: (cellData) => {
    console.log("cellData", cellData);
    
    set({ tablecellData: cellData });
  },
  addTableCell: () => {

    // Implement your logic to add a table cell
    
  },
  deleteTableCell: (cellId) => {
    // Implement your logic to delete a table cell
  },
  deleteTableRow: (rowId) => {
    // Implement your logic to delete a table row
  },
}));

export default useTableStore;
