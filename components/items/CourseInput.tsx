"use client";

import { usePathname, useRouter } from "next/navigation";
import { GoPlusCircle } from "react-icons/go";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CourseInput = () => {
  const router = useRouter();
  const pathname = usePathname();

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = e.currentTarget.value;
    const searchParams = new URLSearchParams(window.location.search);

    if (searchValue.length >= 3) {
      searchParams.set("title", searchValue);
    } else {
      searchParams.delete("title");
    }

    router.replace(`${pathname}?${searchParams.toString()}`);
  }

  function handleApplyFilters(formData: FormData) {
    const searchParams = new URLSearchParams(window.location.search);

    const term = formData.get("term") as string;
    const isSnipeListed = (formData.get("snipelist") || "off") as string;

    searchParams.set("term", term);
    searchParams.set("snipelisted", isSnipeListed);

    router.replace(`${pathname}?${searchParams.toString()}`);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="" className="text-xs font-[500]">
          Course title
        </label>
        <input
          type="text"
          name="title"
          className="w-full px-4 py-2 outline-none rounded-round"
          placeholder="Enter course name"
          onChange={handleSearch}
        />
      </div>

      <Popover>
        <PopoverTrigger asChild>
          <div className="flex gap-2 items-center bg-gray-200 hover:bg-gray-300 font-[500] px-4 py-2 rounded-round self-start">
            <GoPlusCircle />
            <span className="text-sm">Add filters</span>
          </div>
        </PopoverTrigger>

        <PopoverContent>
          <form action={handleApplyFilters} className="flex flex-col gap-4">
            <h2 className="text-lg font-[700]">Filter By:</h2>

            <div className="flex flex-col gap-2">
              <div className="flex">
                <label htmlFor="" className="flex-1 font-medium">
                  Term:{" "}
                </label>
                <select name="term" id="" className="flex-1">
                  <option value="">All</option>
                  <option value="fall-2024">Fall 2024</option>
                  <option value="spring-2024">Spring 2024</option>
                </select>
              </div>

              <div className="flex">
                <label htmlFor="" className="flex-1 font-medium text-red-500">
                  Snipe Listed:{" "}
                </label>
                <div className="flex-1">
                  <input type="checkbox" name="snipelist" id="" className="" />
                </div>
              </div>

              <button
                type="submit"
                className="self-start px-4 py-2 text-white bg-blue-400 rounded-round"
              >
                Apply
              </button>
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CourseInput;
