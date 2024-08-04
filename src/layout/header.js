import { MdOutlineHeadsetMic } from "react-icons/md";
import { useRouter } from "next/router";
import { routes } from "./routes";
import Link from "next/link";
import { IconButton } from "@mui/material";
import { useState } from "react";
import SupportDialog from "@/components/support-dialog";
import { BsPersonCircle } from "react-icons/bs";

const Header = () => {
  const router = useRouter();
  const title = routes.find((x) => x.path === router.pathname)?.text;

  const [supportDialogOpen, setSupportDialogOpen] = useState(false); // State for dialog

  const handleSupportClick = () => {
    setSupportDialogOpen(true);
  };

  const handleSupportDialogClose = () => {
    setSupportDialogOpen(false);
  };

  return (
    <div className="px-5 z-[1000] border-b sticky top-0 bg-white w-full h-[83px] shadow-sm py-2 flex items-center justify-between">
      <div>
        <p className="font-medium text-2xl">{title}</p>
      </div>

      <div className="flex items-center gap-x-5 h-full">
        <IconButton
          onClick={handleSupportClick}
          className="cursor-pointer text-[#48535F] text-[24px]"
        >
          <MdOutlineHeadsetMic />
        </IconButton>
        <div className="w-[2px] h-[40px] mx-3 bg-[rgba(0,0,0,0.3)]"></div>
        <Link
          href={"/profile"}
          className="flex items-center gap-x-5 cursor-pointer"
        >
          <BsPersonCircle size={28} />

          <p className="text-[#9B9B9B]">Pulkit Gupta</p>
        </Link>
      </div>

      <SupportDialog
        open={supportDialogOpen}
        handleClose={handleSupportDialogClose}
      />
    </div>
  );
};

export default Header;
