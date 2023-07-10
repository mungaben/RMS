


import {create} from 'zustand';

import { zoneEnum } from '../../components/TableSettlemets';

type ZoneStore = {
    zones: zoneEnum;
    setZones: (zones:zoneEnum ) => void;


}



export const useZoneStore = create<ZoneStore>((set) => ({
    zones: "Zone1",
    setZones: (zones) => set({zones}),
}));