"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode14({ onComplete }: Props) {
  const [solved, setSolved] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#ff00ff] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(255,0,255,0.2)] space-y-4">

        {/* Episode Explainer */}
        <p className="text-[#ff00ff] text-[10px] uppercase font-black tracking-widest text-center">
          EPISODE 14: SOLIDITY LOGIC
        </p>
        <p className="text-white/50 text-[9px] text-center mb-4">
          Smart contracts run on strict rules. Complete the subtraction in the transfer function correctly to ensure safe token transfer.
        </p>

        <h2 className="text-[#ff00ff] text-xs uppercase font-black tracking-widest text-center">
          Compiler: Solidity 0.8.x
        </h2>

        <pre className="text-[#00f2ff] text-[9px] bg-[#111] p-2 w-full rounded font-mono">
{`function transfer() public {
  require(balance >= amt);
  balance -= ____;
}`}
        </pre>

        <p className="text-white/40 text-[9px] text-center mb-4">
          {solved 
            ? "Compilation successful. Code is valid."
            : "Which variable completes the subtraction? Click the correct block."}
        </p>

        <div className="flex justify-between w-full">
          <button
            onClick={() => alert("Incorrect logic. Try again.")}
            className="w-28 py-2 bg-[#ff00ff] text-white font-bold text-xs uppercase rounded shadow-[0_0_10px_#ff00ff] hover:scale-105 transition-transform"
          >
            ETH
          </button>
          <button
            onClick={() => { setSolved(true); setTimeout(onComplete, 1500); }}
            className="w-28 py-2 bg-[#00ff00] text-black font-bold text-xs uppercase rounded shadow-[0_0_10px_#00ff00] hover:scale-105 transition-transform"
          >
            AMT
          </button>
        </div>

        {solved && (
          <button
            onClick={onComplete}
            className="mt-4 px-6 py-3 bg-[#00ff00] text-black font-black text-xs uppercase tracking-widest shadow-[0_0_15px_#00ff00]"
          >
            Continue →
          </button>
        )}
      </div>
    </div>
  );
}
