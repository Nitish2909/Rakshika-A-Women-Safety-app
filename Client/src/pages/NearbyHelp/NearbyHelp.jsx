
import React from "react";
import { Shield, Hospital, Phone, MapPin, Navigation } from "lucide-react";

const places = [
  {
    id: 1,
    name: "Police Station",
    address: "Sector 17, Chandigarh",
    distance: "0.8 km away",
    icon: <Shield size={22} />,
  },
  {
    id: 2,
    name: "Civil Hospital",
    address: "Sector 32, Chandigarh",
    distance: "2.4 km away",
    icon: <Hospital size={22} />,
  },
  {
    id: 3,
    name: "Women Help Center",
    address: "Sector 22, Chandigarh",
    distance: "1.2 km away",
    icon: <MapPin size={22} />,
  },
];

const NearbyHelp = () => {
  return (
    <div className="min-h-screen bg-slate-50/60 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-8 text-left">
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Nearby Help Centers
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Instantly locate emergency services and institutional support closest to you.
          </p>
        </div>

        {/* Layout: Main Grid separating Helpline from Centers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {/* Left Column: Premium Emergency Helpline Banner */}
          <div className="bg-gradient-to-br from-rose-600 to-red-700 text-white rounded-2xl p-6 shadow-xl shadow-rose-600/10 flex flex-col justify-between h-full lg:min-h-[240px]">
            <div>
              <span className="text-[10px] bg-white/20 text-white font-bold uppercase tracking-widest px-2.5 py-1 rounded-full inline-block mb-3">
                24/7 Active Response
              </span>
              <h2 className="text-xl font-bold tracking-tight mb-1">
                Emergency Helpline
              </h2>
              <p className="text-xs text-rose-100 font-medium leading-relaxed mb-6">
                Facing immediate danger? Tap below to establish an instant line with central authorities.
              </p>
            </div>

            <a
              href="tel:112"
              className="inline-flex items-center justify-center gap-2 bg-white text-rose-600 hover:bg-rose-50 px-5 py-3 rounded-xl font-bold text-sm tracking-wide shadow-md transition-all active:scale-95"
            >
              <Phone size={16} fill="currentColor" />
              Call Emergency 112
            </a>
          </div>

          {/* Right Columns: Help Centers Sub-Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {places.map((place) => (
              <div
                key={place.id}
                className="bg-white rounded-2xl border border-slate-100 p-5 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:-translate-y-0.5"
              >
                <div>
                  {/* Top Row: Icon badge & Distance Metadata */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-11 h-11 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-inner">
                      {place.icon}
                    </div>
                    <span className="text-[11px] font-bold font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100/50">
                      {place.distance}
                    </span>
                  </div>

                  {/* Text Information */}
                  <h3 className="text-base font-bold text-slate-800 tracking-tight">
                    {place.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mt-1 leading-normal">
                    {place.address}
                  </p>
                </div>

                {/* Bottom Row Action Button */}
                <div className="mt-5 pt-3 border-t border-slate-50 flex justify-end">
                  <button className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 border border-slate-200/60 px-4 py-2 rounded-xl transition-all active:scale-95">
                    <Navigation size={13} fill="currentColor" />
                    Navigate
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default NearbyHelp;