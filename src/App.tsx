import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DoctorSection } from './components/DoctorSection';
import { SpecialtiesSection } from './components/SpecialtiesSection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { RehabExerciseSection } from './components/RehabExerciseSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { InsuranceSection } from './components/InsuranceSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { EmergencyModal } from './components/EmergencyModal';
import { KneeAssessmentModal } from './components/KneeAssessmentModal';
import { Phone, Calendar, Activity } from 'lucide-react';
import { HOSPITAL_INFO } from './data/hospitalData';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isEmergencyOpen, setIsEmergencyOpen] = useState(false);
  const [isKneeAssessmentOpen, setIsKneeAssessmentOpen] = useState(false);

  const [bookingSpecialty, setBookingSpecialty] = useState<string | undefined>(undefined);
  const [bookingNote, setBookingNote] = useState<string | undefined>(undefined);

  const handleOpenAppointmentGeneral = () => {
    setBookingSpecialty(undefined);
    setBookingNote(undefined);
    setIsAppointmentOpen(true);
  };

  const handleSelectSpecialtyForBooking = (specialtyName: string) => {
    setBookingSpecialty(specialtyName);
    setBookingNote(`Inquiring for ${specialtyName}`);
    setIsAppointmentOpen(true);
  };

  const handleBookWithScore = (score: number, level: string) => {
    setBookingSpecialty('Joint Replacement Surgery (Arthroplasty)');
    setBookingNote(`Completed Online Knee Assessment: Score ${score}/15 (${level}). Requesting clinical evaluation with Dr. Naresh.`);
    setIsAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-teal-700 selection:text-white">
      {/* Strict 3-Zone Top Navigation */}
      <Navbar
        onOpenAppointment={handleOpenAppointmentGeneral}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpenKneeAssessment={() => setIsKneeAssessmentOpen(true)}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenAppointment={handleOpenAppointmentGeneral}
          onOpenEmergency={() => setIsEmergencyOpen(true)}
          onOpenKneeAssessment={() => setIsKneeAssessmentOpen(true)}
        />

        {/* Chief Surgeon Spotlight */}
        <DoctorSection
          onOpenAppointment={handleOpenAppointmentGeneral}
        />

        {/* Clinical Specialties & Procedures */}
        <SpecialtiesSection
          onSelectSpecialtyForBooking={handleSelectSpecialtyForBooking}
        />

        {/* High-Tech Hospital Infrastructure & Modular OT */}
        <FacilitiesSection />

        {/* Guided Physiotherapy & Rehab Interactive Exercises */}
        <RehabExerciseSection />

        {/* Real Patient Recovery Journeys */}
        <TestimonialsSection />

        {/* Cashless Insurance & TPA Desk */}
        <InsuranceSection />

        {/* Hospital Location, Contacts & OPD Timings */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenAppointment={handleOpenAppointmentGeneral}
        onOpenEmergency={() => setIsEmergencyOpen(true)}
        onOpenKneeAssessment={() => setIsKneeAssessmentOpen(true)}
      />

      {/* Floating Quick Action Pill for Mobile Viewport (Kept within 15% sticky cap) */}
      <div className="fixed bottom-4 right-4 z-30 lg:hidden flex flex-col gap-2">
        <button
          onClick={() => setIsEmergencyOpen(true)}
          className="p-3 bg-rose-700 text-white rounded-full shadow-lg hover:bg-rose-800 transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Emergency Call"
        >
          <Phone className="w-5 h-5 animate-pulse" />
        </button>
        <button
          onClick={handleOpenAppointmentGeneral}
          className="p-3 bg-teal-800 text-white rounded-full shadow-lg hover:bg-teal-900 transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Book Appointment"
        >
          <Calendar className="w-5 h-5" />
        </button>
      </div>

      {/* Interactive Modals */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preSelectedSpecialty={bookingSpecialty}
        preFilledAssessmentNote={bookingNote}
      />

      <EmergencyModal
        isOpen={isEmergencyOpen}
        onClose={() => setIsEmergencyOpen(false)}
      />

      <KneeAssessmentModal
        isOpen={isKneeAssessmentOpen}
        onClose={() => setIsKneeAssessmentOpen(false)}
        onBookWithScore={handleBookWithScore}
      />
    </div>
  );
}
