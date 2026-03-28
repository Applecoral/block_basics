"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode11({ onComplete }: Props) {
  const [tokens, setTokens] = useState(0);
  const isTriggered = tokens === 3;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#00f2ff] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(0,242,255,0.2)] space-y-4">

        {/* Episode Explainer */}
        <p className="text-[#00f2ff] text-[10px] uppercase font-black tracking-widest text-center">
          EPISODE 11: PROGRAMMABLE LOGIC
        </p>
        <p className="text-white/50 text-[9px] text-center mb-4">
          Tap the floating tokens until the input condition equals 3. Once the logic condition is met, the contract executes and you can proceed.
        </p>

        <h2 className="text-[#00f2ff] text-xs uppercase font-black tracking-widest">
          PROTOCOL: PROGRAMMABLE LOGIC
        </h2>
        <p className="text-white/40 text-[9px] text-center mb-4">
          {isTriggered 
            ? "Logic condition met. Execution complete." 
            : "Tap tokens to satisfy the input condition."}
        </p>

        {!isTriggered ? (
          <button
            onClick={() => setTokens(t => t + 1)}
            className="px-8 py-3 w-full bg-[#ff00ff] text-white font-black text-xs uppercase tracking-widest shadow-[0_0_20px_#ff00ff] hover:scale-105 transition-transform"
          >
            Tap Token ({tokens}/3)
          </button>
        ) : (
          <button
            onClick={onComplete}
            className="px-8 py-3 w-full bg-[#00ff00] text-black font-black text-xs uppercase tracking-widest shadow-[0_0_20px_#00ff00] hover:scale-105 transition-transform"
          >
            Confirm Execution →
          </button>
        )}

        <p className="text-[#00ff00] text-[10px] uppercase font-bold tracking-widest mt-2">
          Input Tokens: {tokens}/3
        </p>
      </div>
    </div>
  );
}
