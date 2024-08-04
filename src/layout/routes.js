import { FaRegAddressCard } from "react-icons/fa";
import { TbLayoutDashboard } from "react-icons/tb";

export const routes = [
  {
    icon: <TbLayoutDashboard className="text-[28px]" />,
    text: "Dashboard",
    path: "/",
    id: "dashboard",
  },
  {
    icon: <FaRegAddressCard className="text-[28px]" />,
    text: "Reception (OPD)",
    path: "/opd",
    id: "opd",
  },
];

export const useFilteredRoutes = () => {
  return routes;
};
