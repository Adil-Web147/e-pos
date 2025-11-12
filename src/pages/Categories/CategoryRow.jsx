import React from "react";

export default function CategoryRow({image, name, description }) {
  return (
    <tr className="hover:bg-[#0a3946]">
      <td className="px-6 py-4">
        <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#0b2c39] flex items-center justify-center">
          <img src={image} alt={name} className="object-cover w-full h-full" />
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="font-semibold">{name}</div>
      </td>
      <td className="px-6 py-4 text-gray-400">{description}</td>
      <td className="px-6 py-4 text-right">
        <div className="inline-flex items-center gap-3 justify-end">
          <button
            className="p-2 rounded-md hover:bg-[#0b3745]"
            aria-label="Edit"
          >
            <svg
              className="w-4 h-4 text-[#4fb0ff]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 4l5 5L9 20H4v-5L15 4z"
              />
            </svg>
          </button>

          <button
            className="p-2 rounded-md hover:bg-[#4b1515]"
            aria-label="Delete"
          >
            <svg
              className="w-4 h-4 text-[#ff6b6b]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 6h18"
              />
              <path
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m5 0V4a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2"
              />
            </svg>
          </button>
        </div>
      </td>
    </tr>
  );
}
