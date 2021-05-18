import auris from "../assets/dataTable/auris.png";
import avanza from "../assets/dataTable/avanza.png";
import prius from "../assets/dataTable/prius.png";
import xenia from "../assets/dataTable/xenia.png";

function createData(
  image,
  name,
  status,
  date,
  time,
  totalKm,
  volume,
  cost,
  id
) {
  return { image, name, status, date: date, time, totalKm, volume, cost, id };
}

export const vehicleAvailablity = {
  active: "0",
  inShop: "1",
  outOfService: "2",
};

export const ROWS_BASE = [
  createData(
    auris,
    "Toyota auris",
    vehicleAvailablity.active,
    new Date("2019-06-9"),
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000",
    "Toyotaauris22"
  ),
  createData(
    xenia,
    "Daihatsu xenia",
    vehicleAvailablity.outOfService,
    new Date("2019-06-9"),
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000",
    "Daihatsuxenia1"
  ),

  createData(
    auris,
    "Toyota auriss",
    vehicleAvailablity.active,
    new Date("2019-06-9"),
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000",
    "Toyotaauriss2"
  ),

  createData(
    avanza,
    "Toyota avanzas",
    vehicleAvailablity.inShop,
    new Date("2019-06-8"),
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000",
    "Toyotaavanzas23"
  ),

  createData(
    avanza,
    "Toyota avanza",
    vehicleAvailablity.inShop,
    new Date("2019-06-10"),
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000",
    "Toyotaavanza01"
  ),
  createData(
    prius,
    "Toyota prius",
    vehicleAvailablity.active,
    new Date("2019-06-10"),
    "10:30 AM",
    "17.845 km",
    "123.35 L",
    "Rp 625.000",
    "Toyotaprius233"
  ),
];

// createData(
//   auris,
//   "Toyota loolo",
//   vehicleAvailablity.active,
//   new Date("2019-06-5"),
//   "10:343 AM",
//   "123.844 km",
//   "13243.3 L",
//   "Rp 625.000",
//   "Toyoqwertaauriss2"
// ),

// createData(
//   avanza,
//   "Toyota awqervanzas",
//   vehicleAvailablity.inShop,
//   new Date("2019-06-3"),
//   "10:30 AM",
//   "17.845 km",
//   "123.35 L",
//   "Rp 625.000",
//   "Toyotqweraavanzas23"
// ),

// createData(
//   avanza,
//   "Toyota avanza",
//   vehicleAvailablity.inShop,
//   new Date("2019-06-14"),
//   "10:30 AM",
//   "17.845 km",
//   "123.35 L",
//   "Rp 625.000",
//   "Toyotaavsgbgrbanza01"
// ),
// createData(
//   prius,
//   "Toyota prius",
//   vehicleAvailablity.active,
//   new Date("2019-06-12"),
//   "10:30 AM",
//   "17.845 km",
//   "123.35 L",
//   "Rp 625.000",
//   "Toyotaprius233dfnfgn"
// ),
// createData(
//   avanza,
//   "Toyota avancvvvvza",
//   vehicleAvailablity.inShop,
//   new Date("2019-06-14"),
//   "10:30 AM",
//   "17.845 km",
//   "123.35 L",
//   "Rp 625.000",
//   "nza01"
// ),
// createData(
//   prius,
//   "Toyota priuasdfas",
//   vehicleAvailablity.active,
//   new Date("2019-06-2"),
//   "10:30 AM",
//   "17.845 km",
//   "123.35 L",
//   "Rp 625.000",
//   "2qr"
// ),
