"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode14({ onComplete }: Props) {
  const [solved, setSolved] = useState(false);

  return (
    <>
      <a-entity>
        {/* The Contract Scroll */}
        <a-plane position="0 1.8 -3" width="3" height="2" color="#111" material="opacity: 0.9">
          <a-text 
            value="function transfer() public {\n  require(balance >= amt);\n  balance -= ____;\n}" 
            position="0 0 0.1" align="center" width="2.5" color="#00f2ff" font="mozillavr"
          ></a-text>
        </a-plane>

        {/* Choice Blocks */}
        <a-box 
          position="-1 0.5 -2" scale="0.4 0.4 0.4" color="#ff00ff"
          onClick={() => alert("Incorrect logic. Try again.")}
        >
          <a-text value="ETH" align="center" position="0 0 0.6" width="4"></a-text>
        </a-box>

        <a-box 
          position="1 0.5 -2" scale="0.4 0.4 0.4" color="#00ff00"
          onClick={() => { setSolved(true); setTimeout(onComplete, 1500); }}
        >
          <a-text value="AMT" align="center" position="0 0 0.6" width="4"></a-text>
        </a-box>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#ff00ff] text-[10px] tracking-widest mb-2 uppercase font-bold">Compiler: Solidity 0.8.x</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {solved ? "Compilation successful. Code is valid." : "Smart contracts use strict logic. Which variable completes the subtraction? Click the correct block."}
        </p>
      </div>
    </>
  );
}
