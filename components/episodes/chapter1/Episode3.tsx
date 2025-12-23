"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode3({ onComplete }: Props) {
  const [nonce, setNonce] = useState(0);
  const TARGET_NONCE = 7; // The magic number to "validate" the block
  const isSynced = nonce === TARGET_NONCE;

  return (
    <>
      <a-entity>
        {/* The Main Server Rack */}
        <a-box 
          position="0 1.5 -4" 
          scale="1.5 3 0.5" 
          material={`color: #111; metalness: 0.8; roughness: 0.2`}
        >
          {/* Server Status Lights */}
          <a-sphere 
            position="0.4 1 0.3" radius="0.05" 
            material={`color: ${isSynced ? '#00ff00' : '#ff0000'}; emissive: ${isSynced ? '#00ff00' : '#ff0000'}`}
            animation="property: opacity; from: 1; to: 0.2; dir: alternate; loop: true; dur: 500"
          ></a-sphere>
          
          {/* Internal Components (Glow) */}
          <a-box 
            scale="0.8 0.1 0.1" position="0 0.5 0.26" 
            material={`color: ${isSynced ? '#00f2ff' : '#ff3300'}; emissive: ${isSynced ? '#00f2ff' : '#ff3300'}`}
          ></a-box>
        </a-box>

        {/* Ambient Server Room Floor */}
        <a-plane rotation="-90 0 0" width="20" height="20" color="#050505"></a-plane>
        
        {/* Holographic Text */}
        <a-text 
          value={isSynced ? "SYSTEM SYNCED" : "CRITICAL ERROR: DATA MISMATCH"} 
          position="0 3.5 -4" align="center" width="4" color={isSynced ? "#00f2ff" : "#ff3300"}
        ></a-text>
      </a-entity>

      {/* 2D CYBER HUD */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-end pb-12 pointer-events-none">
        <div className="pointer-events-auto bg-[#0a0a0a]/95 border-l-4 border-[#00f2ff] p-6 w-80 shadow-[20px_0_50px_rgba(0,242,255,0.1)]">
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
    </>
  );
}
