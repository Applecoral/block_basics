"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode28({ onComplete }) {
  const [points, setPoints] = useState(0);
  const totalNeeded = 3;

  return (
    <>
      <a-entity>
        {/* The Reputation Core */}
        <a-octahedron position="0 2 -4" radius="0.8" color="#ff00ff" material="wireframe: true">
          <a-text value={`LEVEL: ${points}`} position="0 0 0" align="center" color="#00f2ff"></a-text>
        </a-octahedron>

        {/* Achievement Orbs */}
        {points < 1 && <a-sphere position="-2 1 -3" radius="0.2" color="#00f2ff" onClick={() => setPoints(1)}><a-text value="DEVOPS" align="center" position="0 0.4 0" width="2"></a-text></a-sphere>}
        {points < 2 && points >= 1 && <a-sphere position="0 1 -2" radius="0.2" color="#00f2ff" onClick={() => setPoints(2)}><a-text value="CODER" align="center" position="0 0.4 0" width="2"></a-text></a-sphere>}
        {points < 3 && points >= 2 && <a-sphere position="2 1 -3" radius="0.2" color="#00f2ff" onClick={() => setPoints(3)}><a-text value="GOVERNOR" align="center" position="0 0.4 0" width="2"></a-text></a-sphere>}
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#ff00ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: Soulbound Identity</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {points >= totalNeeded ? "Reputation synthesized. You are a Citizen of the On-Chain World." : "Collect your achievement orbs to build your permanent on-chain reputation."}
        </p>
        {points >= totalNeeded && (
          <button onClick={onComplete} className="px-6 py-2 border-2 border-[#ff00ff] text-[#ff00ff] font-bold text-[10px] uppercase">
            Finalize Identity
          </button>
        )}
      </div>
    </>
  );
}
