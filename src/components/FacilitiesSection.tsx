import React, { useState } from 'react';
import { FACILITIES } from '../data/hospitalData';
import { HospitalImages } from '../assets/images';
import { CheckCircle2, Shield, Activity, Sparkles } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(FACILITIES[0].id);

  const getImageSrc = (imageKey: string) => {
    switch (imageKey) {
      case 'modular_operation_theatre':
        return HospitalImages.modularOT;
      case 'physiotherapy_rehab_center':
        return HospitalImages.physioRehab;
      case 'advanced_joint_ortho_care':
        return HospitalImages.jointCareDesk;
      default:
        return HospitalImages.heroExterior;
    }
  };

  const currentFacility = FACILITIES.find(f => f.id === activeTab) || FACILITIES[0];

  return (
    <section id="facilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Anti-Slop Unboxed Editorial Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
            <span>Hospital Infrastructure & Safety</span>
            <span aria-hidden="true">·</span>
            <span>Ultra-Clean Surgical Standards</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            World-Class Surgical Theatres & Diagnostic Facilities
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Designed to minimize surgical site infections and facilitate rapid recovery. Every piece of equipment at Vishnu Priya Hospital matches contemporary hospital benchmarks.
          </p>
        </div>

        {/* Facility Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 border-b border-slate-200">
          {FACILITIES.map((facility) => {
            const isActive = facility.id === activeTab;
            return (
              <button
                key={facility.id}
                onClick={() => setActiveTab(facility.id)}
                className={`pb-3 px-3 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap border-b-2 cursor-pointer ${
                  isActive
                    ? 'border-teal-700 text-teal-900'
                    : 'border-transparent text-slate-500 hover:text-slate-900'
                }`}
              >
                {facility.title}
              </button>
            );
          })}
        </div>

        {/* Selected Facility Presentation */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Image */}
            <div className="lg:col-span-6 relative min-h-[320px] lg:min-h-[440px]">
              <img
                src={getImageSrc(currentFacility.imageKey)}
                alt={currentFacility.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <div className="font-display text-lg font-bold">{currentFacility.title}</div>
                <div className="text-xs text-teal-300">{currentFacility.subtitle}</div>
              </div>
            </div>

            {/* Description & Technical Points */}
            <div className="lg:col-span-6 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="hidden lg:block">
                  <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
                    {currentFacility.subtitle}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                    {currentFacility.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {currentFacility.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs uppercase tracking-wider font-semibold text-slate-900 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-teal-700" />
                    <span>Infection Control & Equipment Highlights:</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {currentFacility.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200/80">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Safety Badge */}
              <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 text-teal-800 font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                  <span>Class 10,000 Zero-Bacterial Filtration</span>
                </span>
                <span>Audit Verified 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
