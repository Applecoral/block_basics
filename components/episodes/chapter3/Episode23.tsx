"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode23({ onComplete }: Props) {
  const [sponsored, setSponsored] = useState(false);
  const [opened, setOpened] = useState(false);

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-[#00f2ff] text-sm font-bold uppercase mb-4 text-center">Protocol: Account Abstraction</h2>

      <p className="text-white text-[10px] text-center max-w-xs mb-6 uppercase opacity-70">
        {!sponsored
          ? "You have 0 ETH. Request a gas subsidy from the Paymaster."
          : !opened
          ? "Sponsor approved. Open the chest to interact."
          : "Transaction subsidized. UX friction zero. Rewards unlocked."}
      </p>

      {!sponsored ? (
        <button
          onClick={() => setSponsored(true)}
          className="px-6 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase mb-2"
        >
          Request Sponsorship
        </button>
      ) : !opened ? (
        <button
          onClick={() => setOpened(true)}
          className="px-6 py-2 bg-[#ff00ff] text-white font-black text-[10px] uppercase mb-2"
        >
          Open Chest (0 ETH)
        </button>
      ) : (
        <button
          onClick={onComplete}
          className="px-6 py-2 bg-[#00ff00] text-black font-black text-[10px] uppercase"
        >
          Claim Rewards
        </button>
      )}

      <div className="mt-4">
        <p className="text-yellow-400 text-[10px] uppercase">
          {!sponsored ? "Paymaster inactive." : !opened ? "Chest closed." : "Chest opened, rewards available!"}
        </p>
      </div>
    </div>
  );
}
