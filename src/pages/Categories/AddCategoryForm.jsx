import React from "react";

export default function AddCategoryForm() {
  return (
    <div className="bg-[#0e2330] border border-[#183241] rounded-2xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Add New Category</h2>

      <div className="space-y-4">
        <label className="block text-sm text-gray-300">Category Image</label>
        <div className="relative rounded-xl border-2 border-dashed border-[#22414f] bg-[#05202b] p-6 flex flex-col items-center justify-center text-center text-gray-400">
          <svg
            className="w-8 h-8 mb-2 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
            />
            <path
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 12v6"
            />
            <path
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10l4-4 4 4"
            />
          </svg>
          <div className="text-sm">
            <div className="font-medium text-gray-200">Upload a file</div>
            <div className="text-xs text-gray-500">
              PNG, JPG, GIF up to 10MB
            </div>
          </div>
          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
        </div>

        <div>
          <label className="text-sm text-gray-300 block mb-2">
            Category Name
          </label>
          <input
            type="text"
            placeholder="e.g., Electronics"
            className="w-full rounded-md bg-[#06202a] border border-[#183241] px-3 py-2 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1f6fff]"
          />
        </div>

        <div>
          <label className="text-sm text-gray-300 block mb-2">Description</label>
          <textarea
            rows="4"
            placeholder="Briefly describe the category..."
            className="w-full rounded-md bg-[#06202a] border border-[#183241] px-3 py-2 placeholder:text-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-[#1f6fff]"
          />
        </div>

        <div>
          <button className="w-full py-3 rounded-lg bg-[#1f6fff] text-white font-semibold hover:brightness-105">
            + Add Category
          </button>
        </div>
      </div>
    </div>
  );
}
