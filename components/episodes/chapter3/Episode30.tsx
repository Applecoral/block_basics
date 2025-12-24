"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode30({ onComplete }: Props) {
  const [activated, setActivated] = useState(false);

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-white text-sm font-black tracking-widest mb-4 text-center animate-pulse">
        CONGRATULATIONS, ON-CHAIN CITIZEN
      </h2>

      <p className="text-white/60 text-[10px] text-center max-w-sm mb-6 uppercase leading-relaxed">
        You have successfully mastered the fundamentals of the decentralized world. 
        From the Genesis block to the Superchain, you are now ready to build, trade, and govern.
      </p>

      {!activated ? (
        <button
          onClick={() => setActivated(true)}
          className="px-10 py-4 border-4 border-white text-white font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
        >
          Claim Your Sovereignty
        </button>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <p className="text-[#00ff00] font-mono text-xs">CERTIFICATE MINTED: FID #YOUR_ID</p>
          <button
            onClick={onComplete}
            className="px-10 py-4 bg-[#00f2ff] text-black font-black text-sm uppercase tracking-tighter hover:bg-white transition-colors"
          >
            Finish Journey
          </button>
        </div>
      )}
    </div>
  );
}
