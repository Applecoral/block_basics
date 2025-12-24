"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode21({ onComplete }: Props) {
  const [isCompressed, setIsCompressed] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#00f2ff] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(0,255,255,0.2)] space-y-4">
        <h2 className="text-[#00f2ff] text-xs uppercase font-black tracking-widest text-center">
          Protocol: Optimistic Rollup
        </h2>

        <p className="text-white/40 text-[9px] text-center mb-4">
          {isCompressed 
            ? "Data compressed. Transaction cost reduced by 99%." 
            : "Ethereum is congested! Click 'Rollup' to bundle these transactions into Layer 2."}
        </p>

        {!isCompressed ? (
          <button 
            onClick={() => setIsCompressed(true)}
            className="px-6 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase w-full"
          >
            Execute Rollup
          </button>
        ) : (
          <button 
            onClick={onComplete} 
            className="px-6 py-2 bg-[#00f2ff] text-black font-black text-[10px] uppercase w-full shadow-[0_0_10px_#00f2ff]"
          >
            Scale Network
          </button>
        )}
      </div>
    </div>
  );
}
