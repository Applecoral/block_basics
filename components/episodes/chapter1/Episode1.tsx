"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode1({ onComplete }: Props) {
  const [val, setVal] = useState("");
  const isSolved = val.toUpperCase() === "BLOCK";

  return (
    <>
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

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Terminal: Hashing Protocol</p>
        <input 
          type="text" 
          placeholder="ENTER KEYWORD..." 
          className="bg-transparent border-2 border-[#ff00ff] text-[#ff00ff] p-2 rounded-none w-64 text-center focus:shadow-[0_0_15px_#ff00ff] outline-none placeholder:text-[#ff00ff]/50 text-xs mb-4"
          onChange={(e) => setVal(e.target.value)}
        />
        {isSolved && (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00f2ff] text-black font-black text-[10px] uppercase tracking-tighter hover:bg-white transition-all shadow-[0_0_15px_#00f2ff]">
            Initialize Genesis
          </button>
        )}
      </div>
    </>
  );
}