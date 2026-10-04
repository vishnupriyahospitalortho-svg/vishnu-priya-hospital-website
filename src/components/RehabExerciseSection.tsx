import React, { useState, useEffect } from 'react';
import { REHAB_EXERCISES, RehabExercise } from '../data/hospitalData';
import { Play, Pause, RotateCcw, CheckCircle, AlertTriangle, Clock, Activity } from 'lucide-react';

export const RehabExerciseSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'knee' | 'shoulder' | 'spine'>('knee');
  const [activeExerciseId, setActiveExerciseId] = useState<string>(REHAB_EXERCISES[0].id);

  // Timer states
  const [timeLeft, setTimeLeft] = useState<number>(REHAB_EXERCISES[0].durationSeconds);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [repsDone, setRepsDone] = useState<number>(0);

  const filteredExercises = REHAB_EXERCISES.filter(ex => ex.category === selectedCategory);
  const currentExercise = REHAB_EXERCISES.find(ex => ex.id === activeExerciseId) || filteredExercises[0];

  // When changing exercise, reset timer
  const handleSelectExercise = (exercise: RehabExercise) => {
    setActiveExerciseId(exercise.id);
    setTimeLeft(exercise.durationSeconds);
    setIsTimerRunning(false);
    setRepsDone(0);
  };

  // Timer countdown hook
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTimerRunning) {
      setIsTimerRunning(false);
      setRepsDone(prev => prev + 1);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timeLeft]);

  const toggleTimer = () => {
    if (timeLeft === 0) {
      setTimeLeft(currentExercise.durationSeconds);
      setIsTimerRunning(true);
    } else {
      setIsTimerRunning(!isTimerRunning);
    }
  };

  const resetTimer = () => {
    setIsTimerRunning(false);
    setTimeLeft(currentExercise.durationSeconds);
  };

  return (
    <section id="rehab" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Anti-Slop Unboxed Editorial Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-800 uppercase tracking-wider mb-2">
            <span>Physiotherapy & Recovery Protocols</span>
            <span aria-hidden="true">·</span>
            <span>Evidence-Based Rehabilitation</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight text-balance">
            Interactive Orthopaedic Recovery Guide
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            Essential post-operative and non-surgical mobility routines designed by our clinical physiotherapy department. Use the interactive rep timer to pace your daily sessions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 p-1.5 bg-slate-200/70 rounded-xl w-fit">
          <button
            onClick={() => {
              setSelectedCategory('knee');
              const firstKnee = REHAB_EXERCISES.find(e => e.category === 'knee');
              if (firstKnee) handleSelectExercise(firstKnee);
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'knee'
                ? 'bg-white text-teal-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Knee & Leg Rehab
          </button>
          <button
            onClick={() => {
              setSelectedCategory('shoulder');
              const firstShoulder = REHAB_EXERCISES.find(e => e.category === 'shoulder');
              if (firstShoulder) handleSelectExercise(firstShoulder);
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'shoulder'
                ? 'bg-white text-teal-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Shoulder Joint
          </button>
          <button
            onClick={() => {
              setSelectedCategory('spine');
              const firstSpine = REHAB_EXERCISES.find(e => e.category === 'spine');
              if (firstSpine) handleSelectExercise(firstSpine);
            }}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              selectedCategory === 'spine'
                ? 'bg-white text-teal-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Spine & Lower Back
          </button>
        </div>

        {/* Grid Layout: Left Exercise List, Right Active Timer & Guide */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Exercises List */}
          <div className="lg:col-span-5 space-y-3">
            {filteredExercises.map((exercise) => {
              const isSelected = exercise.id === currentExercise.id;
              return (
                <div
                  key={exercise.id}
                  onClick={() => handleSelectExercise(exercise)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-white border-teal-700 shadow-sm'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-teal-700">
                      {exercise.difficulty}
                    </span>
                    <span className="text-xs text-slate-500 tabular-nums">
                      {exercise.durationSeconds}s / set
                    </span>
                  </div>
                  <h4 className="font-display text-base font-bold text-slate-900 mt-1">
                    {exercise.name}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 line-clamp-2">
                    {exercise.target}
                  </p>
                  <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-100 text-xs text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exercise.frequency}</span>
                    <span aria-hidden="true">·</span>
                    <span>{exercise.repsRecommended}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Exercise Detail & Interactive Practice Timer */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
                  Active Exercise Focus
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900 mt-0.5">
                  {currentExercise.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Target: {currentExercise.target}
                </p>
              </div>

              {/* Reps Completed Counter */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-center shrink-0">
                <div className="text-xs text-slate-500 font-medium">Sets Completed</div>
                <div className="font-display text-xl font-bold text-teal-800 tabular-nums">
                  {repsDone}
                </div>
              </div>
            </div>

            {/* Interactive Countdown Timer */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 text-white text-center space-y-4 shadow-inner">
              <div className="text-xs uppercase tracking-wider text-teal-300 font-medium flex items-center justify-center gap-1.5">
                <Activity className="w-4 h-4 text-teal-400" />
                <span>Exercise Hold & Pacing Timer</span>
              </div>

              <div className="font-display text-5xl sm:text-6xl font-bold tabular-nums tracking-tight">
                {String(Math.floor(timeLeft / 60)).padStart(2, '0')}:
                {String(timeLeft % 60).padStart(2, '0')}
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={toggleTimer}
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 transition-colors shadow-sm cursor-pointer"
                >
                  {isTimerRunning ? (
                    <>
                      <Pause className="w-4 h-4" />
                      <span>Pause Timer</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4" />
                      <span>{timeLeft === 0 ? 'Start Next Rep' : 'Start Timer'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={resetTimer}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>

              {timeLeft === 0 && (
                <div className="text-xs text-teal-300 font-medium animate-pulse">
                  Set completed! Great job. Rest for 10 seconds, then start the next rep.
                </div>
              )}
            </div>

            {/* Step-by-Step Instructions */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-teal-700" />
                <span>Execution Technique:</span>
              </h4>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-600">
                {currentExercise.instructions.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="font-bold text-teal-800 shrink-0 tabular-nums">
                      {idx + 1}.
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Precautions */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/80 space-y-1.5">
              <div className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-amber-700" />
                <span>Clinical Precaution & Safety:</span>
              </div>
              <ul className="text-xs text-amber-800 space-y-1">
                {currentExercise.precautions.map((prec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-amber-600 shrink-0 mt-1.5" />
                    <span>{prec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
