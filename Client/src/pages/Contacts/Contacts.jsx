import React from "react";
import { Phone, Plus, Pencil, Trash2 } from "lucide-react";

const contacts = [
  {
    id: 1,
    name: "Mom",
    phone: "+91 9876543210",
    color: "bg-pink-500",
  },
  {
    id: 2,
    name: "Dad",
    phone: "+91 9876543211",
    color: "bg-blue-500",
  },
  {
    id: 3,
    name: "Sister",
    phone: "+91 9876543212",
    color: "bg-purple-500",
  },
  {
    id: 4,
    name: "Rahul",
    phone: "+91 9876543213",
    color: "bg-green-500",
  },
];

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Emergency Contacts
        </h1>

        <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-5 py-3 rounded-xl shadow-md">
          <Plus size={20} />
          Add Contact
        </button>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white rounded-2xl shadow-md border p-4 flex justify-between items-center"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-14 h-14 rounded-full ${contact.color} flex items-center justify-center text-white text-xl font-bold`}
              >
                {contact.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold text-lg">
                  {contact.name}
                </h3>

                <p className="text-gray-500">
                  {contact.phone}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="p-3 rounded-lg bg-green-100 hover:bg-green-200">
                <Phone size={18} className="text-green-600" />
              </button>

              <button className="p-3 rounded-lg bg-blue-100 hover:bg-blue-200">
                <Pencil size={18} className="text-blue-600" />
              </button>

              <button className="p-3 rounded-lg bg-red-100 hover:bg-red-200">
                <Trash2 size={18} className="text-red-600" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;