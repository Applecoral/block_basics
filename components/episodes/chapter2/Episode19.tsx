"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode19({ onComplete }: Props) {
  const [votes, setVotes] = useState(0);
  const threshold = 5;

  return (
    <>
      <a-entity>
        <a-text value="PROPOSAL: UPGRADE PROTOCOL?" position="0 3 -4" align="center" color="#00f2ff" width="4"></a-text>
        
        {/* Voting Pillars */}
        <a-box position="-1.5 0.5 -3" width="1" height="1" color="#ff00ff" onClick={() => alert("Vote recorded: NO")}>
          <a-text value="NO" position="0 0.6 0" align="center" width="4"></a-text>
        </a-box>

        <a-box position="1.5 0.5 -3" width="1" height="1" color="#00ff00" onClick={() => setVotes(prev => Math.min(prev + 1, threshold))}>
          <a-text value="YES" position="0 0.6 0" align="center" width="4"></a-text>
        </a-box>

        {/* Voting Progress Stack */}
        {Array.from({ length: votes }).map((_, i) => (
          <a-box key={i} position={`1.5 ${1.2 + (i * 0.4)} -3`} scale="0.8 0.3 0.8" color="#00ff00" material="opacity: 0.8"></a-box>
        ))}
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: DAO Governance</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {votes >= threshold ? "Quorum reached. Proposal passed." : `Cast your governance tokens for 'YES'. Need ${threshold - votes} more to reach Quorum.`}
        </p>
        {votes >= threshold && (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00ff00] text-black font-black text-[10px] uppercase shadow-[0_0_10px_#00ff00]">
            Execute Proposal
          </button>
        )}
      </div>
    </>
  );
}
