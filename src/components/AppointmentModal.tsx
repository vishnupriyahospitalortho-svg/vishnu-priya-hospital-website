import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle, User, Phone, MapPin, Printer, ShieldCheck, ArrowRight, Search } from 'lucide-react';
import { HOSPITAL_INFO, CHIEF_DOCTOR, SPECIALTIES } from '../data/hospitalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedSpecialty?: string;
  preFilledAssessmentNote?: string;
}

export interface StoredAppointment {
  tokenNumber: string;
  patientName: string;
  phoneNumber: string;
  age: string;
  gender: string;
  city: string;
  consultationType: string;
  specialty: string;
  date: string;
  slot: string;
  notes: string;
  createdAt: string;
  status: 'Confirmed' | 'Completed' | 'Pending Verification';
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preSelectedSpecialty,
  preFilledAssessmentNote,
}) => {
  const [activeTab, setActiveTab] = useState<'book' | 'status'>('book');

  // Form Fields
  const [patientName, setPatientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('Male');
  const [city, setCity] = useState('');
  const [consultationType, setConsultationType] = useState('In-Person OPD Consultation');
  const [specialty, setSpecialty] = useState(preSelectedSpecialty || 'Joint Replacement Surgery (Arthroplasty)');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('Morning (10:00 AM - 01:00 PM)');
  const [notes, setNotes] = useState(preFilledAssessmentNote || '');

  // Validation & Submission States
  const [errorMsg, setErrorMsg] = useState('');
  const [confirmedBooking, setConfirmedBooking] = useState<StoredAppointment | null>(null);

  // Status Lookup Fields
  const [searchQuery, setSearchQuery] = useState('');
  const [lookedUpAppointments, setLookedUpAppointments] = useState<StoredAppointment[]>([]);
  const [lookupAttempted, setLookupAttempted] = useState(false);

  // Sync if pre-selected specialty changes
  useEffect(() => {
    if (preSelectedSpecialty) {
      setSpecialty(preSelectedSpecialty);
    }
  }, [preSelectedSpecialty]);

  useEffect(() => {
    if (preFilledAssessmentNote) {
      setNotes(preFilledAssessmentNote);
    }
  }, [preFilledAssessmentNote]);

  // Generate tomorrow as default minimum date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  useEffect(() => {
    if (!date) {
      setDate(minDateStr);
    }
  }, [minDateStr, date]);

  if (!isOpen) return null;

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!patientName.trim()) {
      setErrorMsg('Please enter the patient full name.');
      return;
    }
    if (!phoneNumber.trim() || phoneNumber.length < 10) {
      setErrorMsg('Please provide a valid 10-digit mobile number.');
      return;
    }
    if (!date) {
      setErrorMsg('Please select an appointment date.');
      return;
    }

    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const generatedToken = `VP-ORTHO-${randomDigits}`;

    const newAppointment: StoredAppointment = {
      tokenNumber: generatedToken,
      patientName: patientName.trim(),
      phoneNumber: phoneNumber.trim(),
      age: age.trim() || 'Not specified',
      gender,
      city: city.trim() || 'Korutla',
      consultationType,
      specialty,
      date,
      slot,
      notes: notes.trim(),
      createdAt: new Date().toISOString(),
      status: 'Confirmed'
    };

    // Save to localStorage
    try {
      const existingRaw = localStorage.getItem('vishnu_priya_appointments');
      const list: StoredAppointment[] = existingRaw ? JSON.parse(existingRaw) : [];
      list.unshift(newAppointment);
      localStorage.setItem('vishnu_priya_appointments', JSON.stringify(list));
    } catch {
      // Storage access safety
    }

    setConfirmedBooking(newAppointment);
  };

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setLookupAttempted(true);
    try {
      const existingRaw = localStorage.getItem('vishnu_priya_appointments');
      const list: StoredAppointment[] = existingRaw ? JSON.parse(existingRaw) : [];
      const query = searchQuery.trim().toLowerCase();
      const results = list.filter(
        item => item.tokenNumber.toLowerCase().includes(query) || item.phoneNumber.includes(query)
      );
      setLookedUpAppointments(results);
    } catch {
      setLookedUpAppointments([]);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const resetForm = () => {
    setConfirmedBooking(null);
    setPatientName('');
    setPhoneNumber('');
    setAge('');
    setNotes('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto space-y-6">
        {/* Header with Close */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <div className="text-xs font-semibold text-teal-800 uppercase tracking-wide">
              Official Patient OPD Scheduler
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">
              Consultation with Dr. Naresh Odnala
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        {!confirmedBooking && (
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            <button
              onClick={() => setActiveTab('book')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'book'
                  ? 'bg-white text-teal-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Book New Appointment
            </button>
            <button
              onClick={() => setActiveTab('status')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                activeTab === 'status'
                  ? 'bg-white text-teal-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Check Existing Token Status
            </button>
          </div>
        )}

        {/* If Confirmation is Active */}
        {confirmedBooking ? (
          <div className="space-y-6">
            <div className="p-5 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-800">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Appointment Confirmed & Token Generated</span>
                  </div>
                  <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1 tabular-nums">
                    Token #{confirmedBooking.tokenNumber}
                  </div>
                </div>
                <div className="px-3 py-1 bg-teal-200/60 text-teal-900 rounded-md text-xs font-bold uppercase">
                  {confirmedBooking.status}
                </div>
              </div>

              {/* Consultation Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-white/80 p-4 rounded-xl border border-teal-100">
                <div>
                  <span className="text-slate-500">Patient:</span>
                  <div className="font-semibold text-slate-900">{confirmedBooking.patientName} ({confirmedBooking.gender}, {confirmedBooking.age} yrs)</div>
                </div>
                <div>
                  <span className="text-slate-500">Contact:</span>
                  <div className="font-semibold text-slate-900">{confirmedBooking.phoneNumber}</div>
                </div>
                <div>
                  <span className="text-slate-500">Doctor:</span>
                  <div className="font-semibold text-slate-900">{CHIEF_DOCTOR.name}</div>
                </div>
                <div>
                  <span className="text-slate-500">Department:</span>
                  <div className="font-semibold text-slate-900">{confirmedBooking.specialty}</div>
                </div>
                <div>
                  <span className="text-slate-500">Scheduled Date:</span>
                  <div className="font-semibold text-teal-900">{confirmedBooking.date}</div>
                </div>
                <div>
                  <span className="text-slate-500">Time Slot:</span>
                  <div className="font-semibold text-teal-900">{confirmedBooking.slot}</div>
                </div>
              </div>

              {/* Patient Instructions */}
              <div className="text-xs text-slate-600 space-y-1">
                <div className="font-semibold text-slate-900">Hospital Check-in Instructions:</div>
                <ul className="list-disc pl-4 space-y-0.5 text-slate-600">
                  <li>Please arrive 15 minutes before your scheduled slot at Reception Desk 1.</li>
                  <li>Carry any previous X-rays, MRI scans, or prescription records.</li>
                  <li>Show this Token #{confirmedBooking.tokenNumber} or give your mobile number at reception.</li>
                  <li>Location: Near Old Bus Stand, NH-63, Korutla, Telangana.</li>
                </ul>
              </div>

              {/* Simulated SMS Alert */}
              <div className="p-3 bg-slate-900 text-slate-200 rounded-xl text-xs space-y-1">
                <div className="text-teal-400 font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SMS & WhatsApp Dispatch Confirmation:</span>
                </div>
                <p className="text-slate-300 font-mono text-[11px]">
                  "Dear {confirmedBooking.patientName}, your appointment with Dr. Naresh Odnala at Vishnu Priya Hospital is confirmed for {confirmedBooking.date} ({confirmedBooking.slot}). Token: {confirmedBooking.tokenNumber}. Contact: +91 8725 252345."
                </p>
              </div>
            </div>

            {/* Print & Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100">
              <button
                onClick={resetForm}
                className="text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Book Another Appointment
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Slip</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        ) : activeTab === 'book' ? (
          /* Book Form */
          <form onSubmit={handleBookSubmit} className="space-y-4">
            {errorMsg && (
              <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-xs text-rose-700 font-medium">
                {errorMsg}
              </div>
            )}

            {/* Consultation Type Selector */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Consultation Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                {[
                  'In-Person OPD Consultation',
                  'Second Opinion for Joint Surgery',
                  'Post-Surgical Follow-up',
                ].map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => setConsultationType(type)}
                    className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                      consultationType === type
                        ? 'border-teal-700 bg-teal-50 text-teal-950 font-semibold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Specialty Selection */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Primary Specialty / Joint Concern
              </label>
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700 bg-white"
              >
                {SPECIALTIES.map((spec) => (
                  <option key={spec.id} value={spec.name}>
                    {spec.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date & Time Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Select Preferred Date
                </label>
                <input
                  type="date"
                  min={minDateStr}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700 bg-white"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Preferred OPD Slot
                </label>
                <select
                  value={slot}
                  onChange={(e) => setSlot(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700 bg-white"
                >
                  <option value="Morning (10:00 AM - 01:00 PM)">Morning: 10:00 AM – 01:00 PM</option>
                  <option value="Afternoon (02:00 PM - 05:00 PM)">Afternoon: 02:00 PM – 05:00 PM</option>
                  <option value="Evening (06:00 PM - 08:00 PM)">Evening: 06:00 PM – 08:00 PM</option>
                </select>
              </div>
            </div>

            {/* Patient Personal Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh Kumar"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700"
                  required
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  10-Digit Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9876543210"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Age
                </label>
                <input
                  type="number"
                  placeholder="e.g. 58"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Gender
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700 bg-white"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  City / Village
                </label>
                <input
                  type="text"
                  placeholder="e.g. Korutla / Jagtial"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700"
                />
              </div>
            </div>

            {/* Symptoms or Assessment Note */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Symptoms / Reason for Visit
              </label>
              <textarea
                rows={2}
                placeholder="Describe current joint pain, accident trauma, previous surgery, or duration of discomfort..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700"
              />
            </div>

            {/* Submit CTA */}
            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Confirm & Generate Token</span>
              </button>
            </div>
          </form>
        ) : (
          /* Look up Existing Token Tab */
          <div className="space-y-6">
            <form onSubmit={handleLookup} className="space-y-3">
              <label className="text-xs font-semibold text-slate-700">
                Enter your Token Number or Registered 10-Digit Mobile Number
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. VP-ORTHO-4928 or 9876543210"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-teal-700"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Search className="w-3.5 h-3.5" />
                  <span>Search</span>
                </button>
              </div>
            </form>

            {lookupAttempted && (
              <div className="space-y-3">
                {lookedUpAppointments.length > 0 ? (
                  lookedUpAppointments.map((apt) => (
                    <div key={apt.tokenNumber} className="p-4 rounded-xl border border-teal-200 bg-teal-50/50 space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-sm">
                          Token #{apt.tokenNumber}
                        </span>
                        <span className="px-2 py-0.5 bg-teal-100 text-teal-800 rounded font-semibold text-[11px]">
                          {apt.status}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-slate-700">
                        <div>
                          <span className="text-slate-500">Patient: </span>
                          <span className="font-medium">{apt.patientName}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Phone: </span>
                          <span className="font-medium">{apt.phoneNumber}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Date: </span>
                          <span className="font-medium">{apt.date}</span>
                        </div>
                        <div>
                          <span className="text-slate-500">Slot: </span>
                          <span className="font-medium">{apt.slot}</span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center text-xs text-slate-500 bg-slate-50 rounded-xl border border-slate-200">
                    No active appointment found matching "{searchQuery}". Please check the spelling or book a new appointment.
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
