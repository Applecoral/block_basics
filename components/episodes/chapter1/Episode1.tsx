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
    <>
      {/* 3D CONTENT */}
      <a-entity>
        <a-box 
          position="0 1.5 -3" 
          material={`color: ${isSolved ? '#00ff00' : '#ff00ff'}; emissive: ${isSolved ? '#00ff00' : '#ff00ff'}; emissiveIntensity: 0.5`}
          animation={isSolved ? "property: rotation; to: 0 360 0; loop: true; dur: 2000" : ""}
        ></a-box>
        <a-text 
          value={isSolved ? "HASH MATCH" : "DATA UNKNOWN"} 
          position="0 2.8 -3" align="center" color={isSolved ? "#00ff00" : "#ff00ff"} width="4"
        ></a-text>
      </a-entity>

      {/* 2D HUD OVERLAY - This is the "Glass" of the screen */}
      <div 
        className="fixed inset-0 z-[100] flex flex-col items-center justify-end pb-12 pointer-events-none"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
      >
        <div 
          onClick={handleContainerClick}
          className="pointer-events-auto bg-black/90 border-2 border-[#ff00ff] p-6 flex flex-col items-center shadow-[0_0_30px_rgba(255,0,255,0.2)] cursor-text active:scale-95 transition-transform"
        >
          <div className="flex items-center gap-2 mb-3">
             <div className="w-2 h-2 bg-[#ff00ff] animate-pulse rounded-full" />
             <p className="text-[#00f2ff] text-[12px] tracking-[0.3em] uppercase font-black">
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
            {/* Visual Indicator: Blinking Cursor Line */}
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
    </>
  );
}
