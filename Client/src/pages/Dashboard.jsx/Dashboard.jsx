import React from "react";
import { IoNotifications } from "react-icons/io5";
import SOSButton from "../../components/SOSButton/SOSButton";
import QuickActions from "../../components/QuickActions/QuickActions";

const Dashboard = () => {
  return (
    <div>
      <nav className="flex items-center justify-center gap-7  shadow-md w-full">
        {/* Logo */}
        <div className="flex-1 items-start">
          <div className="flex items-center ">
            <img src="/logo.png" alt="Logo" className="h-12 w-12" />
            <h1 className="ml-2 text-xl font-bold text-pink-600">Rakshika</h1>
          </div>
        </div>

        <div className="relative inline-block">
          <IoNotifications size={35} className="text-pink-600" />

          {/* Notification Count */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            5
          </span>
        </div>

        <h3 className="">Anjali Sharma</h3>
      </nav>
      <sidebar></sidebar>
      <div className="flex items-center gap-3 p-2 sm:flex flex-col">
        {/* Card */}
        <div className="w-full max-w-2xl mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 text-white mt-4 ">
          <h1 className="font-bold text-2xl p-4">Welcome Back Anjali! 👋</h1>
          <p className="pl-3 font-medium">
            You are Protected. Stay safe, stay alert
          </p>
        </div>
        <SOSButton/>

        <QuickActions/>
      </div>
    </div>
  );
};
 
export default Dashboard;
