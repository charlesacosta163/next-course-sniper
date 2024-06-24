import { PiStudent } from "react-icons/pi";
import { HiEllipsisHorizontal } from "react-icons/hi2";
import { IoTrashOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { classSamples } from "@/lib/data";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex items-center justify-between w-full gap-4 sm:flex-col">
        <div className="flex items-center gap-4">
          <PiStudent className="text-[3rem]" />
          <div className="flex flex-col">
            <h2 className="text-[3rem] font-[200] tracking-tight">John Doe</h2>
            <div className="text-sm text-gray-500">
              Student at Foo College
            </div>
          </div>
        </div>

        <Link href='/login' className="flex items-center gap-2 px-4 py-2 text-sm border-2 border-red-300 text-red-400 hover:text-white rounded-round font-[500] hover:bg-red-300"><CiLogout /> Sign Out</Link>
      </div>

      <div>
        <Tabs defaultValue="account" className="w-full">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="snipes">Snipes</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="w-full p-4 pt-4 text-sm border-2 border-gray-200 rounded-round">

            <h2 className="pb-4 text-lg font-bold">Personal Information</h2>
            <div className="flex flex-col gap-4">

              <div className="flex flex-col gap-1">
              <label htmlFor="Name" className="font-[500] text-gray-400">Name</label><span>John Doe</span>

              </div>
              <div className="flex flex-col gap-1">
              <label htmlFor="Name" className="font-[500] text-gray-400">Email</label><span>johndoe123@example.com</span>

              </div>
            </div>
          </TabsContent>

          <TabsContent value="snipes">
            <Table>
              <TableCaption>Your Sniped Classes</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="">Course</TableHead>
                  <TableHead className="">Professor</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">CSC-161-02</TableCell>
                  <TableCell>Weewa, S</TableCell>
                  <TableCell className="flex justify-end text-[1.5rem] text-red-700">
                    <IoTrashOutline />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">CSC-161-02</TableCell>
                  <TableCell>Foofa, D</TableCell>
                  <TableCell className="flex justify-end text-[1.5rem] text-red-700">
                    <IoTrashOutline />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="font-medium">CSC-161-02</TableCell>
                  <TableCell>Liwah, O</TableCell>
                  <TableCell className="flex justify-end text-[1.5rem] text-red-700">
                    <IoTrashOutline />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
