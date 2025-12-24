"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode20({ onComplete }: Props) {
  const [isDeployed, setIsDeployed] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#ff00ff] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(255,0,255,0.2)] space-y-4">

        {/* Episode Explainer */}
        <p className="text-[#ff00ff] text-[10px] uppercase font-black tracking-widest text-center">
          EPISODE 20: CODE IS LAW
        </p>
        <p className="text-white/50 text-[9px] text-center mb-4">
          Smart contracts are immutable. Once deployed, the rules execute automatically. Pull the lever to finalize Chapter 2 and go live on-chain.
        </p>

        <h2 className="text-[#ff00ff] text-xs uppercase font-black tracking-widest text-center">
          Status: Code is Law
        </h2>

        <p className="text-white/40 text-[9px] text-center mb-4">
          {isDeployed
            ? "Contract live on-chain. Immutable execution started."
            : "Ready to deploy your logic to the world? Pull the lever to finalize Chapter 2."}
        </p>

        {!isDeployed ? (
          <button 
            onClick={() => setIsDeployed(true)}
            className="px-6 py-2 border-2 border-[#ff00ff] text-[#ff00ff] font-bold text-[10px] uppercase w-full"
          >
            Deploy Contract
          </button>
        ) : (
          <button 
            onClick={onComplete} 
            className="px-8 py-3 bg-white text-black font-black text-[10px] uppercase w-full animate-pulse"
          >
            Enter Chapter 3: Ownership
          </button>
        )}
      </div>
    </div>
  );
}
