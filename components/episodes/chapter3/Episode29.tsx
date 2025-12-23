"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode29({ onComplete }) {
  const [mergedCount, setMergedCount] = useState(0);
  const total = 4;
  const isUnified = mergedCount >= total;

  return (
    <>
      <a-entity>
        {/* The Superchain Core */}
        <a-torus 
          position="0 1.5 -5" 
          radius="2" 
          tube="0.05" 
          color="#00f2ff" 
          visible={isUnified}
          animation="property: rotation; to: 0 360 360; dur: 10000; loop: true; easing: linear"
        ></a-torus>

        {/* Fragmented Chains */}
        {!isUnified && [
          {pos: "-2 2 -4", color: "#ff00ff"},
          {pos: "2 2 -4", color: "#00f2ff"},
          {pos: "-1 0.5 -3", color: "#FFD700"},
          {pos: "1 0.5 -3", color: "#00ff00"}
        ].map((d, i) => (
          <a-sphere 
            key={i} 
            position={d.pos} 
            radius="0.3" 
            color={d.color} 
            onClick={() => setMergedCount(c => c + 1)}
            animation="property: position; to: 0 1.5 -5; dur: 1000; startEvents: click"
          ></a-sphere>
        ))}

        <a-text 
          value={isUnified ? "SUPERCHAIN ACTIVE" : "UNIFY FRAGMENTED NETWORKS"} 
          position="0 3.5 -5" align="center" color="#00f2ff" width="5"
        ></a-text>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: Interop-L2</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {isUnified ? "Horizontal scaling achieved. One wallet, many chains." : "The future is not one chain, but a web of interconnected ones. Tap the fragmented orbs to merge them into the Superchain."}
        </p>
        {isUnified && (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00f2ff] text-black font-black text-[10px] uppercase shadow-[0_0_15px_#00f2ff]">
            Proceed to Final State
          </button>
        )}
      </div>
    </>
  );
}
