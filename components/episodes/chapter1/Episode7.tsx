"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode7({ onComplete }: Props) {
  const [hashPower, setHashPower] = useState(0);
  const targetPower = 100;
  const isMined = hashPower >= targetPower;

  const mineFragment = () => {
    if (isMined) return;
    setHashPower(prev => Math.min(prev + 10, targetPower));
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#FFD700] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(255,215,0,0.2)] space-y-4">

        {/* Episode Explainer */}
        <p className="text-[#FFD700] text-[10px] uppercase font-black tracking-widest text-center">
          EPISODE 7: PROOF OF WORK
        </p>
        <p className="text-white/50 text-[9px] text-center mb-4">
          Capture floating hash fragments to build computational power. Once your hash power reaches 100%, the block will be verified and the reward can be claimed.
        </p>

        <h2 className="text-[#FFD700] text-xs uppercase font-black tracking-widest">PROOF_OF_WORK</h2>
        <p className="text-white/40 text-[9px] text-center mb-2">
          Intercept floating hash fragments to provide computational power
        </p>

        {!isMined ? (
          <div className="flex flex-col items-center space-y-2">
            {[1,2,3].map((i) => (
              <button
                key={i}
                onClick={mineFragment}
                className="px-6 py-2 w-48 text-xs font-mono font-bold uppercase border-2 border-[#FFD700] text-[#FFD700] bg-transparent hover:bg-[#FFD700] hover:text-black transition-all rounded"
              >
                Capture HASH_FRAGMENT_{i}
              </button>
            ))}
            <p className="text-white/40 text-[9px] mt-2">Hash power: {hashPower}% / {targetPower}%</p>
            <div className="w-48 h-2 bg-white/10 mt-2 rounded overflow-hidden">
              <div
                className="h-full bg-[#FFD700] transition-all"
                style={{ width: `${hashPower}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <>
            <p className="text-[#FFD700] text-[10px] uppercase text-center font-bold animate-pulse">
              Nonce found. Block hash verified by network.
            </p>
            <button
              onClick={onComplete}
              className="mt-4 w-full py-4 bg-[#FFD700] text-black font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_#FFD700] hover:scale-105 transition-transform"
            >
              Claim Block Reward →
            </button>
          </>
        )}

        <div className="w-full h-1 bg-white/10 mt-4 rounded overflow-hidden">
          <div
            className="h-full bg-[#FFD700] transition-all"
            style={{ width: `${hashPower}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
