"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode23({ onComplete }) {
  const [isSponsored, setIsSponsored] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <a-entity>
        {/* The Loot Chest */}
        <a-box 
          position="0 1 -4" 
          color={isOpen ? "#00ff00" : "#444"} 
          animation={isOpen ? "property: rotation; to: 0 360 0; dur: 2000; loop: true" : ""}
        >
          <a-box position="0 0.5 0" scale="1.1 0.1 1.1" color="#222" visible={!isOpen}></a-box>
        </a-box>

        {/* The Paymaster Node */}
        <a-octahedron 
          position="2 3 -5" 
          radius="0.5" 
          color={isSponsored ? "#00f2ff" : "#222"}
          material={`emissive: #00f2ff; emissiveIntensity: ${isSponsored ? 1 : 0}`}
        >
          <a-text value="PAYMASTER" position="0 1 0" align="center" width="3" color="#00f2ff"></a-text>
        </a-octahedron>

        {isSponsored && !isOpen && (
          <a-entity line="start: 2 3 -5; end: 0 1 -4; color: #00f2ff; opacity: 0.6"></a-entity>
        )}
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: Account Abstraction</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {isOpen ? "Transaction subsidized. UX Friction: Zero." : isSponsored ? "Gas fee covered by Sponsor. Open the chest!" : "You have 0 ETH. Request a Gas Subsidy from the Paymaster to interact."}
        </p>
        
        {!isSponsored ? (
          <button onClick={() => setIsSponsored(true)} className="px-6 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase">
            Request Sponsorship
          </button>
        ) : !isOpen ? (
          <button onClick={() => setIsOpen(true)} className="px-6 py-2 bg-[#ff00ff] text-white font-black text-[10px] uppercase">
            Open Chest (0 ETH)
          </button>
        ) : (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00ff00] text-black font-black text-[10px] uppercase">
            Claim Rewards
          </button>
        )}
      </div>
    </>
  );
}
