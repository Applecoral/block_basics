"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode27({ onComplete }: Props) {
  const [isProven, setIsProven] = useState(false);

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-[#00f2ff] text-sm font-bold uppercase mb-4 text-center">Protocol: Zero Knowledge</h2>

      <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
        {isProven
          ? "Verification successful. Privacy preserved."
          : "The gate requires proof of age. Use a ZK-Proof to verify without revealing your birthday."}
      </p>

      {!isProven ? (
        <div className="flex gap-4 mb-4">
          <button
            onClick={() => alert("Exposed! You revealed your private data.")}
            className="px-4 py-2 border-2 border-red-500 text-red-500 font-bold text-[10px] uppercase"
          >
            RAW DATA
          </button>

          <button
            onClick={() => setIsProven(true)}
            className="px-4 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase"
          >
            ZK-PROOF
          </button>
        </div>
      ) : (
        <button
          onClick={onComplete}
          className="px-6 py-2 bg-[#00ff00] text-black font-black text-[10px] uppercase shadow-[0_0_15px_#00ff00]"
        >
          Pass Through Gate
        </button>
      )}
    </div>
  );
}
