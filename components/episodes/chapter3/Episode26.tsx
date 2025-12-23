"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode26({ onComplete }) {
  const [touched, setTouched] = useState([false, false, false]);
  const allSynced = touched.every(t => t);

  return (
    <>
      <a-entity>
        {/* The Three Ecosystems */}
        <a-sphere position="-2 1.5 -4" radius="0.7" color="#627EEA" opacity="0.6" onClick={() => setTouched([true, touched[1], touched[2]])}>
          <a-text value="ETH" position="0 1 0" align="center"></a-text>
        </a-sphere>
        
        <a-sphere position="0 2.5 -5" radius="0.7" color="#0052FF" opacity="0.6" onClick={() => setTouched([touched[0], true, touched[2]])}>
          <a-text value="BASE" position="0 1 0" align="center"></a-text>
        </a-sphere>

        <a-sphere position="2 1.5 -4" radius="0.7" color="#14F195" opacity="0.6" onClick={() => setTouched([touched[0], touched[1], true])}>
          <a-text value="SOL" position="0 1 0" align="center"></a-text>
        </a-sphere>

        {/* Sync Lines */}
        {touched[0] && touched[1] && <a-entity line="start: -2 1.5 -4; end: 0 2.5 -5; color: white"></a-entity>}
        {touched[1] && touched[2] && <a-entity line="start: 0 2.5 -5; end: 2 1.5 -4; color: white"></a-entity>}
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#ff00ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: Omni-chain sync</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {allSynced ? "Network mesh active. Data is universal." : "Tap each ecosystem to establish a cross-chain communications link."}
        </p>
        {allSynced && (
          <button onClick={onComplete} className="px-6 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase">
            Verify Global Mesh
          </button>
        )}
      </div>
    </>
  );
}
