"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode2({ onComplete }: Props) {
  const [isLinked, setIsLinked] = useState(false);
  const [showLink, setShowLink] = useState(false);

  const handleConnect = () => {
    setShowLink(true);
    setTimeout(() => setIsLinked(true), 1000);
  };

  return (
    <>
      <a-entity>
        <a-box position="-2 1.5 -3" color="#00f2ff" scale="0.8 0.8 0.8" material="emissive: #00f2ff; emissiveIntensity: 0.2">
          <a-text value="GENESIS" position="0 1.2 0" align="center" width="3" color="#00f2ff"></a-text>
        </a-box>

        {showLink && (
          <a-entity 
            geometry="primitive: cylinder; height: 4; radius: 0.05" 
            position="0 1.5 -3" rotation="0 0 90" 
            material={`color: #ff00ff; emissive: #ff00ff; opacity: ${isLinked ? 1 : 0.4}`}
            animation={!isLinked ? "property: material.opacity; to: 1; dur: 1000; loop: true; dir: alternate" : ""}
          ></a-entity>
        )}

        <a-box 
          position="2 1.5 -3" 
          color={isLinked ? "#00f2ff" : "#333"} scale="0.8 0.8 0.8"
          onClick={handleConnect}
        >
          <a-text value={isLinked ? "LINKED" : "ORPHAN"} position="0 1.2 0" align="center" width="3" color={isLinked ? "#00f2ff" : "#666"}></a-text>
        </a-box>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#ff00ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: Chain Linkage</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {isLinked ? "Connection established. Cryptographic bond secure." : "Block 2 is isolated. Tap it to sync with Genesis hash."}
        </p>
        {isLinked && (
          <button onClick={onComplete} className="px-6 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase hover:bg-[#00f2ff] hover:text-black transition-all shadow-[0_0_10px_#00f2ff]">
            Verify Sequence
          </button>
        )}
      </div>
    </>
  );
}