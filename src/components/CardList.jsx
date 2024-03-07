// CardList.js
import React from "react";
import Card from "./Card";
import DataItems from "../Data";
import { MdCloudSync } from "react-icons/md";

const CardList = ({ openModal }) => {
  // Receive openModal function
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-[700px] rounded-t  rounded-b border-2 border-white">
        <div className="bg-[#924010] text-white text-3xl flex items-center space-x-3 py-5 px-2  rounded-t">
          <MdCloudSync size={45} />
          <h1> Syncing to Sage....</h1>
        </div>
        {DataItems.map((data) => (
          <Card
            key={data.id}
            data={data}
            openModal={() => openModal(data)} // Pass openModal function with item data
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
