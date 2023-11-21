"use client"

import React from 'react';

const Search = () => {

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-xl mx-auto bg-white p-6 rounded-md shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Search</h1>
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Enter your search query"
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <button
                        className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Search;
