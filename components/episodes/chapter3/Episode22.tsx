"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode22({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const isBridged = progress >= 100;

  return (
    <>
      <a-entity>
        {/* Island 1: Mainnet */}
        <a-cylinder position="-3 0 -5" radius="1.5" height="0.2" color="#333">
          <a-text value="MAINNET" position="0 0.2 0" align="center" width="3" color="#ff00ff"></a-text>
        </a-cylinder>

        {/* Island 2: Layer 2 */}
        <a-cylinder position="3 0 -5" radius="1.5" height="0.2" color="#333">
          <a-text value="LAYER 2" position="0 0.2 0" align="center" width="3" color="#00f2ff"></a-text>
        </a-cylinder>

        {/* The Asset */}
        <a-sphere 
          position={`${-3 + (progress / 100) * 6} 1.5 -5`} 
          radius="0.4" 
          color="#FFD700"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 2000"
        ></a-sphere>

        {/* The Bridge Path */}
        <a-entity line={`start: -3 1.5 -5; end: 3 1.5 -5; color: #00f2ff; opacity: ${progress/100}`}></a-entity>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#ff00ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: Cross-Chain Bridge</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {isBridged ? "Asset locked on Mainnet. Minted on L2." : "Hold the button to verify the bridge and move your asset to the faster chain."}
        </p>
        
        {!isBridged ? (
          <button 
            onMouseDown={() => {
              const interval = setInterval(() => {
                setProgress(p => {
                  if (p >= 100) { clearInterval(interval); return 100; }
                  return p + 2;
                });
              }, 30);
            }}
            className="px-6 py-2 border-2 border-[#ff00ff] text-[#ff00ff] font-bold text-[10px] uppercase animate-pulse"
          >
            Initiate Bridge
          </button>
        ) : (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00ff00] text-black font-black text-[10px] uppercase shadow-[0_0_15px_#00ff00]">
            Arrive at Destination
          </button>
        )}
      </div>
    </>
  );
}
