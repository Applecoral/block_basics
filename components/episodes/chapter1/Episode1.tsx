"use client";
import { useState, useRef } from "react";

interface Props { onComplete: () => void; }

export default function Episode1({ onComplete }: Props) {
  const [val, setVal] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const isSolved = val.toUpperCase() === "BLOCK";

  // Focus the input when clicking the container
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div 
        onClick={handleContainerClick}
        className="bg-black/90 border-2 border-[#ff00ff] p-6 flex flex-col items-center shadow-[0_0_30px_rgba(255,0,255,0.2)] cursor-text active:scale-95 transition-transform"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 bg-[#ff00ff] animate-pulse rounded-full" />
          <p className={`text-[12px] tracking-[0.3em] uppercase font-black ${isSolved ? 'text-[#00f2ff]' : 'text-[#ff00ff]'}`}>
            {isSolved ? "PROTOCOL DECRYPTED" : "TYPE TO DECRYPT"}
          </p>
        </div>

        <div className="relative">
          <input 
            ref={inputRef}
            type="text" 
            placeholder="________________" 
            className="bg-transparent border-none text-[#ff00ff] p-2 w-64 text-center focus:outline-none placeholder:text-[#ff00ff]/30 text-xl font-mono tracking-widest"
            onChange={(e) => setVal(e.target.value)}
            autoFocus
          />
          {!val && <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-[#ff00ff] animate-bounce" />}
        </div>

        {isSolved && (
          <button 
            onClick={(e) => { e.stopPropagation(); onComplete(); }} 
            className="mt-4 px-8 py-3 bg-[#00f2ff] text-black font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-all shadow-[0_0_20px_#00f2ff]"
          >
            INITIALIZE GENESIS
          </button>
        )}
      </div>
    </div>
  );
}
