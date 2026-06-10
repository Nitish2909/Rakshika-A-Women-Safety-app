import React from "react";
import { IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMic } from "react-icons/io5";
import { MdSos } from "react-icons/md";

const QuickActions = () => {
  return (
    <div>
      <div className="flex items-center justify-center mb-4">
        <h2 className="font-semibold text-3xl">Quick Actions</h2>
      </div>
      <div className="flex gap-5 ">
        <div className="">
          <div className="bg-pink-500 text-white rounded-full w-14 h-14  flex items-center justify-center">
            <IoCall size={30} />
          </div>
          <h3 className="">Fake Call</h3>
        </div>
        <div className="">
          <div className="bg-pink-500 text-white rounded-full w-14 h-14  flex items-center justify-center">
            <FaMapMarkerAlt size={35} />
          </div>
          <h3 className="">Share<br/>Location</h3>

          <div className="bg-pink-500 text-white rounded-full w-14 h-14  flex items-center justify-center">
            <IoMic size={35} />
          </div>
          <h3 className="">Voice Alert</h3>
        </div>
        <div className="">
          <div className="bg-pink-500 text-white rounded-full w-14 h-14  flex items-center justify-center">
            <MdSos
              size={35}
            />
          </div>
          <h3 className="">Alert</h3>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
