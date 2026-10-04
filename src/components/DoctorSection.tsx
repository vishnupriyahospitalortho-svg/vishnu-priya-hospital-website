import React from 'react';
import { Calendar, Award, CheckCircle2, Clock, Globe } from 'lucide-react';
import { CHIEF_DOCTOR } from '../data/hospitalData';
import { HospitalImages } from '../assets/images';

interface DoctorSectionProps {
  onOpenAppointment: () => void;
}

export const DoctorSection: React.FC<DoctorSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section id="doctor" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Anti-Slop Unboxed Editorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
            <span>Surgical Leadership & Care</span>
            <span aria-hidden="true">·</span>
            <span>17+ Years Clinical Service</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Meet Chief Orthopaedic Surgeon Dr. Naresh Odnala
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Renowned across Jagtial district and surrounding regions for precision joint replacements, sports ligament reconstructions, and compassionate post-operative recovery care.
          </p>
        </div>

        {/* Doctor Spotlight Card */}
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Surgeon Portrait */}
            <div className="lg:col-span-5 relative bg-slate-100 min-h-[380px] lg:min-h-[480px]">
              <img
                src={HospitalImages.drNareshPortrait}
                alt="Dr. Naresh Odnala, Chief Orthopedic Surgeon"
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <div className="font-display text-xl font-bold">{CHIEF_DOCTOR.name}</div>
                <div className="text-xs text-teal-300">{CHIEF_DOCTOR.credentials}</div>
              </div>
            </div>

            {/* Surgeon Details */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="hidden lg:block">
                  <div className="flex items-center gap-2 text-xs font-medium text-teal-700 mb-1">
                    <span>{CHIEF_DOCTOR.title}</span>
                    <span aria-hidden="true">·</span>
                    <span>17+ Years Surgical Practice</span>
                  </div>
                  <h3 className="font-display text-3xl font-bold text-slate-900">
                    {CHIEF_DOCTOR.name}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600 mt-0.5">
                    {CHIEF_DOCTOR.credentials}
                  </p>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {CHIEF_DOCTOR.about}
                </p>

                {/* Fellowships & Accreditations */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-900 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-teal-700" />
                    <span>Clinical Credentials & Fellowships</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                    {CHIEF_DOCTOR.fellowships.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Consultation Hours Grid */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-900">
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-teal-700" />
                      <span>Regular OPD Consultation Schedule</span>
                    </span>
                    <span className="text-teal-700">{CHIEF_DOCTOR.opdTimings.days}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600">
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                      <div className="text-slate-500 font-medium">Morning Session</div>
                      <div className="text-slate-900 font-bold mt-0.5 tabular-nums">
                        {CHIEF_DOCTOR.opdTimings.morning}
                      </div>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                      <div className="text-slate-500 font-medium">Evening Session</div>
                      <div className="text-slate-900 font-bold mt-0.5 tabular-nums">
                        {CHIEF_DOCTOR.opdTimings.evening}
                      </div>
                    </div>
                    <div className="bg-white p-2.5 rounded-lg border border-slate-200">
                      <div className="text-slate-500 font-medium">Sunday</div>
                      <div className="text-slate-900 font-bold mt-0.5">
                        Emergency Standby
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                    <Globe className="w-3.5 h-3.5 text-slate-400" />
                    <span>Languages spoken fluently: </span>
                    <span className="text-slate-800 font-medium">{CHIEF_DOCTOR.languages.join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment with Dr. Naresh</span>
                </button>
                <div className="text-xs text-slate-500">
                  <span>Fast token allocation · Priority joint evaluation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
