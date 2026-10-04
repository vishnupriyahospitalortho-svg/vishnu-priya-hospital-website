import React from 'react';
import { Calendar, Phone, ArrowRight, ShieldCheck, Clock, MapPin, Activity } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';
import { HospitalImages } from '../assets/images';

interface HeroProps {
  onOpenAppointment: () => void;
  onOpenEmergency: () => void;
  onOpenKneeAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAppointment,
  onOpenEmergency,
  onOpenKneeAssessment,
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background Image with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={HospitalImages.heroExterior}
          alt="Vishnu Priya Hospital & Orthopaedic Center Korutla"
          className="w-full h-full object-cover object-center opacity-30 brightness-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-slate-900/70" />
        <div className="absolute inset-0 bg-radial from-transparent via-slate-950/40 to-slate-950/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-24">
        {/* Anti-Slop Unboxed Trust Metadata */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-teal-300 mb-6">
          <span className="flex items-center gap-1.5 text-teal-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Center of Orthopaedic Excellence</span>
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-300">Dr. Naresh Odnala, MBBS, DNB Ortho</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-300">NH-63, Korutla</span>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Proposition Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
              Restoring Pain-Free Mobility & Rebuilding Lives.
            </h1>
            
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Northern Telangana's trusted destination for high-precision Joint Replacement, 4K Keyhole Arthroscopy, and 24/7 Highway Trauma Care. Experienced surgical excellence backed by modular laminar flow operation theatres.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg transition-colors shadow-lg shadow-teal-950/50 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Doctor Consultation</span>
              </button>

              <button
                onClick={onOpenKneeAssessment}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-100 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                <Activity className="w-4 h-4 text-teal-400" />
                <span>Assess Knee Pain Online</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </button>

              <button
                onClick={onOpenEmergency}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-rose-300 bg-rose-950/60 hover:bg-rose-900/60 border border-rose-800/80 rounded-lg transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-rose-400" />
                <span>24/7 Trauma Hotline</span>
              </button>
            </div>

            {/* Quiet Quick Indicators */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-teal-400" />
                <span>OPD: 10:00 AM – 5:00 PM & 6:00 PM – 8:00 PM</span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-400" />
                <span>Near Old Bus Stand, NH-63 Korutla</span>
              </span>
            </div>
          </div>

          {/* Marquee Metric Card */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-800 p-6 sm:p-7 shadow-2xl space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="text-xs uppercase tracking-wider text-teal-400 font-semibold mb-1">
                  Clinical Track Record
                </h3>
                <p className="text-sm text-slate-300">
                  Delivering dependable orthopedic outcomes for patients across Korutla, Jagtial, Metpally, and Nizamabad.
                </p>
              </div>

              {/* Strict Tabular Numerals Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    17+
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Years Clinical Experience
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    12,000+
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Orthopaedic Surgeries
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-teal-400 tabular-nums">
                    5.0 ★
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Patient Satisfaction Rating
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60">
                  <div className="font-display text-2xl sm:text-3xl font-bold text-white tabular-nums">
                    24/7
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Casualty & Highway Trauma
                  </div>
                </div>
              </div>

              {/* Emergency Fast Action Banner */}
              <div className="pt-2">
                <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-900/60 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-rose-300">
                      Emergency Ambulance & Trauma
                    </div>
                    <div className="text-xs text-rose-200/80">
                      Immediate on-call paramedic unit
                    </div>
                  </div>
                  <a
                    href="tel:+919440123456"
                    className="px-3 py-1.5 text-xs font-semibold text-white bg-rose-700 hover:bg-rose-600 rounded-md transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
