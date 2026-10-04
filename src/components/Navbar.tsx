import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, ShieldAlert } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface NavbarProps {
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
  onOpenKneeAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAppointment,
  onOpenEmergency,
  onOpenKneeAssessment,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="/"
            className="flex items-center gap-2 group text-slate-900 transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-teal-700 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              <span className="font-display">VP</span>
            </div>
            <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-800 transition-colors">
              Vishnu Priya Hospital
            </span>
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollTo('specialties')}
              className="hover:text-teal-800 transition-colors py-1 cursor-pointer"
            >
              Specialties
            </button>
            <button
              onClick={() => scrollTo('doctor')}
              className="hover:text-teal-800 transition-colors py-1 cursor-pointer"
            >
              Dr. Naresh
            </button>
            <button
              onClick={() => scrollTo('facilities')}
              className="hover:text-teal-800 transition-colors py-1 cursor-pointer"
            >
              Facilities
            </button>
            <button
              onClick={onOpenKneeAssessment}
              className="hover:text-teal-800 transition-colors py-1 cursor-pointer"
            >
              Knee Assessment
            </button>
            <button
              onClick={() => scrollTo('rehab')}
              className="hover:text-teal-800 transition-colors py-1 cursor-pointer"
            >
              Rehab Exercises
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="hover:text-teal-800 transition-colors py-1 cursor-pointer"
            >
              Contact & OPD
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEmergency}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200/80 rounded-lg hover:bg-rose-100 transition-colors whitespace-nowrap cursor-pointer"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-rose-600" />
              <span>24/7 Emergency</span>
            </button>

            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <div className="flex flex-col space-y-3 pt-2 pb-3 border-b border-slate-100 text-sm font-medium text-slate-700">
            <button
              onClick={() => scrollTo('specialties')}
              className="text-left py-2 hover:text-teal-800"
            >
              Specialties & Procedures
            </button>
            <button
              onClick={() => scrollTo('doctor')}
              className="text-left py-2 hover:text-teal-800"
            >
              Chief Surgeon: Dr. Naresh Odnala
            </button>
            <button
              onClick={() => scrollTo('facilities')}
              className="text-left py-2 hover:text-teal-800"
            >
              Modular OT & Facilities
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenKneeAssessment();
              }}
              className="text-left py-2 text-teal-800 font-semibold"
            >
              Knee & Joint Health Self-Assessment
            </button>
            <button
              onClick={() => scrollTo('rehab')}
              className="text-left py-2 hover:text-teal-800"
            >
              Post-Op Rehab Exercises
            </button>
            <button
              onClick={() => scrollTo('insurance')}
              className="text-left py-2 hover:text-teal-800"
            >
              Cashless Insurance & TPA Desk
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left py-2 hover:text-teal-800"
            >
              Location, Contact & OPD Hours
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEmergency();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg"
            >
              <Phone className="w-4 h-4 text-rose-600" />
              <span>24/7 Trauma Emergency Hotline</span>
            </button>
            <div className="text-center text-xs text-slate-500 pt-1">
              <span>{HOSPITAL_INFO.address}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
