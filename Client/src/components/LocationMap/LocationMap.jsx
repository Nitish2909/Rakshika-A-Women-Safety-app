import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LocationMap = () => {
  const position = [28.6139, 77.2090]; // Delhi Example

  return (
    <div className="bg-white rounded-2xl shadow-lg border p-4 w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">📍 Live Location</h2>

        <span className="text-green-600 font-medium">
          ● Tracking On
        </span>
      </div>

      {/* Map */}
      <MapContainer
        center={position}
        zoom={13}
        className="h-[350px] w-full rounded-xl overflow-hidden"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={position}>
          <Popup>
            Current User Location
          </Popup>
        </Marker>
      </MapContainer>

      {/* Footer */}
      <div className="mt-4 flex flex-col md:flex-row justify-between items-center gap-3">
        <div>
          <p className="text-sm text-gray-500">Current Location</p>

          <h3 className="font-semibold">
            Connaught Place, New Delhi
          </h3>
        </div>

        <button className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg">
          View Full Map
        </button>
      </div>
    </div>
  );
};

export default LocationMap;