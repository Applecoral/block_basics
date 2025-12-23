"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode9({ onComplete }) {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      <a-entity>
        {/* The Public Lock */}
        <a-torus-knot 
          position="0 1.8 -3" 
          radius="0.5" 
          tube="0.15" 
          color={unlocked ? "#00ff00" : "#ff00ff"}
          animation={!unlocked ? "property: rotation; to: 0 360 0; loop: true; dur: 10000" : ""}
        ></a-torus-knot>

        {/* The Private Key */}
        <a-box 
          position="0 0.8 -2" 
          scale="0.2 0.5 0.1" 
          color="#FFD700" 
          onClick={() => setUnlocked(true)}
          animation={unlocked ? "property: position; to: 0 1.8 -2.5; dur: 500" : ""}
        >
          <a-text value="KEY" align="center" position="0 0 0.1" color="black" width="2"></a-text>
        </a-box>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#ff00ff] text-[10px] tracking-widest mb-2 uppercase font-bold">Protocol: Asymmetric Auth</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {unlocked ? "Identity verified. Signature valid." : "Your Public Address is visible, but only your Private Key can unlock the data. Tap the Key."}
        </p>
        {unlocked && (
          <button onClick={onComplete} className="px-6 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase">
            Decrypt & Proceed
          </button>
        )}
      </div>
    </>
  );
}
