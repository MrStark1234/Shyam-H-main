import logo from "@/assets/logo.svg";
import { useRouter } from "next/router";
import { useFilteredRoutes } from "./routes";

const Sidebar = () => {
  const router = useRouter();

  const availableRoutes = useFilteredRoutes();

  return (
    <div className="h-[100vh] w-[350px] bg-[#fff] px-5 py-5 border-r">
      <div className="px-4">
        <img src={logo.src} className="h-[40px]" />
      </div>

      <p className="mt-8 text-[#727F92] font-medium text-sm mb-4 mx-4">
        MAIN MENU
      </p>
      <div className="gap-y-[5px] flex flex-col">
        {availableRoutes.map((item, i) => (
          <div
            onClick={() => router.push(item.path)}
            key={i}
            className={`flex items-center  gap-x-5 hover:bg-primary text-[#878889] cursor-pointer hover:text-white rounded-xl px-5 py-2
            ${router.pathname !== item.path ? "" : "bg-primary text-white"}
            `}
          >
            {item.icon}
            <p className=" hover:text-white mt-[2px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
