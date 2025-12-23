"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode4({ onComplete }: Props) {
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [nodesActive, setNodesActive] = useState(0);

  const startBroadcast = () => {
    setIsBroadcasting(true);
    // Simulate nodes receiving data at slightly different times
    [1, 2, 3].forEach((i) => {
      setTimeout(() => setNodesActive(i), i * 600);
    });
  };

  return (
    <>
      <a-entity>
        {/* Central Data Block */}
        <a-box position="0 2.5 -4" scale="0.5 0.5 0.5" color="#ff00ff" animation={isBroadcasting ? "property: rotation; to: 0 360 0; dur: 1000; loop: true" : ""}></a-box>

        {/* Distributed Nodes */}
        <a-sphere position="-2 1.5 -3" radius="0.4" color={nodesActive >= 1 ? "#00f2ff" : "#222"} shadow={nodesActive >= 1 ? "0 0 10 #00f2ff" : ""}></a-sphere>
        <a-sphere position="0 1.5 -5" radius="0.4" color={nodesActive >= 2 ? "#00f2ff" : "#222"}></a-sphere>
        <a-sphere position="2 1.5 -3" radius="0.4" color={nodesActive >= 3 ? "#00f2ff" : "#222"}></a-sphere>

        {/* Broadcast Beams */}
        {isBroadcasting && (
           <a-entity>
             <a-entity line={`start: 0 2.5 -4; end: -2 1.5 -3; color: #ff00ff; opacity: ${nodesActive >= 1 ? 1 : 0.2}`}></a-entity>
             <a-entity line={`start: 0 2.5 -4; end: 0 1.5 -5; color: #ff00ff; opacity: ${nodesActive >= 2 ? 1 : 0.2}`}></a-entity>
             <a-entity line={`start: 0 2.5 -4; end: 2 1.5 -3; color: #ff00ff; opacity: ${nodesActive >= 3 ? 1 : 0.2}`}></a-entity>
           </a-entity>
        )}
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase">Network: Distribution Phase</p>
        <p className="text-white text-xs text-center max-w-xs mb-4">
          A blockchain is only strong if the data exists everywhere. <br/>
          <b>Broadcast</b> the signal to all nodes.
        </p>
        
        {nodesActive < 3 ? (
          <button 
            disabled={isBroadcasting}
            onClick={startBroadcast} 
            className="px-6 py-2 border-2 border-[#ff00ff] text-[#ff00ff] font-bold text-xs uppercase animate-pulse"
          >
            {isBroadcasting ? "Broadcasting..." : "Start Broadcast"}
          </button>
        ) : (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00f2ff] text-black font-bold text-xs uppercase">
            Nodes Synced. Proceed.
          </button>
        )}
      </div>
    </>
  );
}
