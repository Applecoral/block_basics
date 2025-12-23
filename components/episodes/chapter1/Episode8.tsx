"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode8({ onComplete }) {
  const [stakes, setStakes] = useState([false, false, false]);
  const allStaked = stakes.every(s => s === true);

  const toggleStake = (index) => {
    const newStakes = [...stakes];
    newStakes[index] = true;
    setStakes(newStakes);
  };

  return (
    <>
      <a-entity>
        {/* Main Block */}
        <a-box position="0 2.5 -4" color={allStaked ? "#00ff00" : "#222"} scale="0.8 0.8 0.8"></a-box>

        {/* Pedestals */}
        {[ -1.5, 0, 1.5 ].map((x, i) => (
          <a-entity key={i} position={`${x} 0.5 -3`}>
            <a-cylinder radius="0.3" height="1" color="#111" border="1px solid #00f2ff"></a-cylinder>
            <a-sphere 
              position="0 0.8 0" 
              radius="0.2" 
              color={stakes[i] ? "#00f2ff" : "#333"}
              onClick={() => toggleStake(i)}
              animation={stakes[i] ? "property: position; to: 0 1 0; dir: alternate; dur: 1000; loop: true" : ""}
            ></a-sphere>
          </a-entity>
        ))}
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold">Protocol: Proof of Stake</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {allStaked ? "Stake requirements met. Validator selected." : "Select the pedestals to stake your tokens and secure the network."}
        </p>
        {allStaked && (
          <button onClick={onComplete} className="px-6 py-2 border-2 border-[#00ff00] text-[#00ff00] font-bold text-[10px] uppercase shadow-[0_0_10px_#00ff00]">
            Confirm Stake
          </button>
        )}
      </div>
    </>
  );
}
