"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode22({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const isBridged = progress >= 100;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#ff00ff] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(255,0,255,0.2)] space-y-4">
        <h2 className="text-[#ff00ff] text-xs uppercase font-black tracking-widest text-center">
          Protocol: Cross-Chain Bridge
        </h2>

        <p className="text-white/40 text-[9px] text-center mb-4">
          {isBridged 
            ? "Asset locked on Mainnet. Minted on L2." 
            : "Hold the button to verify the bridge and move your asset to the faster chain."}
        </p>

        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
          <div 
            className="h-full bg-[#00f2ff] transition-all duration-100"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {!isBridged ? (
          <button 
            onMouseDown={() => {
              const interval = setInterval(() => {
                setProgress(p => {
                  if (p >= 100) { clearInterval(interval); return 100; }
                  return p + 2;
                });
              }, 30);
            }}
            className="px-6 py-2 border-2 border-[#ff00ff] text-[#ff00ff] font-bold text-[10px] uppercase w-full animate-pulse"
          >
            Initiate Bridge
          </button>
        ) : (
          <button 
            onClick={onComplete} 
            className="px-6 py-2 bg-[#00ff00] text-black font-black text-[10px] uppercase w-full shadow-[0_0_15px_#00ff00]"
          >
            Arrive at Destination
          </button>
        )}
      </div>
    </div>
  );
}
