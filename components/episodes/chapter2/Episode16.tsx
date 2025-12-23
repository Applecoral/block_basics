"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode16({ onComplete }) {
  const [selectedID, setSelectedID] = useState<number | null>(null);
  const correctID = 1; // The Sphere

  return (
    <>
      <a-entity>
        {/* NFT Gallery */}
        <a-box position="-2 1.5 -4" color="#ff00ff" onClick={() => setSelectedID(0)}>
          <a-text value="ID: #001" position="0 0.8 0" align="center" width="3"></a-text>
        </a-box>
        
        <a-sphere position="0 1.5 -4" color="#00f2ff" radius="0.6" onClick={() => setSelectedID(1)}>
          <a-text value="ID: #002" position="0 0.8 0" align="center" width="3"></a-text>
        </a-sphere>

        <a-cone position="2 1.5 -4" color="#FFD700" radius-bottom="0.6" onClick={() => setSelectedID(2)}>
          <a-text value="ID: #003" position="0 1.2 0" align="center" width="3"></a-text>
        </a-cone>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#ff00ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: Non-Fungible metadata</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          Metadata: "A cyan orb of perfect symmetry." <br/>
          <b>Select the NFT that matches this description.</b>
        </p>
        
        {selectedID === correctID && (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00ff00] text-black font-black text-[10px] uppercase animate-bounce">
            ID Verified: Proceed
          </button>
        )}
        {selectedID !== null && selectedID !== correctID && (
          <p className="text-red-500 text-[10px] uppercase font-bold">Metadata Mismatch. Try again.</p>
        )}
      </div>
    </>
  );
}
