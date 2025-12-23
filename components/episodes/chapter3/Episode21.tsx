"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode21({ onComplete }) {
  const [isCompressed, setIsCompressed] = useState(false);

  return (
    <>
      <a-entity>
        {/* Layer 1 - The Base Layer */}
        <a-grid position="0 0 -5" width="10" height="10" color="#444"></a-grid>
        
        {/* The Blocks */}
        <a-entity position={isCompressed ? "0 4 -8" : "0 1.5 -3"}>
          <a-box position="-0.5 0 0" scale={isCompressed ? "0.2 0.2 0.2" : "0.5 0.5 0.5"} color="#ff00ff"></a-box>
          <a-box position="0.5 0 0" scale={isCompressed ? "0.2 0.2 0.2" : "0.5 0.5 0.5"} color="#00f2ff"></a-box>
          <a-box position="0 0.6 0" scale={isCompressed ? "0.2 0.2 0.2" : "0.5 0.5 0.5"} color="#FFD700"></a-box>
        </a-entity>

        {/* The L2 Tube */}
        <a-cylinder position="0 3 -6" radius="0.5" height="6" rotation="90 0 0" color="#00f2ff" material="opacity: 0.2; transparent: true"></a-cylinder>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: Optimistic Rollup</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {isCompressed ? "Data compressed. Transaction cost reduced by 99%." : "Ethereum is congested! Click 'Rollup' to bundle these transactions into Layer 2."}
        </p>
        {!isCompressed ? (
          <button onClick={() => setIsCompressed(true)} className="px-6 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase">
            Execute Rollup
          </button>
        ) : (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00f2ff] text-black font-black text-[10px] uppercase shadow-[0_0_10px_#00f2ff]">
            Scale Network
          </button>
        )}
      </div>
    </>
  );
}
