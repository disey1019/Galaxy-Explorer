/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Rocket, 
  Settings, 
  X, 
  CheckCircle2, 
  Trophy, 
  Timer, 
  HelpCircle,
  ChevronRight,
  Radio,
  Satellite,
  Network,
  Waves,
  Zap,
  Telescope,
  Sun,
  Check
} from 'lucide-react';
import { QUIZ_DATA, QuizQuestion } from './data';

export default function App() {
  const [completedMissions, setCompletedMissions] = useState<number[]>(() => {
    const saved = localStorage.getItem('galaxy_missions');
    return saved ? JSON.parse(saved) : [];
  });
  const [activeQuiz, setActiveQuiz] = useState<QuizQuestion | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState<'success' | 'error' | null>(null);
  const [showFinalModal, setShowFinalModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('galaxy_missions', JSON.stringify(completedMissions));
    if (completedMissions.length === QUIZ_DATA.length) {
      setShowFinalModal(true);
    }
  }, [completedMissions]);

  const handleMissionClick = (quiz: QuizQuestion) => {
    if (completedMissions.includes(quiz.id)) return;
    setActiveQuiz(quiz);
    setSelectedOption(null);
  };

  const handleOptionSelect = (index: number) => {
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (activeQuiz === null || selectedOption === null) return;

    if (selectedOption === activeQuiz.correctAnswer) {
      setShowFeedback('success');
      setTimeout(() => {
        setCompletedMissions(prev => [...prev, activeQuiz.id]);
        setActiveQuiz(null);
        setShowFeedback(null);
      }, 1500);
    } else {
      setShowFeedback('error');
      setTimeout(() => {
        setShowFeedback(null);
      }, 1500);
    }
  };

  const resetGame = () => {
    setCompletedMissions([]);
    setShowFinalModal(false);
    localStorage.removeItem('galaxy_missions');
  };

  return (
    <div className="min-h-screen bg-surface text-white font-sans overflow-hidden relative bg-star-pattern">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 glass-panel border-b border-outline-variant px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <Rocket className="text-primary w-6 h-6" />
          <h1 className="font-headline font-bold tracking-widest uppercase text-sm text-primary">
            Galaxy Explorer
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex flex-col items-end">
            <span className="text-[10px] font-headline uppercase tracking-widest text-white/40">任務進度</span>
            <span className="text-xs font-headline text-primary font-bold">
              {completedMissions.length} / {QUIZ_DATA.length}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content: Star Map */}
      <main className="pt-20 h-screen w-full relative flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 flex items-center justify-center">
          <img 
            src="https://lh3.googleusercontent.com/aida/ADBb0uiIR5muSqgiqjvxiflQhMGIDR5oQQo9pK8fuvC6HAV7pdXupfxhSMcuSZ5eIxb443q-Ikl4x8NE0_x9i38RL_ASPxl2Iz5JV8qsTg00D77uUsIU8UagGFN6iXXISad-l6vP1_jGcV1URqQKmnN0Aezo4TakBsU1Jgi7IGjjmyYuCeGNwgyp8SKcpHW2RF-MJHJUJ31CV5MXpgOcQ3R7IW8nl90L8LnPIKFTyTaGLA0WRkP0fA0NVh3tngcHDgtddkJtkocfASrX" 
            alt="Milky Way Map" 
            className="max-w-full max-h-full object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface via-transparent to-surface opacity-80" />
        </div>

        {/* Interactive Nodes */}
        <div className="relative w-full max-w-2xl aspect-square z-10">
          {QUIZ_DATA.map((quiz, index) => {
            const positions = [
              { top: '15%', left: '25%' },
              { top: '35%', right: '15%' },
              { bottom: '25%', left: '10%' },
              { top: '60%', right: '30%' },
              { bottom: '10%', right: '20%' },
              { top: '5%', right: '40%' },
              { bottom: '40%', left: '45%' },
            ];
            const icons = [
              <Rocket className="w-6 h-6" />,
              <Satellite className="w-6 h-6" />,
              <Network className="w-6 h-6" />,
              <Waves className="w-6 h-6" />,
              <Zap className="w-6 h-6" />,
              <Telescope className="w-6 h-6" />,
              <Sun className="w-6 h-6" />,
            ];
            const isCompleted = completedMissions.includes(quiz.id);

            return (
              <motion.button
                key={quiz.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleMissionClick(quiz)}
                style={positions[index]}
                className="absolute group flex flex-col items-center gap-2"
              >
                <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                  isCompleted 
                    ? 'bg-primary border-primary shadow-[0_0_20px_rgba(34,211,238,0.5)]' 
                    : 'bg-surface-container-high/80 border-primary/20 hover:border-primary/50 hover:bg-surface-container-highest shadow-lg backdrop-blur-md'
                }`}>
                  {isCompleted ? (
                    <Check className="w-6 h-6 text-on-primary" />
                  ) : (
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {icons[index]}
                    </div>
                  )}
                </div>
                <span className="text-[10px] font-headline font-bold uppercase tracking-widest bg-surface/60 backdrop-blur-md px-2 py-0.5 rounded text-white/80 group-hover:text-primary transition-colors">
                  {quiz.title}
                </span>
              </motion.button>
            );
          })}
        </div>
      </main>

      {/* Quiz Modal */}
      <AnimatePresence>
        {activeQuiz && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          >
            <div className="absolute inset-0 bg-surface/90 backdrop-blur-xl" onClick={() => setActiveQuiz(null)} />
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl glass-panel rounded-3xl border border-outline-variant overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header Image */}
              <div className="relative h-48 md:h-64 w-full">
                <img 
                  src={activeQuiz.image} 
                  alt={activeQuiz.title} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                <button 
                  onClick={() => setActiveQuiz(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-surface/40 backdrop-blur-md flex items-center justify-center hover:bg-surface/60 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="absolute bottom-4 left-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
                    <span className="font-headline font-bold text-on-primary">{activeQuiz.id + 1}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-headline uppercase tracking-[0.2em] text-primary/80">任務等級</span>
                    <h2 className="text-xl font-headline font-bold leading-none">{activeQuiz.missionType}</h2>
                  </div>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-8 md:p-10 overflow-y-auto max-h-[60vh]">
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-4">
                    <HelpCircle className="w-4 h-4 text-primary" />
                    <span className="text-[11px] font-headline uppercase tracking-widest text-white/40">題目 01 / 01</span>
                  </div>
                  <p className="text-lg md:text-xl font-medium leading-relaxed">
                    {activeQuiz.question}
                    {activeQuiz.locationHint && (
                      <span className="block mt-2 text-sm text-yellow-500 font-bold">
                        ({activeQuiz.locationHint})
                      </span>
                    )}
                  </p>
                </div>

                <div className="space-y-3">
                  {activeQuiz.options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleOptionSelect(idx)}
                      className={`w-full flex items-center p-4 rounded-xl border transition-all duration-300 group text-left ${
                        selectedOption === idx 
                          ? 'bg-primary/10 border-primary shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
                          : 'bg-surface-container-low border-outline-variant/30 hover:border-primary/40 hover:bg-surface-container-high'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold font-headline mr-4 transition-colors ${
                        selectedOption === idx ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-white/40 group-hover:text-primary'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </div>
                      <span className={`flex-1 font-medium ${selectedOption === idx ? 'text-primary' : 'text-white/80'}`}>
                        {option}
                      </span>
                      {selectedOption === idx && (
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      )}
                    </button>
                  ))}
                </div>

                <div className="mt-10">
                  <button 
                    disabled={selectedOption === null}
                    onClick={handleSubmit}
                    className="w-full py-4 rounded-xl bg-primary text-on-primary font-headline font-bold uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none"
                  >
                    送出
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback Overlay */}
      <AnimatePresence>
        {showFeedback && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-[110] flex items-center justify-center pointer-events-none"
          >
            <div className={`px-8 py-6 rounded-2xl shadow-2xl font-headline font-extrabold text-2xl tracking-tighter flex items-center gap-4 ${
              showFeedback === 'success' ? 'bg-primary text-on-primary' : 'bg-red-500 text-white'
            }`}>
              {showFeedback === 'success' ? (
                <>
                  <CheckCircle2 className="w-8 h-8" />
                  任務達成！
                </>
              ) : (
                <>
                  <X className="w-8 h-8" />
                  數據校準中... 請再試一次
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Final Completion Modal */}
      <AnimatePresence>
        {showFinalModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[120] bg-surface flex flex-col items-center justify-center p-8 text-center"
          >
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3OWVJKn6PUsQ6sccFjJn0KGb2C0abJfpqiWNBg6loc5mW_0izrxUl7FQjGpqa3VV9kB_YMToiVoAi5PSdmnT6HffZ5bXDWBxE33ddATnBYDJX8pwF-8y1Fa8ez0tiuzAl9siJu_hHLQDuWj3Q8W21kWW2ninuzSISmCwOqzPZREmhJTvsa4fX9uLbfdRMiBS2TzPFMSSFeXfFl1orZLefFgMyPHunpUSsvqp-iDL8z5PSS7Enx0otI94FjzlM-GQuSlts0fKAWSY" 
                alt="Nebula" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="relative z-10 max-w-sm"
            >
              <div className="w-24 h-24 bg-primary rounded-full mx-auto flex items-center justify-center shadow-[0_0_50px_rgba(34,211,238,0.5)] mb-8">
                <Trophy className="w-12 h-12 text-on-primary" />
              </div>
              <h2 className="text-4xl font-headline font-black text-white mb-6 uppercase tracking-tighter leading-none">
                任務達成
              </h2>
              <p className="text-white/60 font-sans text-lg leading-relaxed mb-10">
                恭喜您完成所有太空探索任務！<br/>
                請憑此畫面至服務台兌換精美小禮物一份。
              </p>
              <button 
                onClick={resetGame}
                className="px-8 py-4 bg-surface-container-highest text-primary font-headline font-bold rounded-xl border border-primary/30 hover:bg-primary/10 transition-colors uppercase tracking-widest"
              >
                重新開始探索
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Decorative HUD Elements */}
      <div className="fixed top-1/2 -right-4 -translate-y-1/2 flex flex-col gap-8 opacity-20 pointer-events-none select-none">
        <div className="w-8 h-[200px] border-r border-t border-b border-primary rounded-r-3xl" />
      </div>
      <div className="fixed top-1/4 -left-4 flex flex-col gap-8 opacity-20 pointer-events-none select-none">
        <div className="w-12 h-12 border border-primary rounded-full rotate-45" />
      </div>
    </div>
  );
}
