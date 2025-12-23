"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode30({ onComplete }) {
  const [activated, setActivated] = useState(false);

  return (
    <>
      <a-entity>
        {/* The Portal */}
        <a-torus-knot 
          position="0 1.5 -6" 
          radius="2.5" 
          tube="0.2" 
          color="#fff" 
          material="emissive: #fff; emissiveIntensity: 0.5"
          animation="property: rotation; to: 0 0 360; dur: 20000; loop: true; easing: linear"
          onClick={() => setActivated(true)}
        >
          <a-text value="THE OPEN INTERNET" position="0 0 0.5" align="center" width="8" color="#00f2ff"></a-text>
        </a-torus-knot>

        {/* Particles */}
        <a-entity 
          position="0 1.5 -6"
          particle-system="preset: stars; color: #00f2ff; size: 0.5; particleCount: 5000"
          visible={activated}
        ></a-entity>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-white text-[12px] tracking-[0.3em] mb-4 uppercase font-black text-center animate-pulse">
          CONGRATULATIONS, ON-CHAIN CITIZEN.
        </p>
        <p className="text-white/60 text-[10px] text-center max-w-sm mb-6 uppercase leading-relaxed">
          You have successfully mastered the fundamentals of the decentralized world. 
          From the Genesis block to the Superchain, you are now ready to build, trade, and govern.
        </p>
        
        {activated ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-[#00ff00] font-mono text-xs">CERTIFICATE MINTED: FID #YOUR_ID</p>
            <button onClick={() => window.location.reload()} className="px-10 py-4 bg-white text-black font-black text-sm uppercase tracking-tighter hover:bg-[#00f2ff] transition-colors">
              Restart Journey
            </button>
          </div>
        ) : (
          <button onClick={() => setActivated(true)} className="px-10 py-4 border-4 border-white text-white font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            Claim Your Sovereignty
          </button>
        )}
      </div>
    </>
  );
}
