"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const episodes = Array.from({ length: 30 }, (_, i) => {
  const chapter = i < 10 ? 1 : i < 20 ? 2 : 3;
  return dynamic(() => import(`./episodes/chapter${chapter}/Episode${i + 1}`), {
    ssr: false,
    loading: () => <div className="text-[#00f2ff] animate-pulse p-10 font-mono">SYNCING_DATA_STREAM...</div>
  });
});

export default function GameController() {
  const [currentStep, setCurrentStep] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [hasSavedProgress, setHasSavedProgress] = useState(false);

  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("on_chain_journey_progress");
    if (saved) {
      setHasSavedProgress(true);
      setCurrentStep(parseInt(saved, 10));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("on_chain_journey_progress", currentStep.toString());
    }
  }, [currentStep, mounted]);

  const startNewGame = () => {
    localStorage.removeItem("on_chain_journey_progress");
    setCurrentStep(0);
    setGameStarted(true);
  };

  if (!mounted) return null;

  const ActiveEpisode = episodes[currentStep];

  return (
    <div className="relative w-full h-screen bg-[#050505] text-white font-mono flex flex-col items-center justify-center p-6">
      {!gameStarted ? (
        <div className="text-center">
          <h1 className="text-4xl font-black text-[#00f2ff] mb-2 tracking-[0.2em]">ON-CHAIN</h1>
          <h2 className="text-xl text-[#ff00ff] uppercase opacity-80 tracking-[0.5em] mb-6">30 Day Journey</h2>
          <p className="text-[10px] opacity-60 mb-4">Master the protocols of the new internet.</p>
          <p className="text-[10px] opacity-60 mb-8">3 Chapters. 30 Challenges. Full Sovereignty.</p>

          {hasSavedProgress ? (
            <>
              <button
                onClick={() => setGameStarted(true)}
                className="px-12 py-4 bg-[#00f2ff] text-black font-bold uppercase tracking-widest mb-2"
              >
                Resume Protocol (Day {currentStep + 1})
              </button>
              <button
                onClick={startNewGame}
                className="text-[9px] uppercase tracking-[0.3em] text-white/30 hover:text-red-500 transition-colors"
              >
                Wipe Data & Restart
              </button>
            </>
          ) : (
            <button
              onClick={() => setGameStarted(true)}
              className="px-12 py-4 border-2 border-[#00f2ff] text-[#00f2ff] font-bold uppercase tracking-widest"
            >
              Initialize Protocol
            </button>
          )}
        </div>
      ) : (
        <div className="w-full max-w-xl flex flex-col items-center gap-6">
          <ActiveEpisode onComplete={() => setCurrentStep(s => Math.min(s + 1, 29))} />

          <div className="flex justify-between w-full mt-8">
            <button
              onClick={() => setCurrentStep(s => Math.max(0, s - 1))}
              className="text-white/30 hover:text-white text-[10px] uppercase px-4 py-2"
            >
              Back
            </button>

            <div className="flex gap-1 items-center">
              {Array.from({ length: 30 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1 transition-all duration-500 ${i === currentStep ? 'bg-[#00f2ff] w-6' : i < currentStep ? 'bg-[#ff00ff] w-2' : 'bg-white/10 w-2'}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentStep(s => Math.min(29, s + 1))}
              className="text-white/30 hover:text-white text-[10px] uppercase px-4 py-2"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
