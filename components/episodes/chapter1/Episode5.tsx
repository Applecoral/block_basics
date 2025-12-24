"use client";
import { useState } from "react";

interface Props {
  onComplete: () => void;
}

export default function Episode5({ onComplete }: Props) {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const requiredSequence = [1, 2, 3];
  const isSynced = JSON.stringify(activeNodes) === JSON.stringify(requiredSequence);

  const handleSelect = (id: number) => {
    if (isSynced) return;

    const nextExpected = requiredSequence[activeNodes.length];

    if (id !== nextExpected) {
      setActiveNodes([]);
      return;
    }

    setActiveNodes([...activeNodes, id]);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md border border-white/10 p-6 bg-[#050505]">
        {/* Episode Explainer */}
        <p className="text-[#ff00ff] text-[10px] tracking-widest mb-2 font-black uppercase text-center">
          EPISODE 5: ESTABLISH HANDSHAKE
        </p>
        <p className="text-white/50 text-[9px] mb-6 text-center">
          In this challenge, you are connecting multiple network nodes. Activate the nodes in the correct sequence to bridge the streams and synchronize the network successfully.
        </p>

        <h1 className="text-xs tracking-widest text-[#ff00ff] font-bold mb-2">HANDSHAKE PROTOCOL</h1>
        <p className="text-white/40 text-xs mb-6">Activate nodes in the correct sequence to bridge the streams.</p>

        <div className="space-y-3 mb-6">
          <button
            onClick={() => handleSelect(1)}
            className="w-full py-3 border border-white/10 hover:border-[#ff00ff] transition"
          >
            SYNCH_01
          </button>

          <button
            onClick={() => handleSelect(2)}
            className="w-full py-3 border border-white/10 hover:border-[#ff00ff] transition"
          >
            ENCR_02
          </button>

          <button
            onClick={() => handleSelect(3)}
            className="w-full py-3 border border-white/10 hover:border-[#ff00ff] transition"
          >
            VALI_03
          </button>
        </div>

        {!isSynced ? (
          <p className="text-xs text-white/30 text-center">
            Sequence progress {activeNodes.length} of 3
          </p>
        ) : (
          <>
            <p className="text-xs text-[#ff00ff] mb-4 text-center">
              Bridge established. Nodes synchronized successfully.
            </p>
            <button
              onClick={onComplete}
              className="w-full py-3 bg-[#ff00ff] text-black font-bold tracking-widest text-xs"
            >
              HANDSHAKE COMPLETE
            </button>
          </>
        )}
      </div>
    </div>
  );
}
