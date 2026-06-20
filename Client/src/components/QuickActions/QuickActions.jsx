import React from "react";
import { IoCall, IoMic } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdSos } from "react-icons/md";

const QuickActions = () => {
  const actions = [
    {
      icon: <IoCall size={26} />,
      title: "Fake Call",
      description: "Trigger a realistic incoming call",
      // Slate/Gray theme for a discreet action
      colorClass: "bg-slate-50 text-slate-600 border border-slate-100 group-hover:bg-slate-600 group-hover:text-white",
    },
    {
      icon: <FaMapMarkerAlt size={24} />,
      title: "Share Location",
      description: "Send live tracking link",
      // Blue theme for navigation/maps
      colorClass: "bg-blue-50 text-blue-600 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white",
    },
    {
      icon: <IoMic size={26} />,
      title: "Voice Alert",
      description: "Record ambient audio instantly",
      // Orange/Amber theme for cautionary actions
      colorClass: "bg-amber-50 text-amber-600 border border-amber-100 group-hover:bg-amber-600 group-hover:text-white",
    },
    {
      icon: <MdSos size={32} />,
      title: "Emergency Alert",
      description: "Notify contacts & authorities",
      // Red theme for high urgency
      colorClass: "bg-red-50 text-red-600 border border-red-100 group-hover:bg-red-600 group-hover:text-white",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Section Header */}
      <div className="mb-8 text-center sm:text-left">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
          Quick Actions
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Tap an action to trigger emergency assistance protocols.
        </p>
      </div>

      {/* Actions Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {actions.map((action, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl border border-slate-100 p-5 md:p-6 flex flex-col items-center text-center cursor-pointer transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.04)] hover:-translate-y-1 active:scale-98"
          >
            {/* Semantic Icon Wrapper */}
            <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${action.colorClass}`}>
              {action.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-slate-800 text-base md:text-lg mb-1 group-hover:text-slate-900">
              {action.title}
            </h3>

            {/* Description */}
            <p className="text-xs text-slate-400 font-medium leading-normal max-w-[150px]">
              {action.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;