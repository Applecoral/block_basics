"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode26({ onComplete }: Props) {
  const [touched, setTouched] = useState([false, false, false]);
  const allSynced = touched.every(t => t);

  const toggleEcosystem = (index: number) => {
    const next = [...touched];
    next[index] = true;
    setTouched(next);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-[#ff00ff] text-sm font-bold uppercase mb-4 text-center">Protocol: Omni-chain Sync</h2>

      <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
        {allSynced
          ? "Network mesh active. Data is universal."
          : "Activate cross-chain communications. Tap each ecosystem to link them."}
      </p>

      <div className="flex gap-4 mb-4">
        <button
          disabled={touched[0]}
          onClick={() => toggleEcosystem(0)}
          className={`px-4 py-2 border-2 uppercase text-[10px] font-bold ${
            touched[0] ? "border-gray-600 text-gray-600" : "border-[#627EEA] text-[#627EEA]"
          }`}
        >
          ETH
        </button>

        <button
          disabled={touched[1]}
          onClick={() => toggleEcosystem(1)}
          className={`px-4 py-2 border-2 uppercase text-[10px] font-bold ${
            touched[1] ? "border-gray-600 text-gray-600" : "border-[#0052FF] text-[#0052FF]"
          }`}
        >
          BASE
        </button>

        <button
          disabled={touched[2]}
          onClick={() => toggleEcosystem(2)}
          className={`px-4 py-2 border-2 uppercase text-[10px] font-bold ${
            touched[2] ? "border-gray-600 text-gray-600" : "border-[#14F195] text-[#14F195]"
          }`}
        >
          SOL
        </button>
      </div>

      {allSynced && (
        <button
          onClick={onComplete}
          className="px-6 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase"
        >
          Verify Global Mesh
        </button>
      )}
    </div>
  );
}
