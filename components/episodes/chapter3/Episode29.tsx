"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode29({ onComplete }: Props) {
  const [mergedCount, setMergedCount] = useState(0);
  const total = 4;
  const isUnified = mergedCount >= total;

  const fragments = ["CHAIN A", "CHAIN B", "CHAIN C", "CHAIN D"];

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-[#00f2ff] text-sm font-bold uppercase mb-4 text-center">Protocol: Interop-L2</h2>

      <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
        {isUnified
          ? "Horizontal scaling achieved. One wallet, many chains."
          : "The future is not one chain, but a web of interconnected ones. Click each fragmented chain to merge them into the Superchain."}
      </p>

      {!isUnified && (
        <div className="flex gap-4 mb-4 flex-wrap justify-center">
          {fragments.map((frag, i) => (
            <button
              key={i}
              onClick={() => setMergedCount(c => c + 1)}
              className="px-4 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase"
            >
              {frag}
            </button>
          ))}
        </div>
      )}

      {isUnified && (
        <button
          onClick={onComplete}
          className="px-6 py-2 bg-[#00f2ff] text-black font-black text-[10px] uppercase shadow-[0_0_15px_#00f2ff]"
        >
          Proceed to Final State
        </button>
      )}
    </div>
  );
}
