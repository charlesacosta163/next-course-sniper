import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { FaX } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { FaRegBell } from "react-icons/fa";
import { IoLibraryOutline, IoPersonCircleOutline } from "react-icons/io5";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import { navLinkStyles } from "@/lib/styles";

// NEEDS TO BE EXTRACTED TO A DATA FILE
const links = [
  {
    icon: <FaRegBell />,
    name: "Notifications",
    link: "/notifications",
  },
  {
    icon: <IoLibraryOutline />,
    name: "Manage Snipes",
    link: "/manage",
  },
  {
    icon: <IoPersonCircleOutline />,
    name: "Profile",
    link: "/profile",
  },
];

const Navbar = () => {
  return (
    <header className="w-full bg-white">
      <nav className="flex items-center justify-between px-8 py-4 sm:px-4">
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3429/3429149.png"
            width="40"
            height="40"
            alt="Sniper logo"
          />
          <span className="text-2xl italic font-bold text-blue">Sniper</span>
        </Link>

        {/* Use React-Icons for menu items */}

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-4 sm:hidden">
            {links.map((e, i) => {
              return (
                <TooltipProvider key={i}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link href={e.link} className="text-[1.5rem]">
                        {e.icon}
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{e.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              );
            })}
          </div>

          {/* <HiOutlineBars3BottomRight className="hidden text-[2rem] sm:block"/> */}
          <div className="hidden sm:block">
            <Sheet>
              <SheetTrigger asChild>
                <HiOutlineBars3BottomRight className="text-[2rem]" />
              </SheetTrigger>
              <SheetContent className="w-[300px]">
                <SheetHeader>
                  <SheetTitle className="text-[2rem]">Options</SheetTitle>
                </SheetHeader>
                <SheetDescription className="flex flex-col gap-4 mt-4">
                  
                  <SheetClose asChild>
                    <Link href="/profile" className={navLinkStyles}>
                      <IoPersonCircleOutline />
                      Profile
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href="/manage" className={navLinkStyles}>
                      <IoLibraryOutline /> Your Snipes
                    </Link>
                  </SheetClose>

                  <SheetClose asChild>
                    <Link href="/notifications" className={navLinkStyles}>
                      <FaRegBell /> Notifications
                    </Link>
                  </SheetClose>
                  
                </SheetDescription>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
