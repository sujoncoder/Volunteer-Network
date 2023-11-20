import Head from "next/head";
import React from "react";
import logo from "../../assets/logos/Group 1329.png";
import people from "../../assets/logos/users-alt 1.png";
import plus from "../../assets/logos/plus 1.png";
import Image from "next/image";
import Link from "next/link";

const Admin = () => {
  return (
    <div>
      <Head>
        <title>Volunteer Network - Admin</title>
      </Head>
      <div className="flex">
        <div
          className={`w-72 h-screen bg-slate-700 flex flex-col items-center`}
        >
          <div>
            <div>
              <Image
                src={logo}
                className=" h-14 w-32 cursor-pointer"
                alt="logo"
              />
            </div>
            <ul>
              <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer hover:text-red-500 mt-5">
                <Image
                  src={people}
                  className=" h-4 w-4 cursor-pointer bg-gray-300"
                  alt="logo"
                />
                <Link href="/volunteerRegister">Volunteer resgister list</Link>
              </li>
              <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer hover:text-red-500 mt-3">
                <Image
                  src={plus}
                  className=" h-4 w-4 cursor-pointer bg-gray-300"
                  alt="logo"
                />
                <Link href="/addEvent">Add event</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-7 flex-1 h-screen">
          <h1 className="text-2xl font-semibold">Volunteer Register List</h1>
        </div>
      </div>
    </div>
  );
};

export default Admin;
