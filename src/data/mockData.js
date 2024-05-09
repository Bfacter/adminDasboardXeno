import { tokens } from "../theme";

export const mockDataTeam = [
  {
    id: 1,
    name: "Jassi",
    email: "jassi@gmail.com",
    age: 20,
    phone: "9595682454",
    access: "junior manager",
  },
  {
    id: 2,
    name: "Dhanveer",
    email: "dhanveer@gmail.com",
    age: 25,
    phone: "9865479126",
    access: "cfo",
  },
  {
    id: 3,
    name: "Daksh",
    email: "dakshsardana@gmail.com",
    age: 20,
    phone: "986548954",
    access: "ceo",
  },
];

export const mockDataContacts = [
  {
    id: 1,
    name: "Daksh",
    email: "dakshsardana@gmail.com",
    age: 35,
    phone: "998458825",
    address: "ashoka",
    city: "New delhi",
    zipCode: "110094",
  },
  
];

export const mockDataInvoices = [
  {
    id: 1,
    name: "daksh",
    email: "dakshsardana@gmail.com",
    cost: "2124",
    phone: "98653285",
    date: "03/12/2022",
  },
];

export const mockTransactions = [
  {
    txId: "01e4dsa",
    user: "daksh",
    date: "2024-06-04",
    cost: "43.95",
  },
];

export const mockBarData = [
  {
    country: "AD",
    "hot dog": 137,
    "hot dogColor": "hsl(229, 70%, 50%)",
    burger: 96,
    burgerColor: "hsl(296, 70%, 50%)",
    kebab: 72,
    kebabColor: "hsl(97, 70%, 50%)",
    donut: 140,
    donutColor: "hsl(340, 70%, 50%)",
  },
];

export const mockPieData = [
  {
    id: "hack",
    label: "hack",
    value: 239,
    color: "hsl(104, 70%, 50%)",
  },
];

export const mockLineData = [
  {
    id: "japan",
    color: tokens("dark").greenAccent[500],
    data: [
      {
        x: "plane",
        y: 101,
      },
      {
        x: "helicopter",
        y: 75,
      },
    ],
  },
  {
    id: "france",
    color: tokens("dark").blueAccent[300],
    data: [
      {
        x: "plane",
        y: 212,
      },
    ],
  },
  {
    id: "us",
    color: tokens("dark").redAccent[200],
    data: [
      {
        x: "plane",
        y: 191,
      },
      {
        x: "helicopter",
        y: 136,
      },
      
    ],
  },
];

export const mockGeographyData = [
  {
    id: "AFG",
    value: 520600,
  },
];
