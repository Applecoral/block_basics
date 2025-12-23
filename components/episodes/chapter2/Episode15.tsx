"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode15({ onComplete }) {
  const [supply, setSupply] = useState(0);
  const target = 10;

  return (
    <>
      <a-entity>
        {/* The Minting Press */}
        <a-cylinder position="0 3 -4" radius="1" height="0.5" color="#111" material="metalness: 0.9">
          <a-text value="ERC-20 FACTORY" position="0 0.3 0" align="center" width="4" color="#00f2ff"></a-text>
        </a-cylinder>

        {/* Generated Tokens */}
        {Array.from({ length: supply }).map((_, i) => (
          <a-box 
            key={i}
            position={`${(i % 5) - 2} ${Math.floor(i / 5) + 0.5} -4`} 
            scale="0.4 0.4 0.4" 
            color="#00f2ff"
            animation="property: rotation; to: 0 360 0; loop: true; dur: 3000"
          ></a-box>
        ))}
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold">Protocol: Fungible Asset</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {supply >= target ? "Total supply reached. Treasury full." : `ERC-20 tokens are identical. Mint ${target - supply} more to complete the batch.`}
        </p>
        
        {supply < target ? (
          <button 
            onClick={() => setSupply(s => s + 1)} 
            className="px-6 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase shadow-[0_0_10px_#00f2ff]"
          >
            Mint Token
          </button>
        ) : (
          <button onClick={onComplete} className="px-6 py-2 bg-[#ff00ff] text-white font-black text-[10px] uppercase shadow-[0_0_15px_#ff00ff]">
            Finalize Supply
          </button>
        )}
      </div>
    </>
  );
}
