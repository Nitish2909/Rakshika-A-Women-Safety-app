import React from "react";

const SOSButton = () => {
  return (
    <div>
      {/* SOS Button */}
      <div className="w-full max-w-2xl  mx-auto bg-gradient-to-r rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 border mt-4 flex  ">
        <div className="">
          <h1 className="font-bold text-2xl p-4">Emergency SOS</h1>
          <p className="pl-3 font-medium">
            Press and hold the button for
             3 seconds<br/> to send SOS alerts
          </p>
        </div>

         <button
      className="w-48 h-48 rounded-full bg-red-600 text-white text-4xl font-bold hover:bg-red-700 shadow-xl flex-shrink-0 "
    >
      SOS
    </button>
      </div>
    </div>
  );
};

export default SOSButton;
