<<<<<<< HEAD
"use client";

import React, { useState } from "react";
import logo from "../../assets/logos/Group 1329.png";
import Image from "next/image";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = usePathname();

  // create toggle function
  const handleOpenNav = () => {
    setOpen(!open);
  };

  // create close function
  const handleCloseNav = () => {
    setOpen(!open);
  };
  return (
    <main>
      <section className="py-4 flex justify-between items-center mx-[100px]">
        {/* Logo section */}
        <div>
          <Image
            src={logo}
            width={150}
            height={150}
            alt="logo"
            className="cursor-pointer"
          />
        </div>

        {/* Desktop nav section */}
        <ul className="hidden md:flex space-x-6 font-semibold">
          <li className="cursor-pointer">
            <Link
              className={`link ${pathname === "/home" ? "active" : ""}`}
              href="/home"
            >
              Home
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link
              className={`link ${pathname === "/events" ? "active" : ""}`}
              href="/events"
            >
              Events
            </Link>
          </li>

          <li className="cursor-pointer">
            <Link
              className={`link ${pathname === "/admin" ? "active" : ""}`}
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              className={`link ${pathname === "/admin" ? "active" : ""}`}
              href="/admin"
            >
              Admin
            </Link>
          </li>

          {/* Toggle icon section */}
          <div className="md:hidden" onClick={handleOpenNav}>
            {!open ? (
              <IoMdMenu className="cursor-pointer" size={25} />
            ) : (
              <IoMdClose className="cursor-pointer" size={25} />
            )}

            {/* Mobile navbar secion */}
            <ul
              className={
                !open
                  ? "hidden"
                  : "absolute top-16 uppercase text-xl font-medium flex flex-col left-0 w-full h-[250px]"
              }
            >
              <li className="cursor-pointer border-b mx-10 text-center p-2 hover:bg-slate-700 rounded duration-500">
                <Link
                  className={`link ${pathname === "/admin" ? "active" : ""}`}
                  href="/home"
                >
                  Home
                </Link>
              </li>

              <li className="cursor-pointer border-b mx-10 text-center p-2 hover:bg-slate-700 rounded duration-500">
                <Link
                  className={`link ${pathname === "/admin" ? "active" : ""}`}
                  href="/event"
                >
                  Events
                </Link>
              </li>

              <li className="cursor-pointer mx-10 text-center p-2 border-b hover:bg-slate-700 rounded duration-500">
                <Link
                  className={`link ${pathname === "/admin" ? "active" : ""}`}
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
            </ul>

            {/* button area */}
            <div className="hidden md:flex space-x-4">
              <button className="py-2 px-4 bg-blue-500 active:bg-blue-700 rounded text-white">
                Login
              </button>

              <button className="py-2 px-4 bg-green-700 active:bg-green-800 rounded text-white">
                Admin
              </button>
            </div>
          </div>
        </ul>
      </section>
    </main>
  );
=======
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <nav>
            <div className="container mx-auto flex items-center justify-between py-4">
                {/* Left side - Logo */}
                <div className="flex items-center">
                    <a href="/">
                        <Image
                            src={logo}
                            width={150}
                            height={150}
                            alt='logo'
                        />
                    </a>
                </div>

                {/* Right side - Navigation Links and Buttons */}
                <div className="flex items-center">
                    {/* Navigation Links */}
                    <ul className="flex space-x-4 text-lg">
                        <li>
                            <Link href="/" className="font-semibold">Home</Link>
                        </li>
                        <li>
                            <Link href="events" className="font-semibold">Events</Link>
                        </li>
                        <li>
                            <Link href="blog" className="font-semibold">Blogs</Link>
                        </li>
                    </ul>

                    {/* Buttons - Login and Dashboard */}
                    <div className="ml-4">
                        <Link href="/login">
                            <button className="bg-green-600 text-white active:bg-green-700 px-4 py-2 rounded-md mr-2">Login</button>
                        </Link>

                        <button className="bg-blue-500 active:bg-blue-600 text-white px-4 py-2 rounded-md">Dashboard</button>
                    </div>
                </div>
            </div>
        </nav>
    );
>>>>>>> 7ed300ab157ba177673d43642d491da4f6283fff
};

export default Navbar;
