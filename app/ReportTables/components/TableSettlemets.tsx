
export interface Regiontypes {
  Zone1: string[];
  Zone2: string[];
  Zone3: string[];
  Zone4?: string[]; // Optional
  Zone5?: string[]; // Optional
  Zone6?: string[]; // Optional
}
export type  zoneEnum = "Zone1" | "Zone2" | "Zone3" | "Zone4" | "Zone5" | "Zone6";


export const informalSettlements = {
  Zone1: [
    "Maendeleo Community School",
    "Mukuru Kwa Reuben Chiefs Camp",
    "Gatoto Primary School",
    "Our Lady Of Nazareth Mukuru Kwa Njenga",
    "St Elizabeth",
    "Lungalunga Health Centre",
    "Viwandani Chiefs Camp",
    "Mukuru Kwa Reuben Police Post",
    "Kwa Njenga Alhuda Mosque",
    "Star of Hope",
    "Mukuru Nyayo",
    "Mukuru Kaiyaba Primary School",
    "Kaloleni Primary School",
  ],
  Zone2: [
    "Korogocho Chiefs Camp",
    "Mathare DCC Office",
    "Kosovo Chiefs Camp",
    "Mathare North Chiefs Camp",
    "Kiboro Primary School",
    "Kahawa Soweto Health Centre",
    "Matopeni Police Post",
    "Matopeni Chiefs Chiefs Camp",
    "Kitui Village",
    "Mji Wa Huruma",
  ],
  Zone3: [
    "Kibera Lainisaba Chiefs Camp",
    "Kibera Silanga Community Grounds",
    "Raila Educational Centre",
    "Kibera DCC",
    "Ng'ando New Estate",
    "Southlands",
    "Dagoretti Muslim Primary School",
    "Riruta Mosque Madarasa",
    "Kibera Law Courts",
    "Silanga Pcea",
    "Gitiba Primary School Dagoreti",
    "Kiandaa 42 Kibra",
    "Kibera Soweto Chiefs Camp",
    "Bangladesh",
  ],
};

export const westernRegion = {
  Zone1: ["Parklands", "Westlands"],
  Zone2: [
    "Spring Valley",
    "Kangemi",
    "Rhapta Rd",
    "Gigiri",
    "Kyuna",
    "Loresho",
    "Ruaka",
    "Uthiru",
  ],
  Zone3: ["Lavington", "Kawangware", "Dagoretti", "Kinoo"],
};

export const southernRegion = {
  Zone1: [
    "Kilimani",
    "Kileleshwa",
    "Lavington",
    "Hurlingham",
    "Riverside",
    "Ngong Road",
  ],
  Zone2: [
    "Kibera",
    "Highrise",
    "Ngumo",
    "Woodley",
    "Jamhuri",
    "Golfcourse",
    "Magiwa",
    "Highview",
  ],
  Zone3: ["Karen", "Lang'ata"],
};

export const northEasternRegion = {
  Zone1: ["Kangundo Road"],
  Zone2: ["Babadogo", "Dandora"],
  Zone3: ["Jogoo Road"],
  Zone4: ["Buruburu"],
  Zone5: ["Eastleigh"],
};

export const northernRegion = {
  Zone1: [
    "Safari Park Est",
    "Thome",
    "Marurui",
    "Garden Estate",
    "Utalii Village",
    "Ridgeways",
    "Njathaini",
    "Thindigua-Kugeria",
    "Kasarani",
    "Old Muthaiga",
    "Muthaiga North",
    "Balozi Estate",
    "Runda",
    "Gigiri",
    "City Park",
    "Forest Road",
    "Pangani",
    "Roysambu",
  ],
  Zone2: ["Huruma", "Mathare", "Ngumba", "Drive In", "Mathare North"],
  Zone3: [
    "Zimmerman",
    "Githurai 44",
    "Kamae",
    "Congo",
    "Kahawa west NCC",
    "Kiamumbi",
    "Jua Kali",
    "Maziwa",
    "Qurray",
    "Kiwanja",
  ],
  Zone4: [
    "Githurai",
    "Kahawa Wendani",
    "Kahawa Sukari",
    "Githurai Progressive",
  ],
  Zone5: [
    "Ngomongo",
    "Sports view",
    "Sports Drive",
    "Roysambu/Kasarani police",
    "Clay City",
    "Seasons",
    "Santon",
    "Hanters",
    "Keroka",
    "Chieko",
    "Maji mazuri",
    "Mwiki Phase3",
    "Mwiki",
    "Mariru park",
    "Budalangi",
    "Mwirigo",
    "Infinity",
  ],
};

export const easternRegion = {
  Zone1: ["Kayole"],
  Zone2: ["Komarock"],
  Zone3: ["Umoja"],
  Zone4: ["Industrial Area"],
  Zone5: ["Embakasi"],
  Zone6: ["Donholm"],
};

export const centralRegion = {
  Zone1: ["Upperhill", "CBD", "Ngara"],
  Zone2: ["South C", "Madaraka", "Akila 1", "Akila 2", "Mugoya Estate"],
  Zone3: [
    "Industrial Area",
    "Nairobi West",
    "Balozi",
    "Plainsview",
    "South B",
    "Diamond Park",
  ],
};

export const nairobiRegions = {
  informalSettlements,
  westernRegion,
  southernRegion,
  northEasternRegion,
  northernRegion,
  easternRegion,
  centralRegion,
};


export const Regions = [
  "westernRegion",
  "southernRegion",
  "northEasternRegion",
  "northernRegion",
  "easternRegion",
  "centralRegion",
  "informalSettlements"
];



export type EnumRegions = "westernRegion" | "southernRegion" | "northEasternRegion" | "northernRegion" | "easternRegion" | "centralRegion" | "informalSettlements";



enum RegionEnum {
  WesternRegion = "WesternRegion",
  SouthernRegion = "SouthernRegion",
  NorthEasternRegion = "NorthEasternRegion",
  NorthernRegion = "NorthernRegion",
  EasternRegion = "EasternRegion",
  CentralRegion = "CentralRegion",
  InformalSettlements = "InformalSettlements",
}

