"use client";
import { useState } from "react";

interface Props {
  onComplete: () => void;
}

export default function Episode4({ onComplete }: Props) {
  const [activeRoute, setActiveRoute] = useState<number[]>([]);
  const requiredRoute = [1, 2, 3];
  const isComplete = JSON.stringify(activeRoute) === JSON.stringify(requiredRoute);

  const handleSelect = (id: number) => {
    if (isComplete) return;

    const nextExpected = requiredRoute[activeRoute.length];

    if (id !== nextExpected) {
      setActiveRoute([]);
      return;
    }

    setActiveRoute([...activeRoute, id]);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md border border-white/10 p-6 bg-[#050505]">
        {/* Episode Explainer */}
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 font-black uppercase text-center">
          EPISODE 4: ESTABLISH NETWORK UPLINK
        </p>
        <p className="text-white/50 text-[9px] mb-6 text-center">
          In this challenge, you are routing through server nodes to bring the core uplink online.
          Select the servers in the correct sequence to stabilize the network path and confirm the uplink.
        </p>

        <h1 className="text-xs tracking-widest text-[#00f2ff] font-bold mb-2">CORE UPLINK</h1>
        <p className="text-white/40 text-xs mb-6">Route access through server nodes to bring the uplink online.</p>

        <div className="space-y-3 mb-6">
          <button
            onClick={() => handleSelect(1)}
            className="w-full py-3 border border-white/10 hover:border-[#00f2ff] transition"
          >
            SERVER ALPHA
          </button>

          <button
            onClick={() => handleSelect(2)}
            className="w-full py-3 border border-white/10 hover:border-[#00f2ff] transition"
          >
            SERVER BETA
          </button>

          <button
            onClick={() => handleSelect(3)}
            className="w-full py-3 border border-white/10 hover:border-[#00f2ff] transition"
          >
            SERVER GAMMA
          </button>
        </div>

        {!isComplete ? (
          <p className="text-xs text-white/30 text-center">
            Routing progress {activeRoute.length} of 3
          </p>
        ) : (
          <>
            <p className="text-xs text-[#00f2ff] mb-4 text-center">
              Uplink stabilized. Network path confirmed.
            </p>
            <button
              onClick={onComplete}
              className="w-full py-3 bg-[#00f2ff] text-black font-bold tracking-widest text-xs"
            >
              CONFIRM UPLINK
            </button>
          </>
        )}
      </div>
    </div>
  );
}
