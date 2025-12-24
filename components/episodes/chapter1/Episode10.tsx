"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode10({ onComplete }: Props) {
  const [signed, setSigned] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#00f2ff] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(0,242,255,0.2)] space-y-4">
        <h2 className="text-[#00f2ff] text-xs uppercase font-black tracking-widest">
          FOUNDATION STATUS
        </h2>
        <p className="text-white/40 text-[9px] text-center mb-4">
          You have mastered Hashing, Linking, Nodes, and Keys. Sign the Genesis block to enter the world of Smart Contracts.
        </p>

        {!signed ? (
          <button
            onClick={() => setSigned(true)}
            className="px-8 py-3 w-full bg-[#ff00ff] text-white font-black text-xs uppercase tracking-widest shadow-[0_0_20px_#ff00ff] hover:scale-105 transition-transform"
          >
            Sign Genesis Block
          </button>
        ) : (
          <button
            onClick={onComplete}
            className="px-8 py-3 w-full bg-[#00ff00] text-black font-black text-xs uppercase tracking-widest shadow-[0_0_20px_#00ff00] hover:scale-105 transition-transform"
          >
            Enter Chapter 2 →
          </button>
        )}

        <p className="text-[#00f2ff] text-[10px] uppercase font-bold tracking-widest mt-2">
          {signed ? "GENESIS BLOCK SIGNED" : "GENESIS BLOCK #0"}
        </p>
      </div>
    </div>
  );
}
