"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode11({ onComplete }) {
  const [tokens, setTokens] = useState(0);
  const isTriggered = tokens === 3;

  return (
    <>
      <a-entity>
        {/* Vending Machine */}
        <a-box position="0 1 -4" width="2" height="3" depth="1" color="#111" material="metalness: 0.8">
           <a-text value="SMART CONTRACT" position="0 1.2 0.51" align="center" width="3" color="#00f2ff"></a-text>
           <a-text value={`INPUT: ${tokens}/3`} position="0 0.8 0.51" align="center" width="4" color={isTriggered ? "#00ff00" : "#ff00ff"}></a-text>
        </a-box>

        {/* Output Area */}
        {isTriggered && (
          <a-box position="0 0.5 -3" scale="0.5 0.5 0.5" color="#00ff00" animation="property: position; to: 0 1.5 -3; dur: 1000"></a-box>
        )}

        {/* Token Spawn */}
        {!isTriggered && (
          <a-sphere position="0 1.5 -2" radius="0.1" color="#ff00ff" onClick={() => setTokens(t => t + 1)} animation="property: scale; to: 1.2 1.2 1.2; dir: alternate; dur: 500; loop: true"></a-sphere>
        )}
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold">Protocol: Programmable Logic</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {isTriggered ? "Logic condition met. Execution complete." : "Tap the floating tokens. If Input = 3, then the Contract executes."}
        </p>
        {isTriggered && (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00ff00] text-black font-black text-[10px] uppercase shadow-[0_0_10px_#00ff00]">
            Confirm Execution
          </button>
        )}
      </div>
    </>
  );
}
