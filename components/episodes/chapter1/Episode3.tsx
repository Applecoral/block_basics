"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode3({ onComplete }: Props) {
  const [isHacked, setIsHacked] = useState(true);
  const [isFixed, setIsFixed] = useState(false);

  const fixBlock = () => {
    setIsHacked(false);
    setTimeout(() => setIsFixed(true), 800);
  };

  return (
    <>
      <a-entity>
        {/* Genesis Block - Corrupted State */}
        <a-box 
          position="-2 1.5 -3" 
          color={isHacked ? "#ff3333" : "#00f2ff"} 
          animation={isHacked ? "property: position; to: -2 1.6 -3; dir: alternate; dur: 100; loop: true" : ""}
          onClick={fixBlock}
        >
          <a-text 
            value={isHacked ? "CORRUPTED" : "SECURE"} 
            position="0 1.2 0" align="center" width="3" color="white">
          </a-text>
        </a-box>

        {/* Broken Connection Line */}
        <a-entity 
          geometry="primitive: cylinder; height: 4; radius: 0.05" 
          position="0 1.5 -3" 
          rotation="0 0 90" 
          material={`color: ${isFixed ? '#00ff00' : '#ff3333'}; opacity: ${isFixed ? 1 : 0.2}`}
        ></a-entity>

        {/* Next Block - Reacting to the break */}
        <a-box position="2 1.5 -3" color={isFixed ? "#00f2ff" : "#222"}>
          <a-text value="INVALID HASH" position="0 1.2 0" align="center" width="2.5" color="#ff3333" visible={!isFixed}></a-text>
        </a-box>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#ff00ff] text-[10px] tracking-widest mb-2 uppercase">Alert: Integrity Violation</p>
        <p className="text-white text-xs text-center max-w-xs mb-4">
          {isFixed 
            ? "Chain integrity restored. Immutability confirmed." 
            : "A hacker changed the Genesis data! The chain is broken. Tap the red block to Re-Hash and fix the link."}
        </p>
        {isFixed && (
          <button onClick={onComplete} className="px-6 py-2 border-2 border-[#00ff00] text-[#00ff00] font-bold text-xs uppercase shadow-[0_0_10px_#00ff00]">
            Continue Journey
          </button>
        )}
      </div>
    </>
  );
}
