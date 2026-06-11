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
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Rakshika Logo"
              className="h-10 w-10 sm:h-12 sm:w-12"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-pink-600">
              Rakshika
            </h1>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <div className="relative cursor-pointer">
              <IoNotifications
                size={28}
                className="text-pink-600 sm:w-8 sm:h-8"
              />

              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center">
                5
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <img
                src="https://i.pravatar.cc/40"
                alt="Profile"
                className="h-9 w-9 rounded-full"
              />
              <h3 className="font-medium text-gray-700">
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