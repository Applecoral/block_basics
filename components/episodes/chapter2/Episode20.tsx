"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode20({ onComplete }: Props) {
  const [isDeployed, setIsDeployed] = useState(false);

  return (
    <>
      <a-entity>
        {/* The Contract Capsule */}
        <a-cylinder 
          position="0 1 -5" 
          radius="0.5" 
          height="1.5" 
          color="#00f2ff"
          animation={isDeployed ? "property: position; to: 0 20 -10; dur: 3000; easing: easeInExpo" : ""}
        >
          <a-text value="v1.0" position="0 0 0.6" align="center" color="black" width="3"></a-text>
        </a-cylinder>

        {/* The Launch Lever */}
        <a-entity position="1.5 0.5 -3" rotation={isDeployed ? "45 0 0" : "-45 0 0"} onClick={() => setIsDeployed(true)}>
          <a-cylinder radius="0.05" height="1" color="#555"></a-cylinder>
          <a-sphere position="0 0.5 0" radius="0.15" color="#ff00ff"></a-sphere>
        </a-entity>

        <a-plane position="0 0 -5" rotation="-90 0 0" width="10" height="10" color="#111"></a-plane>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#ff00ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Status: Code is Law</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {isDeployed ? "Contract live on-chain. Immutable execution started." : "Ready to deploy your logic to the world? Pull the lever to finalize Chapter 2."}
        </p>
        {isDeployed && (
          <button onClick={onComplete} className="px-8 py-3 bg-white text-black font-black text-xs uppercase tracking-widest animate-pulse">
            Enter Chapter 3: Ownership
          </button>
        )}
      </div>
    </>
  );
}
