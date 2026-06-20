
// import React, { useState } from "react";
// import { Phone, Plus, Pencil, Trash2, MoreVertical, Shield, X } from "lucide-react";
// import { createContactApi } from "../../services/contactService";

// const initialContacts = [
//   { id: 1, name: "Mom", phone: "+91 9876543210", relation: "Primary Support" },
//   { id: 2, name: "Dad", phone: "+91 9876543211", relation: "Secondary Support" },
//   { id: 3, name: "Sister", phone: "+91 9876543212", relation: "Family" },
//   { id: 4, name: "Rahul", phone: "+91 9876543213", relation: "Friend / Neighbor" },
// ];

// const Contacts = () => {
//   const [contacts, setContacts] = useState(initialContacts);
//   const [activeMenu, setActiveMenu] = useState(null);
  
//   // Modal states
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [formData, setFormData] = useState({ name: "", phone: "", relation: "" });

//   // Loading & Error states for API handling
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const toggleMenu = (id) => {
//     setActiveMenu(activeMenu === id ? null : id);
//   };

//   const handleInputChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   //  API Form Submission Logic
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setErrorMessage("");
//     setIsLoading(true);
//     if (!formData.name || !formData.phone || !formData.relation) return;

//     // Local state addition (Replace this with API calls later)
//     try {
//       // Call backend API via our service wrapper
//       const savedContact = await createContactApi(formData);

//       // Append the newly created database contact object to the local UI state
//       setContacts((prevContacts) => [savedContact, ...prevContacts]);

//        setContacts([...contacts, newContact]);
//     setFormData({ name: "", phone: "", relation: "" }); // Reset
//     setIsModalOpen(false); // Close Modal
//     } catch (error) {
//       // Catch backend validation or auth issues (e.g., "Please provide all details")
//       setErrorMessage(err);
//     }

//     // const newContact = {
//     //   id: Date.now(),
//     //   ...formData
//     // };

//   };

//   return (
//     <div className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-8 relative">
//       <div className="max-w-4xl mx-auto">
        
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <div>
//             <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
//               <Shield size={12} fill="currentColor" /> Trusted Circles
//             </div>
//             <h1 className="text-2xl font-black text-slate-900">Emergency Network</h1>
//           </div>
          
//           {/* Plus Trigger Button */}
//           <button 
//             onClick={() => setIsModalOpen(true)}
//             className="p-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-md transition-transform active:scale-95"
//           >
//             <Plus size={20} />
//           </button>
//         </div>

//         {/* Contacts Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
//           {contacts.map((contact) => (
//             <div
//               key={contact.id}
//               className="relative bg-white rounded-2xl border border-slate-100 p-4 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
//             >
//               <div className="absolute top-2 right-2">
//                 <button 
//                   onClick={() => toggleMenu(contact.id)}
//                   className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50"
//                 >
//                   <MoreVertical size={16} />
//                 </button>

//                 {activeMenu === contact.id && (
//                   <div className="absolute right-0 mt-1 w-28 bg-white border border-slate-100 rounded-xl shadow-lg z-10 py-1 overflow-hidden">
//                     <button className="w-full px-3 py-2 text-left text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-2">
//                       <Pencil size={12} /> Edit
//                     </button>
//                     <button className="w-full px-3 py-2 text-left text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2">
//                       <Trash2 size={12} /> Delete
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-base shadow-inner mb-3 mt-2">
//                 {contact.name.charAt(0)}
//               </div>

//               <div className="mb-4 w-full px-1">
//                 <h3 className="font-bold text-slate-800 text-sm sm:text-base truncate">
//                   {contact.name}
//                 </h3>
//                 <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500/80 block mt-0.5">
//                   {contact.relation}
//                 </span>
//                 <p className="text-slate-400 font-mono text-[11px] sm:text-xs mt-1 truncate">
//                   {contact.phone}
//                 </p>
//               </div>

//               <button className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-100 transition-all active:scale-95">
//                 <Phone size={14} fill="currentColor" /> Call
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* POPUP MODAL FORM */}
//       {isModalOpen && (
//         <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
//           <div className="bg-white rounded-3xl w-full max-w-md p-6 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-200">
            
//             {/* Close Button */}
//             <button 
//               onClick={() => setIsModalOpen(false)}
//               className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-xl hover:bg-slate-50"
//             >
//               <X size={18} />
//             </button>

//             <h2 className="text-xl font-black text-slate-900 mb-5">Add Emergency Contact</h2>
            
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div>
//                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
//                 <input 
//                   type="text" 
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   placeholder="e.g. Jane Doe"
//                   className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Phone Number</label>
//                 <input 
//                   type="tel" 
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   placeholder="e.g. +91 9876543210"
//                   className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:border-rose-500 focus:bg-white transition-colors"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Relationship</label>
//                 <select 
//                   name="relation"
//                   value={formData.relation}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm focus:outline-none focus:border-rose-500 focus:bg-white transition-colors appearance-none"
//                   required
//                 >
//                   <option value="">Select Relation</option>
//                   <option value="Primary Support">Primary Support</option>
//                   <option value="Secondary Support">Secondary Support</option>
//                   <option value="Family">Family</option>
//                   <option value="Mom">Mon</option>
//                   <option value="Dad">Dad</option>
//                   <option value="Brother">Brother</option>
//                   <option value="Sister">Sister</option>
//                   <option value="Friend / Neighbor">Friend / Neighbor</option>
//                 </select>
//               </div>

