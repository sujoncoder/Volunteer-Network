"use client";

import logo from "../../assets/logos/Group 1329.png";
import people from "../../assets/logos/users-alt 1.png";
import plus from "../../assets/logos/plus 1.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className={`w-72 h-screen flex flex-col items-center`}>
      <div>
        <div>
          <Image src={logo} className=" h-14 w-32 cursor-pointer" alt="logo" />
        </div>
        <ul>
          <li className="text-sm flex items-center gap-x-4 cursor-pointer hover:text-blue-500 mt-5">
            <Image
              src={people}
              className=" h-4 w-4 cursor-pointer"
              alt="logo"
            />
            <Link
              className={`link ${pathname === "/admin" ? "active" : ""}`}
              href="/admin"
            >
              Volunteer resgister list
            </Link>
          </li>
          <li className="text-sm flex items-center gap-x-4 cursor-pointer hover:text-blue-500 mt-3">
            <Image src={plus} className=" h-4 w-4 cursor-pointer" alt="logo" />
            <Link
              className={`link ${pathname === "/addEvent" ? "active" : ""}`}
              href="/addEvent"
            >
              Add event
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
