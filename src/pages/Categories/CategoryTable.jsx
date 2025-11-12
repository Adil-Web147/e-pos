import React from "react";
import CategoryRow from "./CategoryRow";

export default function CategoryTable() {
  return (
    <div className="bg-[#0e2834] border border-[#183241] rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Current Categories</h2>
        <div className="relative">
          <input
            type="search"
            placeholder="Search categories..."
            className="pl-10 pr-4 py-2 rounded-md bg-[#06202a] border border-[#183241] placeholder:text-gray-500 focus:outline-none"
          />
          <svg
            className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35"
            />
            <circle
              cx="11"
              cy="11"
              r="6"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-[#183241]">
        <table className="w-full">
          <thead className="bg-[#0b2c39] text-left text-xs text-gray-300">
            <tr>
              <th className="px-6 py-3">IMAGE</th>
              <th className="px-6 py-3">NAME</th>
              <th className="px-6 py-3">DESCRIPTION</th>
              <th className="px-6 py-3 text-right">ACTIONS</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#15313b] bg-[#07202a] text-gray-200">
           
            <CategoryRow
              image="./electronics.png"
              name="Electronics"
              description="Gadgets, devices, and accessories"
            />
            <CategoryRow
              image='./clothes.png'
              name="Apparel"
              description="Clothing for all seasons and styles"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