//               <div className="flex gap-3 pt-2">
//                 <button 
//                   type="button"
//                   onClick={() => setIsModalOpen(false)}
//                   className="flex-1 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-50 transition-colors"
//                 >
//                   Cancel
//                 </button>
//                 <button 
//                   type="submit"
//                   className="flex-1 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold shadow-md shadow-rose-100 transition-colors"
//                 >
//                   Save Contact
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contacts;

import React, { useState } from "react";
import { Plus, Shield, X, Phone, MoreVertical, Pencil, Trash2 } from "lucide-react";
import { createContactApi } from "../../services/contactService"; // Import the API function

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null); // Added back for dropdown toggle control
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", relation: "" });
  
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    try {
      const savedContact = await createContactApi(formData);

      // Append the newly created database contact object to the local UI state
      setContacts((prevContacts) => [savedContact, ...prevContacts]);

      setFormData({ name: "", phone: "", relation: "" });
      setIsModalOpen(false);
    } catch (err) {
      setErrorMessage(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <div className="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-rose-500 mb-1">
              <Shield size={12} fill="currentColor" /> Trusted Circles
            </div>
            <h1 className="text-2xl font-black text-slate-900">Emergency Network</h1>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="p-3 bg-rose-500 hover:bg-rose-600 text-white rounded-full shadow-md"
          >
            <Plus size={20} />
          </button>
        </div>

        {/* ==================== CRITICAL ADDITION: THE VISUAL GRID ==================== */}
        {contacts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-200 text-slate-400 font-medium text-sm">
            No contacts added yet. Click the "+" icon to add your first emergency contact.
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {contacts.map((contact) => (
              <div
                key={contact._id} // Note: Changed contact.id to contact._id to match MongoDB
                className="relative bg-white rounded-2xl border border-slate-100 p-4 flex flex-col items-center text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
              >
                {/* Options Menu Trigger */}
                <div className="absolute top-2 right-2">
                  <button 
                    onClick={() => toggleMenu(contact._id)}
                    className="p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50"
                  >
                    <MoreVertical size={16} />
                  </button>

                  {activeMenu === contact._id && (
                    <div className="absolute right-0 mt-1 w-28 bg-white border border-slate-100 rounded-xl shadow-lg z-10 py-1 overflow-hidden">
                      <button className="w-full px-3 py-2 text-left text-xs font-semibold text-slate-600 hover:bg-slate-50 flex items-center gap-2">
                        <Pencil size={12} /> Edit
                      </button>
                      <button className="w-full px-3 py-2 text-left text-xs font-semibold text-rose-600 hover:bg-rose-50 flex items-center gap-2">
                        <Trash2 size={12} /> Delete
                      </button>
                    </div>
                  )}
                </div>

                {/* Contact Profile Initials */}
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-base shadow-inner mb-3 mt-2">
                  {contact.name ? contact.name.charAt(0).toUpperCase() : "?"}
                </div>

                {/* Text Layout */}
                <div className="mb-4 w-full px-1">
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base truncate">
                    {contact.name}
                  </h3>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-500/80 block mt-0.5">
                    {contact.relation}
                  </span>
                  <p className="text-slate-400 font-mono text-[11px] sm:text-xs mt-1 truncate">
                    {contact.phone}
                  </p>
                </div>

                {/* Call Button */}
                <button className="w-full py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-100 transition-all active:scale-95">
                  <Phone size={14} fill="currentColor" /> Call
                </button>
              </div>
            ))}
          </div>
        )}
        {/* ============================================================================ */}

        {/* Modal Window Overlay */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-3xl w-full max-w-md p-6 border border-slate-100 relative">
              <button 
                onClick={() => { setIsModalOpen(false); setErrorMessage(""); }}
                className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-xl"
              >
                <X size={18} />
              </button>

              <h2 className="text-xl font-black text-slate-900 mb-5">Add Emergency Contact</h2>
              
              {errorMessage && (
                <div className="mb-4 p-3 bg-rose-50 text-rose-600 rounded-xl text-xs font-semibold border border-rose-100">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm"
                    required
                    disabled={isLoading}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Relationship</label>
                  <select 
                    name="relation"
                    value={formData.relation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-100 rounded-xl text-sm"
                    required
                    disabled={isLoading}
                  >
                    <option value="">Select Relation</option>
                    <option value="Primary Support">Primary Support</option>
                    <option value="Secondary Support">Secondary Support</option>
                    <option value="Family">Family</option>
                    <option value="Friend / Neighbor">Friend / Neighbor</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-2">
                  <button 
                    type="button"
                    disabled={isLoading}
                    onClick={() => { setIsModalOpen(false); setErrorMessage(""); }}
                    className="flex-1 py-2.5 border border-slate-200 text-slate-600 rounded-xl text-xs font-bold disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 py-2.5 bg-rose-500 hover:bg-rose-600 text-white rounded-xl text-xs font-bold disabled:opacity-70 flex justify-center items-center"
                  >
                    {isLoading ? "Saving..." : "Save Contact"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contacts;