import axiosClient from "../utils/api";
const dataNavLink = [
  { name: "Home", href: "/?type=app" },
  { name: "Developer", href: "/dev" },
  { name: "Request", href: "/req?type=app" },
];
const dataType = [
  { name: "Apartment", href: "?type=app" },
  { name: "Villa", href: "?type=villa" },
  { name: "Pharmacies", href: "?type=pharmacies" },
  { name: "Banks", href: "?type=banks" },
  { name: "Commercial", href: "?type=commercial" },
  { name: "Offices", href: "?type=office" },
];
export default { dataType, dataNavLink };
