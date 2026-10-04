import React, { useState } from 'react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Navigation, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Orthopaedic Inquiry');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) return;

    setIsSubmitted(true);
  };

  const handleOpenGoogleMaps = () => {
    const query = encodeURIComponent("Vishnu Priya Hospital, Old Bus Stand, Korutla, Telangana");
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Anti-Slop Unboxed Editorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
            <span>Location & Direct Communication</span>
            <span aria-hidden="true">·</span>
            <span>Korutla, Telangana</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Visit Vishnu Priya Hospital & Connect With Us
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Conveniently situated along the Mancherial–Nizamabad Highway (NH-63) near the Old Bus Stand in Korutla, ensuring fast highway ambulance access and easy patient commutes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Hospital Info & OPD Timings Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-6">
              <h3 className="font-display text-xl font-bold text-slate-900">
                Hospital Contact Desk
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start gap-3 text-slate-700">
                  <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Hospital Address:</div>
                    <div className="text-slate-600 leading-relaxed mt-0.5">{HOSPITAL_INFO.address}</div>
                    <button
                      onClick={handleOpenGoogleMaps}
                      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 underline cursor-pointer"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps & Get Directions</span>
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 text-slate-700 pt-2 border-t border-slate-100">
                  <Mail className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Official Hospital Email:</div>
                    <a
                      href={`mailto:${HOSPITAL_INFO.email}`}
                      className="text-teal-800 hover:underline font-medium break-all"
                    >
                      {HOSPITAL_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3 text-slate-700 pt-2 border-t border-slate-100">
                  <Phone className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <div>
                      <span className="font-bold text-slate-900">24/7 Trauma Emergency: </span>
                      <a href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`} className="text-rose-700 font-bold hover:underline">
                        {HOSPITAL_INFO.emergencyPhone}
                      </a>
                    </div>
                    <div>
                      <span className="font-bold text-slate-900">Reception & OPD: </span>
                      <a href={`tel:${HOSPITAL_INFO.receptionPhone.replace(/\s+/g, '')}`} className="text-slate-700 font-medium hover:underline">
                        {HOSPITAL_INFO.receptionPhone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3 text-slate-700 pt-2 border-t border-slate-100">
                  <Clock className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900">Consultation Timings:</div>
                    <div className="text-slate-600 mt-0.5">{HOSPITAL_INFO.opdHours}</div>
                    <div className="text-rose-700 font-semibold text-xs mt-1">Casualty & Emergency: Open 24 Hours / 7 Days</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highway Accessibility Notes */}
            <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-100 text-xs text-teal-950 space-y-1.5">
              <div className="font-bold flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-teal-700" />
                <span>Travel Accessibility From Neighboring Towns:</span>
              </div>
              <ul className="text-teal-900 space-y-1">
                <li>• From Metpally: ~12 km (approx 15-18 mins via NH-63)</li>
                <li>• From Jagtial: ~30 km (approx 35 mins via NH-63)</li>
                <li>• From Nizamabad / Armoor: Direct highway connectivity</li>
              </ul>
            </div>
          </div>

          {/* Inquiry / Message Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="border-b border-slate-100 pb-4 mb-6">
              <h3 className="font-display text-xl font-bold text-slate-900">
                Send a Direct Consultation Inquiry
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Have questions about knee replacement surgery, fracture recovery, or doctor timings? Our clinical desk responds promptly.
              </p>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-teal-50 border border-teal-200 text-teal-950 space-y-3 text-center">
                <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-display text-lg font-bold">
                  Inquiry Successfully Received
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold">{name}</span>. A member of our clinical team from Vishnu Priya Hospital will contact you at <span className="font-semibold">{phone}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setMessage('');
                  }}
                  className="mt-3 px-4 py-2 text-xs font-semibold text-teal-800 bg-teal-100 hover:bg-teal-200 rounded-lg transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Anjaiah Rao"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700"
                      required
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 9876543210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="yourname@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-700">
                      Inquiry Subject
                    </label>
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700 bg-white"
                    >
                      <option value="General Orthopaedic Inquiry">General Orthopaedic Inquiry</option>
                      <option value="Total Knee Replacement (TKR) Query">Total Knee Replacement (TKR) Query</option>
                      <option value="Arthroscopy / Sports Injury">Arthroscopy / Sports Injury</option>
                      <option value="Fracture & Trauma Consultation">Fracture & Trauma Consultation</option>
                      <option value="Cashless Insurance / Aarogyasri Desk">Cashless Insurance / Aarogyasri Desk</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-700">
                    Your Question or Clinical Details *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Please specify your questions, symptoms, or requested date for consultation..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700"
                    required
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="text-[11px] text-slate-500">
                    Inquiries are sent directly to hospital desk: <span className="font-mono text-slate-700">{HOSPITAL_INFO.email}</span>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
