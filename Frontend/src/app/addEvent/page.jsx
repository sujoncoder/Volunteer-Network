import Head from "next/head";
import React from "react";
import Sidebar from "../components/Sidebar";

const AddEvent = () => {
  return (
    <div>
      <Head>
        <title>Volunteer Network - Add event</title>
      </Head>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 h-screen">
          <div className="flex items-center ps-5 h-20 bg-gray-400">
            <h1 className="text-2xl font-semibold">Add Event</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
