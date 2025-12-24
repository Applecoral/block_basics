"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode7({ onComplete }: Props) {
  const [hashPower, setHashPower] = useState(0);
  const targetPower = 100;
  const isMined = hashPower >= targetPower;

  const mineFragment = () => {
    if (isMined) return;
    setHashPower(prev => Math.min(prev + 10, targetPower));
  };

  return (
    <>
      <a-entity>
        {/* Environment: Mining Rig Interior */}
        <a-light type="ambient" color="#111"></a-light>
        <a-light type="point" position="0 2 -2" intensity="1" color={isMined ? "#FFD700" : "#ff00ff"}></a-light>

        {/* Central Block Core */}
        <a-entity position="0 1.6 -4">
          <a-box 
            scale="1 1 1" 
            material={`shader: flat; color: ${isMined ? '#FFD700' : '#222'}; wireframe: true`}
            animation="property: rotation; to: 360 360 0; loop: true; dur: 8000; easing: linear"
          >
            {/* The "Golden" Core that fills up */}
            <a-box 
              scale={`${hashPower/100} ${hashPower/100} ${hashPower/100}`}
              material={`color: ${isMined ? '#FFD700' : '#ff00ff'}; emissive: ${isMined ? '#FFD700' : '#ff00ff'}; emissiveIntensity: 0.5`}
            ></a-box>
          </a-box>
          
          <a-text 
            value={isMined ? "BLOCK_SOLVED" : "COMPUTING_HASH..."} 
            position="0 1.2 0" align="center" width="4" color="#fff"
          ></a-text>
        </a-entity>

        {/* INTERACTIVE HASH FRAGMENTS (Floating Targets) */}
        {!isMined && (
          <>
            {/* We create several targets. Clicking any of them mines the block */}
            <a-entity class="clickable" position="-1.5 2 -3" onClick={mineFragment}>
              <a-tetrahedron radius="0.2" material="color: #ff00ff; shader: flat"
                animation="property: position; y: 2.2; dir: alternate; loop: true; dur: 1000"></a-tetrahedron>
            </a-entity>

            <a-entity class="clickable" position="1.5 1 -3" onClick={mineFragment}>
              <a-tetrahedron radius="0.2" material="color: #ff00ff; shader: flat"
                animation="property: position; y: 1.2; dir: alternate; loop: true; dur: 1200"></a-tetrahedron>
            </a-entity>

            <a-entity class="clickable" position="0 2.5 -3.5" onClick={mineFragment}>
              <a-tetrahedron radius="0.2" material="color: #ff00ff; shader: flat"
                animation="property: position; y: 2.7; dir: alternate; loop: true; dur: 800"></a-tetrahedron>
            </a-entity>
          </>
        )}
      </a-entity>

      {/* 2D HUD OVERLAY */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-end pb-12 pointer-events-none">
        <div className="pointer-events-auto bg-black/90 border-t-2 border-[#FFD700] p-6 w-80 backdrop-blur-md shadow-[0_-20px_50px_rgba(255,215,0,0.1)]">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[#FFD700] text-[10px] tracking-[0.3em] font-black uppercase">PROOF_OF_WORK</p>
            <p className="text-white text-[10px] font-mono">{hashPower}%</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-1 bg-white/10 mb-6">
            <div 
              className="h-full bg-[#FFD700] transition-all duration-200" 
              style={{ width: `${hashPower}%` }}
            ></div>
          </div>
          
          <p className="text-white/50 text-[10px] uppercase leading-relaxed mb-6 font-mono text-center">
            {isMined 
              ? "Nonce found. Block hash verified by network." 
              : "Intercept floating hash fragments to provide computational power."}
          </p>
          
          {isMined ? (
            <button 
              onClick={onComplete} 
              className="w-full py-4 bg-[#FFD700] text-black font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_#FFD700]"
            >
              Claim Block Reward →
            </button>
          ) : (
            <div className="flex justify-center items-center gap-3">
               <div className="w-2 h-2 bg-[#FFD700] animate-ping rounded-full"></div>
               <span className="text-[#FFD700] text-[9px] uppercase tracking-widest font-bold">Solving Cryptographic Puzzle...</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
