
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { FiCompass, FiMaximize2, FiMinimize2, FiNavigation } from "react-icons/fi";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for React-Leaflet default marker asset issues in production
const customMarker = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Custom helper component to pan map view when coordinates update
const RecenterMap = ({ center }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, map.getZoom(), { animate: true });
    }
  }, [center, map]);
  return null;
};

const LocationMap = () => {
  const [position, setPosition] = useState([28.6139, 77.2090]); // Default fallback
  const [address, setAddress] = useState("Fetching current coordinates...");
  const [isTracking, setIsTracking] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Reference hooks to target the exact map element node
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setAddress("Geolocation is not supported by your browser");
      return;
    }

    setIsTracking(true);
    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setPosition([latitude, longitude]);
        setAddress(`Lat: ${latitude.toFixed(4)}, Lon: ${longitude.toFixed(4)}`);
      },
      (error) => {
        console.error("Error fetching live location:", error);
        setAddress("Location permissions denied.");
        setIsTracking(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );

    // Synchronize React UI state if users hit "ESC" to close native browser fullscreen mode
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      navigator.geolocation.clearWatch(watchId);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // HTML5 Native Fullscreen Controller Function
  const toggleFullscreen = async () => {
    if (!mapContainerRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await mapContainerRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error("Error shifting fullscreen state:", err);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-5 sm:p-6">
        
        {/* Header Panel */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-slate-50 rounded-xl text-slate-700">
              <FiCompass size={20} className={isTracking ? "animate-spin" : ""} style={{ animationDuration: "3s" }} />
            </div>
            <h2 className="text-lg font-bold text-slate-800 tracking-tight">
              Live Location Tracking
            </h2>
          </div>

          <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
            isTracking ? "bg-emerald-50 text-emerald-700 border border-emerald-100" : "bg-amber-50 text-amber-700 border border-amber-100"
          }`}>
            <span className={`w-2 h-2 rounded-full ${isTracking ? "bg-emerald-500 animate-pulse" : "bg-amber-400"}`}></span>
            {isTracking ? "Tracking Live" : "Offline"}
          </span>
        </div>

        {/* Map Container Viewport (Hooked into useRef for Fullscreen manipulation) */}
        <div 
          ref={mapContainerRef} 
          className={`relative rounded-2xl overflow-hidden border border-slate-100 shadow-inner group bg-white ${
            isFullscreen ? "w-screen h-screen rounded-none border-none" : "h-[320px] w-full"
          }`}
        >
          <MapContainer
            center={position}
            zoom={15}
            zoomControl={false}
            style={{ height: "100%", width: "100%" }}
            className="z-0"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customMarker}>
              <Popup>
                <div className="text-xs font-semibold text-slate-800 flex items-center gap-1">
                  <FiNavigation className="text-pink-500" /> Active Pulse Point
                </div>
              </Popup>
            </Marker>

            <RecenterMap center={position} />
          </MapContainer>

          {/* Floating Action HUD button layout overlay strictly visible inside Fullscreen view mode */}
          {isFullscreen && (
            <button 
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 z-[400] bg-slate-900/90 text-white p-3 rounded-xl shadow-lg backdrop-blur hover:bg-slate-800 transition-all active:scale-95 flex items-center gap-2 text-xs font-bold uppercase tracking-wider"
            >
              <FiMinimize2 size={16} /> Close Fullscreen
            </button>
          )}
        </div>

        {/* Bottom Metadata Controls Panel */}
        <div className="mt-5 pt-4 border-t border-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-0.5">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Current Coordinates
            </p>
            <h3 className="font-mono font-semibold text-slate-700 text-sm sm:text-base">
              {address}
            </h3>
          </div>

          <button 
            onClick={toggleFullscreen}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-all duration-200 active:scale-95 shadow-sm"
          >
            {isFullscreen ? (
              <>
                <FiMinimize2 size={16} /> Minimize Map
              </>
            ) : (
              <>
                <FiMaximize2 size={16} /> Full Screen
              </>
            )}
          </button>
        </div>

      </div>
    </div>
  );
};

export default LocationMap;