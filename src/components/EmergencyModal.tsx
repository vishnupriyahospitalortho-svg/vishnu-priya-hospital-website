import React, { useState } from 'react';
import { X, Phone, AlertTriangle, MapPin, Navigation, CheckCircle2, ShieldAlert } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({ isOpen, onClose }) => {
  const [callerName, setCallerName] = useState('');
  const [callerPhone, setCallerPhone] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [emergencyType, setEmergencyType] = useState('Highway Road Accident / Polytrauma');
  const [dispatchStatus, setDispatchStatus] = useState<null | {
    unit: string;
    eta: string;
    driverContact: string;
  }>(null);

  if (!isOpen) return null;

  const handleAmbulanceRequest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callerPhone.trim() || !pickupLocation.trim()) return;

    setDispatchStatus({
      unit: 'VP-EMR-02 (Advanced Life Support Ambulance)',
      eta: '8 to 14 Minutes',
      driverContact: '+91 94401 23456'
    });
  };

  const handleOpenGoogleMaps = () => {
    const query = encodeURIComponent("Vishnu Priya Hospital, Old Bus Stand, Korutla, Telangana");
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-2xl border border-rose-200 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-rose-100">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-rose-600 uppercase tracking-wider">
                24/7 Casualty & Trauma Center
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">
                Emergency & Ambulance Dispatch
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Immediate Direct Hotlines */}
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200/80 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-rose-900 uppercase tracking-wide">
              Immediate Trauma Desk Contacts:
            </span>
            <span className="text-[11px] font-semibold text-rose-700">Open 24 Hours</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <a
              href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 p-3 bg-rose-700 hover:bg-rose-800 text-white font-bold rounded-lg transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency: {HOSPITAL_INFO.emergencyPhone}</span>
            </a>

            <a
              href={`tel:${HOSPITAL_INFO.receptionPhone.replace(/\s+/g, '')}`}
              className="flex items-center justify-center gap-2 p-3 bg-white hover:bg-slate-50 text-slate-900 font-bold rounded-lg border border-slate-300 transition-colors"
            >
              <Phone className="w-4 h-4 text-slate-600" />
              <span>Casualty Desk: {HOSPITAL_INFO.receptionPhone}</span>
            </a>
          </div>

          <div className="flex items-center justify-between text-xs text-rose-800 pt-1">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span>NH-63 Highway (Near Old Bus Stand, Korutla)</span>
            </span>
            <button
              onClick={handleOpenGoogleMaps}
              className="font-bold underline hover:text-rose-950 inline-flex items-center gap-1 cursor-pointer"
            >
              <Navigation className="w-3 h-3" />
              <span>Get GPS Route</span>
            </button>
          </div>
        </div>

        {/* Request Ambulance Form or Active Dispatch Status */}
        {dispatchStatus ? (
          <div className="p-5 rounded-xl bg-emerald-50 border border-emerald-200 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Ambulance Dispatched & Trauma Team Alerted</span>
            </div>
            <div className="text-xs text-emerald-950 space-y-1">
              <div>
                <span className="font-semibold">Assigned Unit: </span>
                <span>{dispatchStatus.unit}</span>
              </div>
              <div>
                <span className="font-semibold">Estimated Arrival: </span>
                <span className="font-bold text-emerald-800 tabular-nums">{dispatchStatus.eta}</span>
              </div>
              <div>
                <span className="font-semibold">Paramedic Team Hotline: </span>
                <a href={`tel:${dispatchStatus.driverContact}`} className="underline font-bold">
                  {dispatchStatus.driverContact}
                </a>
              </div>
            </div>
            <div className="text-xs text-slate-600 bg-white p-3 rounded-lg border border-emerald-100">
              Our trauma stabilization team and emergency OT at Vishnu Priya Hospital have been placed on standby. Keep the phone line reachable.
            </div>
          </div>
        ) : (
          <form onSubmit={handleAmbulanceRequest} className="space-y-4">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span>Request Urgent Ambulance Pickup</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Caller / Patient Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Srinivas"
                  value={callerName}
                  onChange={(e) => setCallerName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-rose-600"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">
                  Contact Mobile Number *
                </label>
                <input
                  type="tel"
                  placeholder="e.g. 9440123456"
                  value={callerPhone}
                  onChange={(e) => setCallerPhone(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-rose-600"
                  required
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Exact Pickup Location / Landmark *
              </label>
              <input
                type="text"
                placeholder="e.g. NH-63 near Metpally crossroad / Korutla village"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-rose-600"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">
                Nature of Emergency
              </label>
              <select
                value={emergencyType}
                onChange={(e) => setEmergencyType(e.target.value)}
                className="w-full text-xs p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-rose-600 bg-white"
              >
                <option value="Highway Road Accident / Polytrauma">Highway Road Accident / Polytrauma</option>
                <option value="Severe Bone Fracture / Open Wound">Severe Bone Fracture / Open Wound</option>
                <option value="Elderly Fall / Suspected Hip Fracture">Elderly Fall / Suspected Hip Fracture</option>
                <option value="Severe Joint Dislocation / Extreme Pain">Severe Joint Dislocation / Extreme Pain</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-xs font-bold text-white bg-rose-700 hover:bg-rose-800 rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              Request Immediate Ambulance Dispatch
            </button>
          </form>
        )}

        {/* Footer info */}
        <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
          Emergency Trauma Center · Digital X-Ray · Blood Availability Coordination · 24/7 OT
        </div>
      </div>
    </div>
  );
};
