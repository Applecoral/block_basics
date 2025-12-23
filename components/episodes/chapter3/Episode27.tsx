"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode27({ onComplete }) {
  const [isProven, setIsProven] = useState(false);

  return (
    <>
      <a-entity>
        {/* The Privacy Gate */}
        <a-torus-knot 
          position="0 2 -4" 
          radius="0.7" 
          tube="0.05" 
          color={isProven ? "#00ff00" : "#555"}
          animation={isProven ? "property: rotation; to: 0 360 0; dur: 5000; loop: true" : ""}
        ></a-torus-knot>

        {/* The Data Packets */}
        {!isProven && (
          <>
            <a-box position="-1.5 0.5 -2" scale="0.3 0.3 0.3" color="red" onClick={() => alert("Exposed! You revealed your private data.")}>
              <a-text value="RAW DATA" align="center" position="0 0.5 0" width="3"></a-text>
            </a-box>
            <a-box position="1.5 0.5 -2" scale="0.3 0.3 0.3" color="#00f2ff" onClick={() => setIsProven(true)}>
              <a-text value="ZK-PROOF" align="center" position="0 0.5 0" width="3"></a-text>
            </a-box>
          </>
        )}
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: Zero Knowledge</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {isProven ? "Verification successful. Privacy preserved." : "The gate requires proof of age. Use a ZK-Proof to verify without revealing your birthday."}
        </p>
        {isProven && (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00ff00] text-black font-black text-[10px] uppercase shadow-[0_0_15px_#00ff00]">
            Pass Through Gate
          </button>
        )}
      </div>
    </>
  );
}
