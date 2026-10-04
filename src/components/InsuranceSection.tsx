import React from 'react';
import { INSURANCE_PARTNERS } from '../data/hospitalData';
import { ShieldCheck, FileCheck, PhoneCall, CheckCircle2 } from 'lucide-react';

export const InsuranceSection: React.FC = () => {
  return (
    <section id="insurance" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Info */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
                <span>Hassle-Free Hospitalization</span>
                <span aria-hidden="true">·</span>
                <span>Dedicated TPA Desk</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
                Cashless Health Insurance & Aarogyasri Support
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              We understand that medical emergencies and planned joint surgeries require seamless financial facilitation. Our on-site Insurance Helpdesk assists you with immediate pre-authorization documentation, claim settlement, and cashless approvals.
            </p>

            {/* 3 Step Cashless Process */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="w-6 h-6 rounded-full bg-teal-800 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  1
                </span>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Pre-Authorization Submission</div>
                  <div className="text-slate-600 mt-0.5">Submit your insurance card and government ID at our TPA desk during admission.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="w-6 h-6 rounded-full bg-teal-800 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  2
                </span>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Fast-Track Insurer Approval</div>
                  <div className="text-slate-600 mt-0.5">Our hospital insurance coordinator liaises directly with your TPA for initial cashless sanction.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                <span className="w-6 h-6 rounded-full bg-teal-800 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  3
                </span>
                <div className="text-xs">
                  <div className="font-bold text-slate-900">Smooth Cashless Discharge</div>
                  <div className="text-slate-600 mt-0.5">Upon final bill clearance by the insurance company, walk out with complete peace of mind.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Partners Grid */}
          <div className="lg:col-span-6 bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-teal-700" />
                <h3 className="font-display text-lg font-bold text-slate-900">
                  Supported TPAs & Insurers
                </h3>
              </div>
              <span className="text-xs text-slate-500">24/7 Desk Verification</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {INSURANCE_PARTNERS.map((partner, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span className="truncate">{partner}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-teal-50 border border-teal-200 text-xs text-teal-900 flex items-start gap-3">
              <FileCheck className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Required Documents for Cashless Admission: </span>
                <span>Health Insurance Policy e-card, Aadhaar Card, Pan Card, and primary consultation doctor's advice note.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
