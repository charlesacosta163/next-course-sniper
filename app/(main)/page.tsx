import Link from "next/link";
import Questions from "@/components/ui-main/Questions";
import { IoPersonCircleOutline } from "react-icons/io5";
import Cards from "@/components/ui-main/Cards";

const today = new Date()

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${month}/${day}/${year}`

export default function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center gap-8">
        {/* Blue Info Box */}
        <div
          className="
          rounded-round p-6 w-full shadow sm:p-4
          bg-gradient-to-r from-blue-main to-[#2C69D1]
        text-white flex justify-between items-center"
        >
          <div>
            <div className="flex items-center gap-2">
              <IoPersonCircleOutline className="text-3xl" />
              <div>
                <div className="font-bold sm:text-sm">Hello John</div>
                <div className="text-xs">{formattedDate}</div>
              </div>
            </div>
          </div>
          <div className="text-xl sm:text-sm font-[900]">Welcome to Sniper</div>
        </div>

        <div className="flex md:flex-col gap-4 justify-between">
          <div className="flex sm:flex-col gap-4 w-full flex-[2]">
            <Cards />
          </div>

          <div className="flex-1">
            <Questions />
          </div>
        </div>
      </div>
    </>
  );
}
