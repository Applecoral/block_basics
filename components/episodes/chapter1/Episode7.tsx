"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode7({ onComplete }) {
  const [clicks, setClicks] = useState(0);
  const target = 10;
  const isMined = clicks >= target;

  return (
    <>
      <a-entity>
        <a-octahedron 
          position="0 1.5 -3" 
          radius="0.8" 
          color={isMined ? "#FFD700" : "#444"}
          animation={!isMined ? `property: rotation; to: 0 360 360; dur: ${2000 - clicks * 150}; loop: true; easing: linear` : "property: rotation; to: 0 360 0; dur: 5000; loop: true"}
          onClick={() => !isMined && setClicks(c => c + 1)}
        >
        </a-octahedron>
        <a-text 
          value={isMined ? "BLOCK MINED" : `POWER: ${Math.round((clicks/target)*100)}%`} 
          position="0 2.8 -3" align="center" color={isMined ? "#FFD700" : "#ff00ff"} width="4"
        ></a-text>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#ff00ff] text-[10px] tracking-widest mb-2 uppercase font-bold">Protocol: Proof of Work</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {isMined ? "Computation successful. Reward generated." : "Mining requires energy. Click the block repeatedly to solve the cryptographic puzzle."}
        </p>
        {isMined ? (
          <button onClick={onComplete} className="px-6 py-2 bg-[#FFD700] text-black font-black text-[10px] uppercase">
            Claim Reward
          </button>
        ) : (
          <div className="text-[#ff00ff] font-mono text-xs animate-pulse">MINING IN PROGRESS...</div>
        )}
      </div>
    </>
  );
}
