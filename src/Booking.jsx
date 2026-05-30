import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const Booking = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    checkIn: '',
    checkOut: '',
    roomType: 'Standard Double',
    guests: '2'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "212688714661"; // Moroccan number format without + or 00
    const message = `Hello Riad L'Aéroport, I would like to make a reservation:
Name: ${formData.name}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Room: ${formData.roomType}
Guests: ${formData.guests}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto min-h-screen">
      <button onClick={onBack} className="flex items-center text-amber-700 hover:text-amber-800 transition mb-8 font-medium">
        <ArrowLeft className="mr-2" size={20} /> Back to Home
      </button>
      <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-stone-200 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/2 -translate-y-1/2"></div>
        
        <h2 className="text-4xl font-serif text-stone-900 mb-3">Reserve Your Stay</h2>
        <p className="text-stone-600 mb-10 text-lg">Fill in your details below and we will confirm your reservation directly via WhatsApp.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2 uppercase tracking-wide">Full Name</label>
            <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition shadow-sm" placeholder="e.g. John Doe" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2 uppercase tracking-wide">Check-in Date</label>
              <input required type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition shadow-sm" />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2 uppercase tracking-wide">Check-out Date</label>
              <input required type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition shadow-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2 uppercase tracking-wide">Room Type</label>
              <select name="roomType" value={formData.roomType} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition shadow-sm">
                <option value="Standard Double">Standard Double (800 DH)</option>
                <option value="Deluxe Suite">Deluxe Suite (1,200 DH)</option>
                <option value="Family Suite">Family Suite (1,600 DH)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2 uppercase tracking-wide">Guests</label>
              <input required type="number" min="1" max="10" name="guests" value={formData.guests} onChange={handleChange} className="w-full px-5 py-4 rounded-xl border border-stone-200 bg-stone-50 focus:bg-white focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition shadow-sm" />
            </div>
          </div>
          <button type="submit" className="w-full mt-10 py-5 rounded-xl bg-amber-700 text-white font-semibold uppercase tracking-[0.15em] hover:bg-amber-800 transition shadow-xl shadow-amber-700/20 active:scale-[0.98]">
            Complete Booking on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;