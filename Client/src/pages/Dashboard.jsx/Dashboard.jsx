import React from "react";
import { IoNotifications } from "react-icons/io5";
import SOSButton from "../../components/SOSButton/SOSButton";
import QuickActions from "../../components/QuickActions/QuickActions";
import LocationMap from "../../components/LocationMap/LocationMap";
import Contacts from "../Contacts/Contacts";
import NearbyHelp from "../NearbyHelp/NearbyHelp";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
     <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        
        {/* Left Side: Modern Logo Alignment */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <img
              src="/logo.png"
              alt="Rakshika Logo"
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain transition-transform group-hover:scale-105 duration-200"
            />
            {/* Soft decorative pulsing ring matching a security theme */}
            <span className="absolute inset-0 rounded-full border border-rose-500/20 animate-ping scale-110 opacity-70 pointer-events-none"></span>
          </div>
          
          <h1 className="text-xl font-black text-slate-900 tracking-tight">
            Rakshika
          </h1>
        </div>

        {/* Right Side: Clean Telemetry Controls */}
        <div className="flex items-center gap-5">
          
          {/* Notification Hub with Ring Animation */}
          <button className="relative p-1.5 text-slate-500 hover:text-slate-800 rounded-xl hover:bg-slate-50 transition-all duration-200 focus:outline-none">
            <IoNotifications size={24} />
            
            {/* Soft, centered notification badge pill */}
            <span className="absolute top-1 right-1 bg-rose-500 text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center ring-2 ring-white">
              5
            </span>
          </button>

          {/* User profile layout — Optimized to stay clean on both mobile & desktop */}
          <div className="flex items-center gap-3 pl-2 border-l border-slate-100 h-6">
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile avatar"
              className="h-8 w-8 rounded-xl object-cover ring-2 ring-slate-100 cursor-pointer hover:opacity-90 transition-opacity"
            />
            <h3 className="hidden sm:block text-sm font-semibold text-slate-700 tracking-tight">
              Anjali Sharma
            </h3>
          </div>

        </div>

      </div>
    </nav>

      {/* Main Dashboard */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Welcome Card */}
          <div className="lg:col-span-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl shadow-lg p-6 md:p-8 text-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              Welcome Back Anjali! 👋
            </h1>

            <p className="text-sm md:text-lg">
              You are protected. Stay safe, stay alert.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                🛡️ Safety Active
              </span>

              <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                📍 Location Sharing ON
              </span>
            </div>
          </div>

          {/* SOS Section */}
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Emergency SOS
            </h2>

            <SOSButton />

            <p className="text-sm text-gray-500 mt-4 text-center">
              Press SOS to instantly alert your emergency contacts and share
              your live location.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-5">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Quick Actions
          </h2>
          <QuickActions />
        </div>

        {/* Map + Contacts */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-6">
          {/* Live Location */}
          <div className="bg-white rounded-2xl shadow-lg p-5">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Live Location
            </h2>
            <LocationMap />
          </div>

          {/* Emergency Contacts */}
          <div className="bg-white rounded-2xl shadow-lg p-7">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              Emergency Contacts
            </h2>
            <Contacts />
          </div>
        </div>

        {/* Nearby Help */}
        <div className="mt-6 bg-white rounded-2xl shadow-lg p-5">
          <h2 className="text-xl font-bold mb-4 text-gray-800">
            Nearby Help Centers
          </h2>
          <NearbyHelp />
        </div>

        {/* Footer */}
        <footer className="mt-10 text-center text-gray-500 text-sm py-4">
          © {new Date().getFullYear()} Rakshika. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default Dashboard;