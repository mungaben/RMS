import { create } from 'zustand';
import { Zoneapi } from '../../components/Tabledata';

export interface ZoneName {
  id: string;
  name: string;
  zoneId: string;
}

export type ZoneNameData = ZoneName[];

type ZoneStore = {
  zoneNames: string;
  setZones: (zoneNames: string) => void;
};

export const useZoneNameStore = create<ZoneStore>((set) => ({
  zoneNames:'',
  setZones: (zoneNames) => set({ zoneNames }),
}));
