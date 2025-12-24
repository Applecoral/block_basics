"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode24({ onComplete }: Props) {
  const [handle, setHandle] = useState("");
  const [linked, setLinked] = useState(false);

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-[#ff00ff] text-sm font-bold uppercase mb-4 text-center">Protocol: Farcaster ID (FID)</h2>

      <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
        {linked ? `Identity linked as @${handle}` : "You are currently anonymous. Link your handle to verify identity."}
      </p>

      {!linked && (
        <>
          <input
            type="text"
            placeholder="ENTER HANDLE..."
            value={handle}
            onChange={(e) => setHandle(e.target.value)}
            className="bg-transparent border-b-2 border-[#ff00ff] text-[#ff00ff] p-1 text-center outline-none mb-4 uppercase text-xs"
          />
          <button
            disabled={!handle}
            onClick={() => setLinked(true)}
            className="px-6 py-2 border-2 border-[#ff00ff] text-[#ff00ff] font-bold text-[10px] uppercase disabled:opacity-30 mb-2"
          >
            Link Identity
          </button>
        </>
      )}

      {linked && (
        <button
          onClick={onComplete}
          className="px-6 py-2 bg-[#00f2ff] text-black font-black text-[10px] uppercase"
        >
          Identity Verified
        </button>
      )}

      <p className="text-yellow-400 text-[10px] mt-4 uppercase">
        {linked ? "Your FID is now active on-chain." : "FID not linked."}
      </p>
    </div>
  );
}
