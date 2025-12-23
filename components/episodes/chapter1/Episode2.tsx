"use client";
import { useState, useRef } from "react";

interface Props { onComplete: () => void; }

export default function Episode2({ onComplete }: Props) {
  const [inputHash, setInputHash] = useState("");
  const GENESIS_HASH = "0000X9"; // The "target" from the previous block
  const isLinked = inputHash.toUpperCase() === GENESIS_HASH;

  return (
    <>
      <a-entity>
        {/* The Genesis Block (Static) */}
        <a-box position="-2 1.5 -4" scale="0.8 0.8 0.8" color="#00f2ff" opacity="0.5"></a-box>
        <a-text value="GENESIS: 0000X9" position="-2 2.5 -4" align="center" width="3" color="#00f2ff"></a-text>

        {/* The New Block (Pending Link) */}
        <a-box 
          position="2 1.5 -4" 
          material={`color: ${isLinked ? '#00f2ff' : '#555'}; wireframe: ${!isLinked}`}
          animation={isLinked ? "property: position; to: 1 1.5 -4; dur: 1000" : ""}
        ></a-box>
        
        {/* Visual Chain Connector */}
        {isLinked && (
          <a-entity line="start: -1.6 1.5 -4; end: 0.6 1.5 -4; color: #00f2ff"></a-entity>
        )}
      </a-entity>

      {/* HUD OVERLAY */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-end pb-12 pointer-events-none">
        <div className="pointer-events-auto bg-black/90 border-2 border-[#00f2ff] p-6 flex flex-col items-center shadow-[0_0_30px_rgba(0,242,255,0.2)]">
          <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 font-black">
            MISSION: LINK TO PREVIOUS HASH
          </p>
          <p className="text-white/50 text-[9px] mb-4">ENTER GENESIS HASH TO SECURE CHAIN</p>
          
          <input 
            type="text" 
            placeholder="PASTE PREVIOUS HASH..." 
            className="bg-transparent border-b-2 border-[#00f2ff] text-[#00f2ff] p-2 w-64 text-center focus:outline-none font-mono"
            onChange={(e) => setInputHash(e.target.value)}
          />

          {isLinked && (
            <button 
              onClick={onComplete} 
              className="mt-6 px-8 py-2 bg-[#00f2ff] text-black font-black text-xs tracking-tighter animate-bounce"
            >
              BLOCK 2 SECURED →
            </button>
          )}
        </div>
      </div>
    </>
  );
}
