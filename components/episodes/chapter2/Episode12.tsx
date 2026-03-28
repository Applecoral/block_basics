"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode12({ onComplete }: Props) {
  const [gas, setGas] = useState(0);
  const isReady = gas >= 100;

  const startPumping = () => {
    const interval = setInterval(() => {
      setGas(g => {
        if (g >= 100) { clearInterval(interval); return 100; }
        return g + 5;
      });
    }, 50);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#00f2ff] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(0,242,255,0.2)] space-y-4">

        {/* Episode Explainer */}
        <p className="text-[#00f2ff] text-[10px] uppercase font-black tracking-widest text-center">
          EPISODE 12: GAS OPTIMIZATION
        </p>
        <p className="text-white/50 text-[9px] text-center mb-4">
          Network nodes require fuel to execute transactions efficiently. Hold the button to pump gas until the meter reaches 100%, then broadcast the transaction.
        </p>

        <h2 className="text-[#00f2ff] text-xs uppercase font-black tracking-widest text-center">
          PROTOCOL: GAS OPTIMIZATION
        </h2>
        <p className="text-white/40 text-[9px] text-center mb-4">
          {isReady 
            ? "Gas limit reached. Transaction ready for broadcast." 
            : "Charge the gas tank to fuel the network nodes."}
        </p>

        {/* Gas Bar */}
        <div className="w-full h-2 bg-white/10 rounded mb-4 overflow-hidden">
          <div className="h-full bg-[#00f2ff] transition-all duration-100" style={{ width: `${gas}%` }}></div>
        </div>

        {!isReady ? (
          <button
            onMouseDown={startPumping}
            className="px-8 py-3 w-full border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-xs uppercase animate-pulse shadow-[0_0_10px_#00f2ff]"
          >
            Hold to Pump Gas ({gas}%)
          </button>
        ) : (
          <button
            onClick={onComplete}
            className="px-8 py-3 w-full bg-[#ff00ff] text-white font-black text-xs uppercase shadow-[0_0_15px_#ff00ff] hover:scale-105 transition-transform"
          >
            Broadcast Transaction →
          </button>
        )}

        <p className="text-[#00f2ff] text-[10px] uppercase font-bold tracking-widest mt-2">
          Gas Level: {gas}%
        </p>
      </div>
    </div>
  );
}
