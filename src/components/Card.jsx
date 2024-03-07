// Card.js
import React from "react";
import { GoDotFill } from "react-icons/go";

const Card = ({ data, openModal }) => {
  // Receive data and openModal function

  // Determine color based on status
  let badgeColor;
  switch (data.statusBadge) {
    case "SYNCED":
      badgeColor = "bg-green-500";
      break;
    case "FAILED":
      badgeColor = "bg-red-500";
      break;
    case "SYNCING":
      badgeColor = "bg-blue-500";
      break;
    default:
      badgeColor = "bg-gray-500"; // Default to gray if status is unknown
      break;
  }
  return (
    <div onClick={openModal} className="cursor-pointer">
      {/* Add onClick to trigger openModal */}
      <div className="bg-[#202938] text-white py-5 border-1 border-t border-b border-white w-[698px]">
        <div className="flex justify-between px-5">
          <div>
            <h2 className="text-xl text-semibold">{data.title}</h2>{" "}
            {/* Display data dynamically */}
            <div className="flex space-x-1 items-center">
              <p>{data.invoiceNum}</p>
              <GoDotFill />
              <p>{data.name}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-xl">{data.amount}</p>
            <button
              className={`rounded-lg py-1 px-6 font-semibold  ${badgeColor}`}
            >
              {data.statusBadge}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
