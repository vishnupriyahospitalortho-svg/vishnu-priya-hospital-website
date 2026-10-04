import React from 'react';
import { PATIENT_STORIES } from '../data/hospitalData';
import { Star, CheckCircle, Quote, ArrowUpRight } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Anti-Slop Unboxed Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
              <span>Patient Clinical Outcomes</span>
              <span aria-hidden="true">·</span>
              <span>Verified Local Experiences</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
              Real Recovery Journeys from Our Patients
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              From restoring joint mobility in elderly grandmothers to rebuilding limbs after complex highway collisions. Here is how our patients reclaimed their independence.
            </p>
          </div>

          {/* Social Proof Metric Callout */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 shrink-0 shadow-xs">
            <div className="flex items-center gap-1 text-amber-500 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="font-display text-2xl font-bold text-slate-900 tabular-nums">
              5.0 / 5.0
            </div>
            <div className="text-xs text-slate-500">
              Verified Justdial & Google Rating
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PATIENT_STORIES.map((story) => (
            <div
              key={story.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all space-y-6"
            >
              <div className="space-y-4">
                <Quote className="w-7 h-7 text-teal-700/30" />
                
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{story.quote}"
                </p>

                {/* Clinical Proof Box */}
                <div className="p-3 rounded-lg bg-teal-50/70 border border-teal-100 space-y-1 text-xs">
                  <div className="font-semibold text-teal-950 flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                    <span>Clinical Outcome:</span>
                  </div>
                  <div className="text-teal-900 font-medium">
                    {story.recoveryOutcome}
                  </div>
                </div>

                <div className="text-xs text-slate-500 space-y-0.5 pt-1">
                  <div>
                    <span className="font-semibold text-slate-700">Diagnosis: </span>
                    <span>{story.condition}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Procedure: </span>
                    <span>{story.treatment}</span>
                  </div>
                </div>
              </div>

              {/* Patient Attribution */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-slate-900">{story.patientName}</div>
                  <div className="text-slate-500">{story.age} yrs · {story.city}, Telangana</div>
                </div>
                <div className="text-right text-[11px] text-teal-800 font-semibold">
                  Treated by {story.doctor}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
