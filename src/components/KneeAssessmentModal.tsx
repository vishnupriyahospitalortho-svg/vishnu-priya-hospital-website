import React, { useState } from 'react';
import { X, ArrowRight, ArrowLeft, Activity, AlertCircle, CheckCircle2, RotateCcw, Calendar } from 'lucide-react';
import { KNEE_ASSESSMENT_QUESTIONS } from '../data/hospitalData';

interface KneeAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookWithScore: (score: number, level: string) => void;
}

export const KneeAssessmentModal: React.FC<KneeAssessmentModalProps> = ({
  isOpen,
  onClose,
  onBookWithScore,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  if (!isOpen) return null;

  const totalQuestions = KNEE_ASSESSMENT_QUESTIONS.length;
  const currentQ = KNEE_ASSESSMENT_QUESTIONS[currentStep];

  const handleSelectOption = (points: number) => {
    const updatedAnswers = { ...answers, [currentQ.id]: points };
    setAnswers(updatedAnswers);

    if (currentStep < totalQuestions - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCompleted(false);
  };

  // Calculate total score
  const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);

  // Determine clinical risk level
  let assessmentResult = {
    level: "Mild Knee Strain / Early Wear",
    severity: "low",
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    badgeColor: "bg-emerald-600",
    description: "Your responses suggest mild cartilage wear or temporary joint strain. Most symptoms at this stage respond exceptionally well to focused quadriceps strengthening, weight management, and ergonomic posture adjustments.",
    recommendedActions: [
      "Engage in low-impact exercises (cycling, swimming, gentle walking)",
      "Daily quadriceps and hamstring stretches",
      "Avoid prolonged deep squatting or cross-legged sitting on the floor",
      "Schedule a routine preventive orthopedic evaluation if symptoms persist past 2 weeks"
    ]
  };

  if (totalScore >= 9) {
    assessmentResult = {
      level: "Severe Osteoarthritis / Advanced Cartilage Degeneration",
      severity: "high",
      color: "text-rose-800 bg-rose-50 border-rose-200",
      badgeColor: "bg-rose-600",
      description: "Your score indicates significant functional impairment, severe cartilage wear, and night pain. This is characteristic of advanced Stage 3 or 4 osteoarthritis or structural joint damage.",
      recommendedActions: [
        "Immediate clinical consultation with Chief Surgeon Dr. Naresh Odnala",
        "High-definition digital weight-bearing bilateral knee X-rays",
        "Discussion of surgical candidacy: High-Flexion Total Knee Replacement (TKR)",
        "Fast-track pain relief protocols to restore sleep and independent mobility"
      ]
    };
  } else if (totalScore >= 4) {
    assessmentResult = {
      level: "Moderate Joint Degeneration / Cartilage Wear",
      severity: "moderate",
      color: "text-amber-800 bg-amber-50 border-amber-200",
      badgeColor: "bg-amber-600",
      description: "Your responses indicate moderate degenerative joint wear with notable stair difficulty and morning stiffness. Timely clinical intervention can prevent further progressive cartilage loss.",
      recommendedActions: [
        "Clinical evaluation & standing digital X-ray scan at Vishnu Priya Hospital",
        "Supervised physiotherapy regimen at our rehabilitation department",
        "Evaluation for joint-preserving therapies (PRP regenerative injections or viscosupplementation)",
        "Unloader knee brace and anti-inflammatory management"
      ]
    };
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-2xl border border-slate-200 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-slate-900">
                Knee Joint Health Evaluator
              </h3>
              <p className="text-xs text-slate-500">
                Evidence-based functional symptom screener
              </p>
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

        {!isCompleted ? (
          <div className="space-y-6">
            {/* Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Question {currentStep + 1} of {totalQuestions}</span>
                <span className="tabular-nums">{Math.round(((currentStep + 1) / totalQuestions) * 100)}%</span>
              </div>
              <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-teal-700 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Card */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-slate-900 leading-snug">
                {currentQ.question}
              </h4>

              <div className="space-y-2.5">
                {currentQ.options.map((option, idx) => {
                  const isSelected = answers[currentQ.id] === option.points;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(option.points)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs sm:text-sm font-medium flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-teal-700 bg-teal-50/70 text-teal-950 font-semibold shadow-xs'
                          : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span className="pr-4">{option.text}</span>
                      <span className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center shrink-0">
                        {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-teal-700" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handlePrev}
                disabled={currentStep === 0}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 disabled:opacity-30 disabled:cursor-not-allowed hover:text-slate-900"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Previous</span>
              </button>

              <button
                onClick={handleReset}
                className="text-xs text-slate-400 hover:text-slate-600"
              >
                Reset
              </button>
            </div>
          </div>
        ) : (
          /* Results Card */
          <div className="space-y-6">
            <div className={`p-4 rounded-xl border ${assessmentResult.color} space-y-2`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider">
                  Assessment Outcome
                </span>
                <span className="text-xs font-bold tabular-nums">
                  Score: {totalScore} / 15
                </span>
              </div>
              <h4 className="font-display text-lg font-bold">
                {assessmentResult.level}
              </h4>
              <p className="text-xs leading-relaxed opacity-95">
                {assessmentResult.description}
              </p>
            </div>

            {/* Recommended Clinical Next Steps */}
            <div className="space-y-2.5">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-700" />
                <span>Clinical Recommendations:</span>
              </h5>
              <ul className="space-y-2 text-xs text-slate-700">
                {assessmentResult.recommendedActions.map((action, i) => (
                  <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Medical Disclaimer */}
            <div className="flex items-start gap-2 text-xs text-slate-500 bg-slate-100/70 p-3 rounded-lg">
              <AlertCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
              <span>
                Note: This online assessment is a clinical screening guide and does not replace in-person physical examination and radiographic diagnostic imaging by an orthopedic surgeon.
              </span>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100">
              <button
                onClick={handleReset}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Assessment</span>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onBookWithScore(totalScore, assessmentResult.level);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-teal-800 hover:bg-teal-900 rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Slot with Dr. Naresh</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
