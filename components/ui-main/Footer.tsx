import Link from "next/link";

import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer
      className={`max-w-[1000px] w-full rounded-round px-[4rem] py-8 md:px-8 mt-8 bg-blue-200`}
    >
      <div className="flex justify-between sm:flex-col sm:gap-8">
        <div
          id="logo-name"
          className="text-[2rem] font-bold tracking-widest text-primary italic"
        >
          SNIPER
        </div>

        <div id="links" className="flex flex-col gap-4">
          <h1 className="font-[500] text-[1.25rem]">About</h1>

          <Link className="hover:underline" href="https://middlesexcollege.edu/">
            Foo College
          </Link>
          <Link
            className="hover:underline"
            href="#"
          >
            Join Us
          </Link>
          <Link
            className="hover:underline"
            href="#"
          >
            Clubs
          </Link>
        </div>

        <div id="links" className="flex flex-col gap-4">
          <h1 className="font-[500] text-[1.25rem]">Socials</h1>

          <div className="flex items-center gap-4">
            <Link
              className="hover:underline text-[1.5rem]"
              href="#"
            >
              <RiDiscordLine />
            </Link>
            <Link
              className="hover:underline text-[1.5rem]"
              href="#"
            >
              <FaInstagram />
            </Link>
            <Link
              className="hover:underline text-[1.5rem]"
              href="#"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              className="hover:underline text-[1.5rem]"
              href="#"
            >
              <FaXTwitter />
            </Link>
            <Link
              className="hover:underline text-[1.5rem]"
              href="#"
            >
              <FaFacebookF />
            </Link>
          </div>
        </div>
      </div>

      <hr className={`my-8 text-[rgba(0,0,0,.25)]`} />

      <div>
        <h1 className="text-[.9rem]">
          Created by Charles
        </h1>
        <div
          className={`text-[rgba(255,255,255,.5)]"
          } text-[.6rem]`}
        >
          Copyright © 2024 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
