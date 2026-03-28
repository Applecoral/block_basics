"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode28({ onComplete }: Props) {
  // Track how many reputation points the user has collected
  const [points, setPoints] = useState(0);
  const totalNeeded = 3;

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-[#ff00ff] text-sm font-bold uppercase mb-4 text-center">
        Protocol: Soulbound Identity
      </h2>

      {/* Instructions or success message */}
      <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
        {points >= totalNeeded
          ? "Reputation synthesized. You are a Citizen of the On-Chain World."
          : "Collect your achievement orbs to build your permanent on-chain reputation."}
      </p>

      {/* Show buttons to collect orbs sequentially */}
      {!points || points < totalNeeded ? (
        <div className="flex gap-4 mb-4 flex-wrap justify-center">
          {points < 1 && (
            <button
              onClick={() => setPoints(1)}
              className="px-4 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase"
            >
              DEVOPS
            </button>
          )}
          {points >= 1 && points < 2 && (
            <button
              onClick={() => setPoints(2)}
              className="px-4 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase"
            >
              CODER
            </button>
          )}
          {points >= 2 && points < 3 && (
            <button
              onClick={() => setPoints(3)}
              className="px-4 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase"
            >
              GOVERNOR
            </button>
          )}
        </div>
      ) : null}

      {/* Show finalize button once all points collected */}
      {points >= totalNeeded && (
        <button
          onClick={onComplete}
          className="px-6 py-2 border-2 border-[#ff00ff] text-[#ff00ff] font-bold text-[10px] uppercase"
        >
          Finalize Identity
        </button>
      )}
    </div>
  );
}
