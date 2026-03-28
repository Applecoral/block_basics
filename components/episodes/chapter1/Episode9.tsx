"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode9({ onComplete }: Props) {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#ff00ff] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(255,0,255,0.2)] space-y-4">

        {/* Episode Explainer */}
        <p className="text-[#ff00ff] text-[10px] uppercase font-black tracking-widest text-center">
          EPISODE 9: ASYMMETRIC AUTHENTICATION
        </p>
        <p className="text-white/50 text-[9px] text-center mb-4">
          Use your private key to unlock secured data. Your public address shows your identity, but only the private key can verify it and allow you to proceed.
        </p>

        <h2 className="text-[#ff00ff] text-xs uppercase font-black tracking-widest">ASYMMETRIC_AUTH</h2>
        <p className="text-white/40 text-[9px] text-center mb-4">
          {unlocked
            ? "Identity verified. Signature valid."
            : "Your Public Address is visible, but only your Private Key can unlock the data. Click the Key below."}
        </p>

        <button
          onClick={() => setUnlocked(true)}
          disabled={unlocked}
          className={`px-6 py-3 w-full text-xs font-mono font-bold uppercase border-2 rounded transition-all ${
            unlocked
              ? "border-[#00ff00] bg-[#00ff00] text-black cursor-default"
              : "border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black"
          }`}
        >
          {unlocked ? "KEY USED" : "PRIVATE KEY"}
        </button>

        {unlocked && (
          <button
            onClick={onComplete}
            className="mt-4 w-full py-3 bg-[#00ff00] text-black font-black text-xs uppercase tracking-widest shadow-[0_0_20px_#00ff00] hover:scale-105 transition-transform"
          >
            Decrypt & Proceed →
          </button>
        )}
      </div>
    </div>
  );
}
