
import { create } from "zustand";


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
type TableHeadData = "Basis2" | "INTERFACE" | "CMS" | "SPMS" | "NEW PERPAY" | "OLD PERPAY" | "UTILITY MASTER" | "INTERNET" | "Exchange BrowserMail" ;
interface DashboardState {
  dashboard: Date;
  system:TableHeadData ;
  setSystem: (system:TableHeadData) => void;
  setDashboard: (dash: Date) => void;
  
}
export const useDashboardStore = create<DashboardState>((set) => ({
  dashboard: new Date(),
  system: 'CMS',
  setSystem: (system) => set((state) => ({ system: system })),
  setDashboard: (dash) => set((state) => ({ dashboard: dash })),
}));