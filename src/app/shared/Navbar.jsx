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
};

export default Navbar;
