import axiosClient from "../utils/api";
const dataNavLink = [
  { name: "Home", href: "/?type=app-villa" },
  { name: "Developer", href: "/dev" },
  { name: "Request", href: "/req?type=app-villa" },
];
const dataType = [
  { name: "Apartment-Villa", href: "?type=app-villa" },
  { name: "Pharmacies", href: "?type=pharmacies" },
  { name: "Banks", href: "?type=banks" },
  { name: "Commercial", href: "?type=commercial" },
  { name: "Offices", href: "?type=office" },
];
export default { dataType, dataNavLink };
