import React, { useState } from 'react';
import { SPECIALTIES, Specialty } from '../data/hospitalData';
import { ArrowRight, CheckCircle2, Activity, Clock, ShieldCheck, X, Calendar } from 'lucide-react';

interface SpecialtiesSectionProps {
  onSelectSpecialtyForBooking: (specialtyName: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({
  onSelectSpecialtyForBooking,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null);

  const categories = [
    { id: 'all', label: 'All Specialties' },
    { id: 'joint', label: 'Joint Replacement' },
    { id: 'sports', label: 'Arthroscopy & Sports' },
    { id: 'trauma', label: 'Trauma & Fractures' },
    { id: 'spine', label: 'Spine & Back' },
    { id: 'pediatric', label: 'Pediatric' },
    { id: 'general', label: 'Arthritis & PRP' },
  ];

  const filteredSpecialties = activeCategory === 'all'
    ? SPECIALTIES
    : SPECIALTIES.filter(s => s.category === activeCategory);

  return (
    <section id="specialties" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Anti-Slop Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
              <span>Comprehensive Orthopaedic Departments</span>
              <span aria-hidden="true">·</span>
              <span>Advanced Surgical & Non-Surgical Care</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
              Specialized Bone, Joint & Spine Treatments
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Every procedure is executed with meticulous surgical planning, digital precision instrumentation, and evidence-based post-operative physiotherapy.
            </p>
          </div>

          {/* Interactive Filter Tabs (Valid functional buttons) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-teal-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecialties.map((specialty, idx) => (
            <div
              key={specialty.id}
              className={`bg-white rounded-2xl border border-slate-200 hover:border-teal-600/60 transition-all p-6 flex flex-col justify-between shadow-xs hover:shadow-md ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-slate-50 to-white' : ''
              }`}
            >
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
                    {specialty.category === 'joint' ? 'Featured Marquee Department' : specialty.tagline}
                  </div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                    {specialty.name}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {specialty.description}
                </p>

                {/* Common Conditions Treated */}
                <div className="space-y-2 pt-1">
                  <div className="text-xs font-semibold text-slate-700">Conditions Treated:</div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                    {specialty.commonConditions.slice(0, 4).map((cond, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                        <span className="truncate">{cond}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recovery Preview */}
                <div className="p-3 rounded-lg bg-teal-50/60 border border-teal-100 flex items-start gap-2 text-xs text-teal-900">
                  <Clock className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Typical Recovery: </span>
                    <span>{specialty.recoveryTimeline}</span>
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <button
                  onClick={() => setSelectedSpecialty(specialty)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:text-teal-950 cursor-pointer"
                >
                  <span>View Procedures & Protocols</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectSpecialtyForBooking(specialty.name)}
                  className="px-3 py-1.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specialty Detail Drawer/Modal */}
      {selectedSpecialty && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
          <div className="bg-white rounded-2xl border border-slate-200 max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6">
            <button
              onClick={() => setSelectedSpecialty(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
                Specialty Clinical Protocol
              </div>
              <h3 className="font-display text-2xl font-bold text-slate-900 mt-1">
                {selectedSpecialty.name}
              </h3>
              <p className="text-sm text-slate-500 mt-0.5">{selectedSpecialty.tagline}</p>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              {selectedSpecialty.description}
            </p>

            {/* List of Procedures */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-teal-700" />
                <span>Specialized Surgical & Clinical Procedures</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {selectedSpecialty.procedures.map((proc, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{proc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hospital Advantage */}
            <div className="p-4 rounded-xl bg-teal-50 border border-teal-200/80 space-y-1.5">
              <div className="text-xs font-bold text-teal-900 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>The Vishnu Priya Hospital Standard</span>
              </div>
              <p className="text-xs text-teal-800 leading-relaxed">
                {selectedSpecialty.hospitalAdvantage}
              </p>
            </div>

            {/* Recovery Pathway */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-700" />
                <span>Expected Recovery & Ambulation Pathway</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {selectedSpecialty.recoveryTimeline}
              </p>
            </div>

            {/* Modal CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-end gap-3 border-t border-slate-100">
              <button
                onClick={() => setSelectedSpecialty(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const specName = selectedSpecialty.name;
                  setSelectedSpecialty(null);
                  onSelectSpecialtyForBooking(specName);
                }}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Consultation for this Specialty</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
