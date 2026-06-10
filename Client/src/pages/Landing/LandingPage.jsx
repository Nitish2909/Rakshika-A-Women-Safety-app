import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { IoNotifications } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate = useNavigate()

  return (
    <>
      <Navbar />

      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">

        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 bg-pink-100 items-center">

          {/* Left Content */}
          <div className="flex flex-col justify-center py-12">
            <h1 className="text-4xl md:text-5xl font-bold px-6 md:px-20 mb-4 text-center md:text-left">
              Your Safety <br /> is Our Priority
            </h1>

            <p className="text-lg md:text-2xl px-6 md:px-20 mb-6 text-center md:text-left text-gray-700">
              We are here to help you in any emergency.
              Stay safe, stay strong!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 px-6 md:px-20 items-center md:items-start">
              <button  onClick={() => navigate("/login")} className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition">
                Login
              </button>

              <button onClick={()=>navigate('/signup')} className="bg-white border border-pink-500 text-pink-600 font-semibold py-3 px-6 rounded-lg hover:bg-pink-50 transition">
                Create Account
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end p-6">
            <img
              src="/main-img.png"
              alt="Rakshika"
              className="w-full max-w-md md:max-w-xl"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why Choose Rakshika?
          </h2>

          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">

            {/* Card 1 */}
            <div className="w-full max-w-xs min-h-[180px] border rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition">
              <IoNotifications size={35} className="text-pink-600 mb-2" />
              <h3 className="font-bold text-xl mb-2">SOS Alert</h3>
              <p className="text-gray-600">
                Send instant SOS alerts to your emergency contacts.
              </p>
            </div>

            {/* Card 2 */}
            <div className="w-full max-w-xs min-h-[180px] border rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition">
              <FaMapMarkerAlt size={35} className="text-pink-600 mb-2" />
              <h3 className="font-bold text-xl mb-2">Live Tracking</h3>
              <p className="text-gray-600">
                Share your live location with trusted contacts.
              </p>
            </div>

            {/* Card 3 */}
            <div className="w-full max-w-xs min-h-[180px] border rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition">
              <FaAddressBook size={35} className="text-pink-600 mb-2" />
              <h3 className="font-bold text-xl mb-2">Emergency Contacts</h3>
              <p className="text-gray-600">
                Add trusted contacts to receive emergency alerts.
              </p>
            </div>

            {/* Card 4 */}
            <div className="w-full max-w-xs min-h-[180px] border rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition">
              <FaShieldAlt size={35} className="text-pink-600 mb-2" />
              <h3 className="font-bold text-xl mb-2">Stay Protected</h3>
              <p className="text-gray-600">
                We are always working to ensure your safety and security.
              </p>
            </div>

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default LandingPage;