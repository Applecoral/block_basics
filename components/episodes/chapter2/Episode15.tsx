"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode15({ onComplete }: Props) {
  const [supply, setSupply] = useState(0);
  const target = 10;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#00f2ff] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(0,242,255,0.2)] space-y-4">
        <h2 className="text-[#00f2ff] text-xs uppercase font-black tracking-widest text-center">
          Protocol: Fungible Asset
        </h2>

        <p className="text-white/40 text-[9px] text-center mb-4">
          {supply >= target 
            ? "Total supply reached. Treasury full." 
            : `ERC-20 tokens are identical. Mint ${target - supply} more to complete the batch.`}
        </p>

        <div className="flex flex-wrap justify-center gap-2 w-full mb-4">
          {Array.from({ length: supply }).map((_, i) => (
            <div key={i} className="w-6 h-6 bg-[#00f2ff] rounded animate-spin"></div>
          ))}
        </div>

        {supply < target ? (
          <button 
            onClick={() => setSupply(s => s + 1)} 
            className="px-6 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase shadow-[0_0_10px_#00f2ff] hover:scale-105 transition-transform"
          >
            Mint Token
          </button>
        ) : (
          <button 
            onClick={onComplete} 
            className="px-6 py-2 bg-[#ff00ff] text-white font-black text-[10px] uppercase shadow-[0_0_15px_#ff00ff] hover:scale-105 transition-transform"
          >
            Finalize Supply
          </button>
        )}
      </div>
    </div>
  );
}
