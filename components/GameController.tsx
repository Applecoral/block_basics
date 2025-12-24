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

  // 1. Mount Logic: Load A-Frame and check for existing save
  useEffect(() => {
    setMounted(true);
    
    const saved = localStorage.getItem("on_chain_journey_progress");
    if (saved) {
      setHasSavedProgress(true);
      setCurrentStep(parseInt(saved, 10));
    }

    const script = document.createElement("script");
    script.src = "https://aframe.io/releases/1.6.0/aframe.min.js";
    document.head.appendChild(script);
  }, []);

  // 2. Auto-Save Logic: Runs whenever currentStep changes
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

  const resumeGame = () => {
    setGameStarted(true);
  };

  if (!mounted) return null;

  const ActiveEpisode = episodes[currentStep];
  const chapterNumber = currentStep < 10 ? 1 : currentStep < 20 ? 2 : 3;

  return (
    <div className="relative w-full h-screen bg-[#050505] overflow-hidden font-mono text-white">
      {!gameStarted ? (
        /* Welcome Page Overlay */
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black p-6 text-center">
          <div className="mb-8">
            <h1 className="text-4xl font-black tracking-[0.2em] text-[#00f2ff] mb-2">ON-CHAIN</h1>
            <h2 className="text-xl tracking-[0.5em] text-[#ff00ff] uppercase opacity-80">30 Day Journey</h2>
          </div>
          
          <div className="max-w-md space-y-4 mb-12 opacity-60 text-[10px] uppercase leading-relaxed tracking-widest">
            <p>Master the protocols of the new internet.</p>
            <p>3 Chapters. 30 Challenges. Full Sovereignty.</p>
          </div>

          <div className="flex flex-col gap-4">
            {hasSavedProgress ? (
              <>
                <button 
                  onClick={resumeGame}
                  className="px-12 py-4 bg-[#00f2ff] text-black hover:bg-white transition-all duration-300 font-bold uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(0,242,255,0.4)]"
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
                className="px-12 py-4 border-2 border-[#00f2ff] text-[#00f2ff] hover:bg-[#00f2ff] hover:text-black transition-all duration-300 font-bold uppercase tracking-widest text-sm"
              >
                Initialize Protocol
              </button>
            )}
          </div>
        </div>
      ) : (
        /* The 3D Scene */
        <a-scene embedded vr-mode-ui="enabled: false" inspector="url: false">
          <a-sky color="#050505"></a-sky>
          <a-grid position="0 0 0" rotation="-90 0 0" width="100" height="100" color="#111" opacity="0.5"></a-grid>
          <ActiveEpisode onComplete={() => setCurrentStep(s => Math.min(s + 1, 29))} />
          <a-entity camera position="0 1.6 0" look-controls wasd-controls></a-entity>
        </a-scene>
      )}

      {/* Persistence UI Layer (Visible after start) */}
      {gameStarted && (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-between p-6 z-10">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-[#00f2ff] text-xl font-black tracking-tighter">ON-CHAIN JOURNEY</h1>
              <div className="flex items-center gap-2">
                <p className="text-[#ff00ff] text-[10px] tracking-widest uppercase opacity-70">Day {currentStep + 1} • Chapter {chapterNumber}</p>
                <span className="text-[8px] text-white/20">|</span>
                <span className="text-[8px] text-white/40 animate-pulse uppercase">Saving_Progress...</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pointer-events-auto w-full max-w-2xl mx-auto">
            <button onClick={() => setCurrentStep(s => Math.max(0, s - 1))} className="text-white/20 hover:text-white text-[10px] uppercase p-4">Back</button>
            <div className="flex gap-1 overflow-hidden px-4">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className={`h-1 transition-all duration-500 ${i === currentStep ? 'bg-[#00f2ff] w-6' : i < currentStep ? 'bg-[#ff00ff] w-2' : 'bg-white/10 w-2'}`}></div>
              ))}
            </div>
            <button onClick={() => setCurrentStep(s => Math.min(29, s + 1))} className="text-white/20 hover:text-white text-[10px] uppercase p-4">Next</button>
          </div>
        </div>
      )}

      {/* Architect Link */}
      <div className="absolute bottom-6 right-6 z-[60] flex items-center gap-2">
        <a 
          href="https://x.com/applecoraline" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-full transition-all group"
        >
          <span className="text-[9px] uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">Architect</span>
          <svg width="10" height="10" viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-white/60 group-hover:fill-[#00f2ff]">
            <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
