"use client";
import { useState, useRef } from "react";

interface Props { onComplete: () => void; }

export default function Episode2({ onComplete }: Props) {
  const [inputHash, setInputHash] = useState("");
  const GENESIS_HASH = "0000X9"; // The target from Episode1
  const isLinked = inputHash.toUpperCase() === GENESIS_HASH;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div 
        onClick={handleContainerClick}
        className="bg-black/90 border-2 border-[#00f2ff] p-6 flex flex-col items-center shadow-[0_0_30px_rgba(0,242,255,0.2)] cursor-text active:scale-95 transition-transform"
      >
        {/* Episode Explainer */}
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 font-black uppercase">
          EPISODE 2: LINK THE NEXT BLOCK
        </p>
        <p className="text-white/50 text-[9px] mb-4 text-center max-w-xs">
          To continue building the chain, you must link Block 2 to the Genesis Block.
          Enter the previous block's hash exactly as shown to secure the next block.
        </p>

        {/* Show previous hash */}
        <p className="text-[#ff00ff] text-[10px] mb-2 font-mono uppercase tracking-wider">
          Previous Hash: {GENESIS_HASH}
        </p>

        {/* Input */}
        <input 
          ref={inputRef}
          type="text" 
          placeholder="Type the previous hash here..." 
          className="bg-transparent border-b-2 border-[#00f2ff] text-[#00f2ff] p-2 w-64 text-center focus:outline-none font-mono"
          onChange={(e) => setInputHash(e.target.value)}
          autoFocus
        />

        {/* Hint */}
        {!isLinked && (
          <p className="text-[9px] text-[#00f2ff]/50 mt-2 uppercase tracking-[0.2em]">
            Hint: Use the hash displayed above
          </p>
        )}

        {/* Confirm button */}
        {isLinked && (
          <button 
            onClick={onComplete} 
            className="mt-6 px-8 py-2 bg-[#00f2ff] text-black font-black text-xs tracking-tighter animate-bounce"
          >
            BLOCK 2 SECURED →
          </button>
        )}
      </div>
    </div>
  );
}
