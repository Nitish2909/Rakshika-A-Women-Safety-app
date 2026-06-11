import React from "react";
import { IoCall, IoMic } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdSos } from "react-icons/md";

const QuickActions = () => {
  const actions = [
    {
      icon: <IoCall size={32} />,
      title: "Fake Call",
    },
    {
      icon: <FaMapMarkerAlt size={32} />,
      title: "Share Location",
    },
    {
      icon: <IoMic size={32} />,
      title: "Voice Alert",
    },
    {
      icon: <MdSos size={32} />,
      title: "Emergency Alert",
    },
  ];

  return (
    <div className="w-full">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {actions.map((action, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center cursor-pointer"
          >
            <div className="bg-pink-500 text-white rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-3">
              {action.icon}
            </div>

            <h3 className="text-center font-medium text-gray-700">
              {action.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;