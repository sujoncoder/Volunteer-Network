import Head from "next/head";
import React from "react";
import Sidebar from "../components/Sidebar";
import deleteButton from "../../assets/logos/trash-2 9.png";
import Image from "next/image";

const volunteers = [
  {
    id: 1,
    name: "Moshiur Rahman",
    email: "rmosiur324@gmail.com",
    date: "22-10-2020",
    list: "Organize books at the library.",
  },
  {
    id: 2,
    name: "Moshiur Rahman",
    email: "rmosiur324@gmail.com",
    date: "22-10-2020",
    list: "Organize books at the library.",
  },
  {
    id: 3,
    name: "Moshiur Rahman",
    email: "rmosiur324@gmail.com",
    date: "22-10-2020",
    list: "Organize books at the library.",
  },
  {
    id: 4,
    name: "Moshiur Rahman",
    email: "rmosiur324@gmail.com",
    date: "22-10-2020",
    list: "Organize books at the library.",
  },
  {
    id: 5,
    name: "Moshiur Rahman",
    email: "rmosiur324@gmail.com",
    date: "22-10-2020",
    list: "Organize books at the library.",
  },
  {
    id: 6,
    name: "Moshiur Rahman",
    email: "rmosiur324@gmail.com",
    date: "22-10-2020",
    list: "Organize books at the library.",
  },
];

const Admin = () => {
  return (
    <div>
      <Head>
        <title>Volunteer Network - Admin</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className=" flex-1 h-screen bg-gray-200">
          <div className="flex items-center ps-5 h-20 bg-white">
            <h1 className="text-2xl font-semibold">Volunteer Register List</h1>
          </div>
          <div className="bg-white m-5">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F5F6FA] m-3">
                  <th className="text-[#686868] py-2 px-4">Name</th>
                  <th className="text-[#686868] py-2 px-4">Email Id</th>
                  <th className="text-[#686868] py-2 px-4">
                    Registration Date
                  </th>
                  <th className="text-[#686868] py-2 px-4">Volunteer list</th>
                  <th className="text-[#686868] py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody>
                {volunteers.map((vol) => (
                  <tr key={vol.id}>
                    <td className="py-2 px-4">{vol.name}</td>
                    <td className="py-2 px-4">{vol.email}</td>
                    <td className="py-2 px-4">{vol.date}</td>
                    <td className="py-2 px-4">{vol.list}</td>
                    <td className="py-2 px-4">
                      <button className="bg-red-500 text-white py-1 px-2 rounded">
                        <Image
                          width={30}
                          height={30}
                          src={deleteButton}
                          alt="delete"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
