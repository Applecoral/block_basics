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

  const ecosystems = [
    { name: "ETH", color: "#627EEA" },
    { name: "BASE", color: "#2A2A2A" },
    { name: "ARB", color: "#28A0F0" }
  ];

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-[#ff00ff] text-sm font-bold uppercase mb-4 text-center">
        Protocol: Omni-chain Sync
      </h2>

      <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
        {allSynced
          ? "Network mesh active. Data is universal."
          : "Activate cross-chain communications. Tap each ecosystem to link them."}
      </p>

      <div className="flex gap-4 mb-4">
        {ecosystems.map((eco, i) => (
          <button
            key={eco.name}
            disabled={touched[i]}
            onClick={() => toggleEcosystem(i)}
            className={`px-4 py-2 border-2 uppercase text-[10px] font-bold ${
              touched[i]
                ? "border-gray-600 text-gray-600"
                : `border-[${eco.color}] text-[${eco.color}]`
            }`}
          >
            {eco.name}
          </button>
        ))}
      </div>

      {allSynced && (
        <button
          onClick={onComplete}
          className="px-6 py-2 bg-[#ff00ff] text-black font-bold text-[10px] uppercase"
        >
          Sync Complete
        </button>
      )}
    </div>
  );
}
