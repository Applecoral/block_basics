"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode13({ onComplete }: Props) {
  const [sequence, setSequence] = useState<number[]>([]);
  const target = [0, 1, 2];
  const isCorrect = JSON.stringify(sequence) === JSON.stringify(target);

  const addStep = (i: number) => {
    if (isCorrect) return;
    const next = [...sequence, i];
    if (target[next.length - 1] === i) {
      setSequence(next);
      if (next.length === 3) setTimeout(onComplete, 1500);
    } else {
      setSequence([]); // Reset on error
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#00f2ff] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(0,242,255,0.2)] space-y-4">
        <h2 className="text-[#00f2ff] text-xs uppercase font-black tracking-widest text-center">
          PROTOCOL: EVM GLOBAL STATE
        </h2>
        <p className="text-white/40 text-[9px] text-center mb-4">
          {isCorrect
            ? "State transition confirmed by all nodes."
            : "The World Computer must reach consensus. Click the Cores in order: 1, 2, 3."}
        </p>

        <div className="flex justify-between w-full">
          {[0, 1, 2].map(i => (
            <button
              key={i}
              onClick={() => addStep(i)}
              className={`w-16 h-16 rounded-full text-white font-bold text-xl 
                ${sequence.includes(i) ? "bg-[#00ff00]" : "bg-[#00f2ff]"} 
                hover:scale-105 transition-transform`}
            >
              {i + 1}
            </button>
          ))}
        </div>

        {isCorrect && (
          <button
            onClick={onComplete}
            className="mt-4 px-6 py-3 bg-[#00ff00] text-black font-black text-xs uppercase tracking-widest shadow-[0_0_15px_#00ff00]"
          >
            Construct Next State →
          </button>
        )}
      </div>
    </div>
  );
}
