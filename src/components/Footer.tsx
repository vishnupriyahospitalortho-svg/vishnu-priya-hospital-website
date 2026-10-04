import React from 'react';
import { HOSPITAL_INFO, CHIEF_DOCTOR } from '../data/hospitalData';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
  onOpenKneeAssessment: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAppointment,
  onOpenEmergency,
  onOpenKneeAssessment,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Overview */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-base">
                <span className="font-display">VP</span>
              </div>
              <span className="font-display text-lg font-bold text-white tracking-tight">
                Vishnu Priya Hospital
              </span>
            </div>
            
            <p className="text-slate-400 leading-relaxed text-xs">
              Center of Orthopaedic Excellence & Trauma Care in Korutla, Telangana. Dedicated to advanced joint replacements, arthroscopic sports reconstruction, and 24/7 emergency casualty care under Chief Surgeon {CHIEF_DOCTOR.name}.
            </p>

            <div className="pt-2 text-slate-500 space-y-1">
              <div>Registration & Clinical Establishment Certified</div>
              <div className="text-teal-400 font-medium">Jagtial District, Telangana, India</div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="font-display text-sm font-semibold text-white tracking-wide">
              Hospital Links
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button
                  onClick={() => scrollTo('specialties')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Clinical Specialties
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('doctor')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Chief Surgeon Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('facilities')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Modular Operation Theatre
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenKneeAssessment}
                  className="hover:text-white transition-colors cursor-pointer text-teal-400"
                >
                  Knee Pain Scorecard
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('rehab')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Rehabilitation Exercises
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('insurance')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Cashless Insurance Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Clinical Departments */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-display text-sm font-semibold text-white tracking-wide">
              Key Departments
            </div>
            <ul className="space-y-2 text-slate-400">
              <li>Total Knee & Hip Replacement (TKR/THR)</li>
              <li>4K Arthroscopy & Sports Medicine</li>
              <li>24/7 Highway Trauma & Polytrauma Care</li>
              <li>Spine Care & Micro-Discectomy</li>
              <li>Pediatric Orthopaedics & Clubfoot</li>
              <li>PRP & Regenerative Joint Injections</li>
              <li>Digital Radiography & Physiotherapy</li>
            </ul>
          </div>

          {/* Emergency & Address */}
          <div className="lg:col-span-3 space-y-3">
            <div className="font-display text-sm font-semibold text-white tracking-wide">
              Emergency & Casualty
            </div>
            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <div className="text-[11px] font-bold text-rose-400 uppercase">
                  24 Hours Emergency Line:
                </div>
                <a
                  href={`tel:${HOSPITAL_INFO.emergencyPhone.replace(/\s+/g, '')}`}
                  className="font-bold text-sm text-white hover:text-teal-300 block"
                >
                  {HOSPITAL_INFO.emergencyPhone}
                </a>
              </div>

              <div className="flex items-start gap-2 text-slate-400 pt-1">
                <MapPin className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                <span className="leading-snug">{HOSPITAL_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-teal-500 shrink-0" />
                <a href={`mailto:${HOSPITAL_INFO.email}`} className="hover:text-white underline">
                  {HOSPITAL_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {HOSPITAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Patient Privacy & Clinical Disclosures</span>
            <span aria-hidden="true">·</span>
            <span>Emergency Protocols Validated</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
