



import {create} from 'zustand';
import { EnumRegions } from '../../components/TableSettlemets';



type RegionStore = {
    regions:  EnumRegions;
    setRegions: (regions: EnumRegions) => void;


}

export const useRegionStore = create<RegionStore>((set) => ({
    regions: "westernRegion",
    setRegions: (regions) => set({regions}),
}));