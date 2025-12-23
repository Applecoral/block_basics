"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode10({ onComplete }) {
  const [signed, setSigned] = useState(false);

  return (
    <>
      <a-entity>
        <a-box 
          position="0 1.5 -5" 
          width="3" height="3" depth="3" 
          color="#00f2ff" 
          material="opacity: 0.3; transparent: true; wireframe: true"
          animation="property: rotation; to: 0 360 0; loop: true; dur: 20000"
        ></a-box>
        
        <a-text 
          value={signed ? "CHAPTER 1 COMPLETE" : "GENESIS BLOCK #0"} 
          position="0 1.5 -4.5" align="center" color="white" width="6"
        ></a-text>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold">Status: Foundation Ready</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          You have mastered Hashing, Linking, Nodes, and Keys. Sign the Genesis block to enter the world of Smart Contracts.
        </p>
        {!signed ? (
          <button onClick={() => setSigned(true)} className="px-8 py-3 bg-[#ff00ff] text-white font-black text-xs uppercase tracking-widest shadow-[0_0_20px_#ff00ff]">
            Sign Genesis Block
          </button>
        ) : (
          <button onClick={onComplete} className="px-8 py-3 bg-white text-black font-black text-xs uppercase tracking-widest">
            Enter Chapter 2
          </button>
        )}
      </div>
    </>
  );
}
