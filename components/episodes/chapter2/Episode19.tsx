"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode19({ onComplete }: Props) {
  const [votes, setVotes] = useState(0);
  const threshold = 5;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#00f2ff] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(0,255,255,0.2)] space-y-4">
        <h2 className="text-[#00f2ff] text-xs uppercase font-black tracking-widest text-center">
          Protocol: DAO Governance
        </h2>

        <p className="text-white/40 text-[9px] text-center mb-4">
          {votes >= threshold 
            ? "Quorum reached. Proposal passed." 
            : `Cast your governance tokens for 'YES'. Need ${threshold - votes} more to reach Quorum.`}
        </p>

        <div className="flex justify-between w-full px-4 mb-4">
          <button 
            onClick={() => alert("Vote recorded: NO")} 
            className="px-6 py-2 bg-[#ff00ff] text-white font-bold text-[10px] uppercase w-1/2 mr-2"
          >
            NO
          </button>
          <button 
            onClick={() => setVotes(prev => Math.min(prev + 1, threshold))} 
            className="px-6 py-2 bg-[#00ff00] text-black font-bold text-[10px] uppercase w-1/2 ml-2"
          >
            YES
          </button>
        </div>

        {/* Voting Progress Bar */}
        <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-[#00ff00] transition-all duration-200" 
            style={{ width: `${(votes / threshold) * 100}%` }}
          ></div>
        </div>

        {votes >= threshold && (
          <button 
            onClick={onComplete} 
            className="px-6 py-2 mt-4 bg-[#00ff00] text-black font-black text-[10px] uppercase shadow-[0_0_10px_#00ff00]"
          >
            Execute Proposal
          </button>
        )}
      </div>
    </div>
  );
}
