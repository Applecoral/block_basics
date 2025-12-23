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
    <>
      <a-entity>
        {/* EVM Cores */}
        {[ -1.5, 0, 1.5 ].map((x, i) => (
          <a-torus 
            key={i}
            position={`${x} 1.5 -4`} 
            radius="0.4" 
            tube="0.05" 
            color={sequence.includes(i) ? "#00ff00" : "#00f2ff"}
            onClick={() => addStep(i)}
            animation={`property: rotation; to: 0 360 0; dur: ${2000 - (i * 500)}; loop: true; easing: linear`}
          >
            <a-text value={`${i + 1}`} position="0 0 0.2" align="center" color="white"></a-text>
          </a-torus>
        ))}
        
        <a-text 
          value={isCorrect ? "EXECUTION SYNCED" : "SYNCHRONIZE CORES"} 
          position="0 2.8 -4" align="center" color={isCorrect ? "#00ff00" : "#ff00ff"} width="4"
        ></a-text>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold">Protocol: EVM Global State</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {isCorrect ? "State transition confirmed by all nodes." : "The World Computer must reach consensus. Click the Cores in order: 1, 2, 3."}
        </p>
        {isCorrect && (
          <div className="text-[#00ff00] font-mono text-xs animate-bounce">CONSTRUCTING NEXT STATE...</div>
        )}
      </div>
    </>
  );
}
