"use client";

import Head from "next/head";
import React from "react";
import Sidebar from "../components/Sidebar";
import Image from "next/image";
import uploadFile from "../../assets/logos/cloud-upload-outline 1.png";

const AddEvent = () => {
  const handleAddEvent = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const date = form.date.value;
    const description = form.description.value;
    const file = form.file.value;

    const data = { title, date, description, file };

    console.log(data);
  };
  return (
    <div>
      <Head>
        <title>Volunteer Network - Add event</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 h-screen bg-gray-200">
          <div className="flex items-center ps-5 h-20 bg-white">
            <h1 className="text-2xl font-semibold">Add Event</h1>
          </div>
          <div className="">
            <form
              onSubmit={handleAddEvent}
              className="grid grid-cols-2 bg-white m-5 p-8"
            >
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Event Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                  placeholder="Enter title"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="dateOfBirth"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Event Date
                </label>
                <input
                  type="date"
                  name="date"
                  className="border border-gray-300 rounded-md w-full py-2 ms-3 px-3 focus:outline-none focus:ring focus:border-blue-300"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  className="border border-gray-300 rounded-md w-full py-2 px-3 focus:outline-none focus:ring focus:border-blue-300"
                  name="description"
                  placeholder="Enter a short description"
                />
              </div>
              <div className="mb-4">
                <input
                  type="file"
                  className=" hidden"
                  name="file"
                  id="upload"
                />
                <label
                  htmlFor="upload"
                  className=" inline-block 
                  text-xl
                  ms-3
                   mt-8
                  px-5 py-2
                  bg-[#E5F3FF]
                  text-blue-600 
                   cursor-pointer
                    mb-2"
                >
                  <Image
                    src={uploadFile}
                    className="w-5 h-5"
                    alt="upload File"
                  />{" "}
                  Banner
                </label>
              </div>
              <div></div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
