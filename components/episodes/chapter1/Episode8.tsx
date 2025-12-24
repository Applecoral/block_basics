"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode8({ onComplete }: Props) {
  const [stakes, setStakes] = useState([false, false, false]);
  const allStaked = stakes.every(s => s);

  const toggleStake = (index: number) => {
    const newStakes = [...stakes];
    newStakes[index] = true;
    setStakes(newStakes);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#00ff00] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(0,255,0,0.2)] space-y-4">
        <h2 className="text-[#00ff00] text-xs uppercase font-black tracking-widest">PROOF_OF_STAKE</h2>
        <p className="text-white/40 text-[9px] text-center mb-4">
          Select the pedestals to stake your tokens and secure the network
        </p>

        <div className="flex flex-col gap-2 w-full">
          {stakes.map((staked, i) => (
            <button
              key={i}
              onClick={() => toggleStake(i)}
              disabled={staked}
              className={`px-6 py-2 w-full text-xs font-mono font-bold uppercase border-2 rounded transition-all ${
                staked
                  ? "border-[#00ff00] bg-[#00ff00] text-black cursor-default"
                  : "border-[#00ff00] text-[#00ff00] hover:bg-[#00ff00] hover:text-black"
              }`}
            >
              {staked ? `STAKE ${i + 1} CONFIRMED` : `STAKE ON PEDESTAL ${i + 1}`}
            </button>
          ))}
        </div>

        <p className="text-white/40 text-[9px] text-center mt-2 uppercase">
          {allStaked
            ? "Stake requirements met. Validator selected."
            : `Remaining stakes: ${stakes.filter(s => !s).length}`}
        </p>

        {allStaked && (
          <button
            onClick={onComplete}
            className="mt-4 w-full py-3 bg-[#00ff00] text-black font-black text-xs uppercase tracking-widest shadow-[0_0_20px_#00ff00] hover:scale-105 transition-transform"
          >
            Confirm Stake →
          </button>
        )}
      </div>
    </div>
  );
}
