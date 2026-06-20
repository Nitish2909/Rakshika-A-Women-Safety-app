import React from "react";

const SOSButton = () => {
  const handleSOS = () => {
    alert("SOS Button Clicked");
  };

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-8">
        
        {/* Left Side: Clean Typography */}
        <div className="text-center sm:text-left">
          <span className="text-xs font-bold tracking-widest text-red-500 uppercase">
            Emergency System
          </span>
          <h1 className="font-bold text-2xl text-slate-800 mt-1 mb-2">
            Emergency SOS
          </h1>
          <p className="text-slate-500 text-sm font-medium leading-relaxed">
            Press and hold the button for{" "}
            <span className="text-slate-800 font-semibold">3 seconds</span>{" "}
            <br className="hidden sm:inline" />
            to send SOS alerts to your contacts.
          </p>
        </div>

        {/* Right Side: Sleek, Minimalist SOS Button */}
        <div className="relative flex-shrink-0">
          {/* Concentric Pulse Rings */}
          <div className="absolute inset-0 bg-red-100 rounded-full scale-125 animate-ping opacity-70"></div>
          <div className="absolute inset-0 bg-red-50 rounded-full scale-150 opacity-50"></div>
          
          <button
            onClick={handleSOS}
            className="relative w-36 h-36 rounded-full bg-red-600 text-white text-3xl font-bold tracking-wide shadow-[0_10px_25px_-5px_rgba(220,38,38,0.4)] transition-all duration-200 hover:bg-red-700 active:scale-95 active:shadow-inner focus:outline-none focus:ring-4 focus:ring-red-100"
          >
            SOS
          </button>
        </div>

      </div>
    </div>
  );
};

export default SOSButton;