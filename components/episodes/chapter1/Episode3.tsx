"use client";
import { useState, useRef } from "react";

interface Props { onComplete: () => void; }

export default function Episode3({ onComplete }: Props) {
  const [nonce, setNonce] = useState(0);
  const TARGET_NONCE = 7; // The magic number to validate the block
  const isSynced = nonce === TARGET_NONCE;

  const containerRef = useRef<HTMLDivElement>(null);

  const handleContainerClick = () => {
    containerRef.current?.focus();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div
        ref={containerRef}
        onClick={handleContainerClick}
        className="bg-black/90 border-2 border-[#00f2ff] p-6 flex flex-col items-center shadow-[0_0_30px_rgba(0,242,255,0.2)] cursor-pointer active:scale-95 transition-transform"
        tabIndex={0}
      >
        {/* Episode Explainer */}
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 font-black uppercase text-center">
          EPISODE 3: VALIDATE THE BLOCK
        </p>
        <p className="text-white/50 text-[9px] mb-6 text-center max-w-xs">
          In this episode, you act as a miner. Adjust the Nonce value until it matches the network's target.
          Once the correct Nonce is found, the block can be uploaded to the mainnet. This simulates proof-of-work.
        </p>

        <h2 className="text-[#00f2ff] font-mono text-xs tracking-tighter mb-1">NODE_STATION_03</h2>
        <p className="text-white/40 text-[10px] uppercase mb-6 tracking-[0.2em]">Adjust Nonce to match Network Target</p>

        <div className="flex items-center justify-between gap-4 mb-8">
          <button 
            onClick={() => setNonce(n => Math.max(0, n - 1))}
            className="w-12 h-12 border border-[#00f2ff] text-[#00f2ff] hover:bg-[#00f2ff] hover:text-black transition-all font-bold"
          > - </button>
          
          <div className="text-center">
            <span className="text-4xl font-black text-white font-mono">{nonce}</span>
            <p className="text-[10px] text-white/30">CURRENT_NONCE</p>
          </div>

          <button 
            onClick={() => setNonce(n => n + 1)}
            className="w-12 h-12 border border-[#00f2ff] text-[#00f2ff] hover:bg-[#00f2ff] hover:text-black transition-all font-bold"
          > + </button>
        </div>

        {isSynced ? (
          <button 
            onClick={onComplete}
            className="w-full py-4 bg-[#00f2ff] text-black font-black text-xs uppercase tracking-widest shadow-[0_0_20px_rgba(0,242,255,0.5)]"
          >
            UPLOAD TO MAINNET
          </button>
        ) : (
          <div className="text-[#ff3300] text-[10px] text-center font-mono animate-pulse">
            [ WAITING FOR VALID NONCE... ]
          </div>
        )}
      </div>
    </div>
  );
}
