"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode1({ onComplete }: Props) {
  const [val, setVal] = useState("");
  const isSolved = val.toUpperCase() === "BLOCK";

  return (
    <>
      {/* 3D Elements - These stay in the A-Frame world */}
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

      {/* 2D Interface - Forced to the top layer */}
      <div className="fixed inset-x-0 bottom-10 z-[9999] flex flex-col items-center pointer-events-none">
        <div className="pointer-events-auto flex flex-col items-center bg-black/60 p-4 backdrop-blur-md border border-[#ff00ff]/30">
          <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">
            Terminal: Hashing Protocol
          </p>
          <input 
            type="text" 
            placeholder="ENTER KEYWORD..." 
            className="bg-black/80 border-2 border-[#ff00ff] text-[#ff00ff] p-3 rounded-none w-64 text-center focus:shadow-[0_0_15px_#ff00ff] outline-none placeholder:text-[#ff00ff]/50 text-sm mb-4"
            onChange={(e) => setVal(e.target.value)}
            // Ensure keyboard pops up on mobile
            inputMode="text"
          />
          {isSolved && (
            <button 
              onClick={onComplete} 
              className="px-6 py-2 bg-[#00f2ff] text-black font-black text-[10px] uppercase tracking-tighter hover:bg-white transition-all shadow-[0_0_15px_#00f2ff]"
            >
              Initialize Genesis
            </button>
          )}
        </div>
      </div>
    </>
  );
}
      </div>
    </>
  );
}
