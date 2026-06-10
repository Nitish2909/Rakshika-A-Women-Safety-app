import React from "react";
import { Shield, Hospital, Phone, MapPin } from "lucide-react";

const places = [
  {
    id: 1,
    name: "Police Station",
    address: "Sector 17, Chandigarh",
    icon: <Shield size={24} />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    name: "Civil Hospital",
    address: "Sector 32, Chandigarh",
    icon: <Hospital size={24} />,
    color: "bg-red-100 text-red-600",
  },
  {
    id: 3,
    name: "Women Help Center",
    address: "Sector 22, Chandigarh",
    icon: <MapPin size={24} />,
    color: "bg-pink-100 text-pink-600",
  },
];

const NearbyHelp = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Nearby Help Centers
        </h1>

        <p className="text-gray-500 mt-2">
          Find emergency services and support nearby.
        </p>
      </div>

      {/* Emergency Helpline */}
      <div className="bg-red-600 text-white rounded-2xl p-5 shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-2">
          Emergency Helpline
        </h2>

        <p className="mb-4">
          Call immediately in case of danger.
        </p>

        <a
          href="tel:112"
          className="inline-flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-xl font-semibold"
        >
          <Phone size={18} />
          Call 112
        </a>
      </div>

      {/* Help Centers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {places.map((place) => (
          <div
            key={place.id}
            className="bg-white rounded-2xl shadow-md border p-5 hover:shadow-lg transition"
          >
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${place.color}`}
            >
              {place.icon}
            </div>

            <h3 className="text-xl font-semibold mt-4">
              {place.name}
            </h3>

            <p className="text-gray-500 mt-2">
              {place.address}
            </p>

            <button className="mt-4 w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-xl">
              View on Map
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyHelp;