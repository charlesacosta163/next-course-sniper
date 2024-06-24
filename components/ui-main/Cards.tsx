import Link from "next/link";
import {
    IoTelescopeOutline,
    IoLibraryOutline,
  } from "react-icons/io5";

const Cards = () => {
  return (
    <>
      <div className="flex flex-col flex-1 rounded-round bg-white shadow self-start">
        <img
          src="https://image.cnbcfm.com/api/v1/image/106922887-1628206615260-gettyimages-887132600-as1700__08.jpeg?v=1628206641"
          alt="photo"
          className="max-h-[200px] h-full w-full rounded-t-round"
        />

        <div className="p-4 flex flex-col items-center text-center gap-4">
          <div className="flex gap-2 items-center">
            <IoTelescopeOutline className="text-[2rem]" />
            <h1 className="font-[900] tracking-tight text-3xl">Snipe</h1>
          </div>
          <p className="text-gray-600 text-sm font-[500]">
            Lorem ipsum blah blah blah Lorem ipsum blah blah blah Lorem ipsum
            blah
          </p>
          <Link
            href="/snipe"
            className="rounded bg-blue-main hover:bg-blue-950 text-white w-full font-bold text-xl px-4 py-2"
          >
            New Snipe
          </Link>
        </div>
      </div>

      <div className="flex flex-col flex-1 rounded-round bg-white shadow self-start">
        <img
          src="https://image.cnbcfm.com/api/v1/image/106922887-1628206615260-gettyimages-887132600-as1700__08.jpeg?v=1628206641"
          alt="photo"
          className="max-h-[200px] h-full w-full rounded-t-round"
        />

        <div className="p-4 flex flex-col items-center text-center gap-4">
          <div className="flex gap-2 items-center">
            <IoLibraryOutline className="text-[2rem]" />
            <h1 className="font-[900] tracking-tight text-3xl">Manage</h1>
          </div>
          <p className="text-gray-600 text-sm font-[500]">
            Lorem ipsum blah blah blah Lorem ipsum blah blah blah Lorem ipsum
            blah
          </p>
          <Link
            href="/manage"
            className="rounded bg-gray-100 hover:bg-gray-300 w-full font-bold text-xl px-4 py-2"
          >
            Manage Snipes
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cards;
