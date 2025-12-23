"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode4({ onComplete }: Props) {
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [nodesActive, setNodesActive] = useState(0);

  const startBroadcast = () => {
    setIsBroadcasting(true);
    // Simulate nodes receiving data across the network
    [1, 2, 3].forEach((i) => {
      setTimeout(() => setNodesActive(i), i * 800);
    });
  };

  return (
    <>
      <a-entity>
        {/* Central Broadcasting Core */}
        <a-octahedron 
          position="0 2.5 -5" 
          radius="0.4" 
          material={`color: #ff00ff; emissive: #ff00ff; emissiveIntensity: ${isBroadcasting ? 2 : 0.5}`}
          animation={isBroadcasting ? "property: rotation; to: 0 360 0; dur: 2000; loop: true" : ""}
        ></a-octahedron>

        {/* Node Server Tower 1 */}
        <a-entity position="-2.5 0 -4">
          <a-box scale="0.6 2 0.6" position="0 1 0" color="#111"></a-box>
          <a-sphere radius="0.1" position="0 2.2 0" material={`color: ${nodesActive >= 1 ? '#00f2ff' : '#333'}; emissive: ${nodesActive >= 1 ? '#00f2ff' : '#000'}`}></a-sphere>
        </a-entity>

        {/* Node Server Tower 2 */}
        <a-entity position="0 0 -7">
          <a-box scale="0.6 2 0.6" position="0 1 0" color="#111"></a-box>
          <a-sphere radius="0.1" position="0 2.2 0" material={`color: ${nodesActive >= 2 ? '#00f2ff' : '#333'}; emissive: ${nodesActive >= 2 ? '#00f2ff' : '#000'}`}></a-sphere>
        </a-entity>

        {/* Node Server Tower 3 */}
        <a-entity position="2.5 0 -4">
          <a-box scale="0.6 2 0.6" position="0 1 0" color="#111"></a-box>
          <a-sphere radius="0.1" position="0 2.2 0" material={`color: ${nodesActive >= 3 ? '#00f2ff' : '#333'}; emissive: ${nodesActive >= 3 ? '#00f2ff' : '#000'}`}></a-sphere>
        </a-entity>

        {/* Holographic Broadcast Data Beams */}
        {isBroadcasting && (
           <a-entity>
             <a-entity line={`start: 0 2.5 -5; end: -2.5 2.2 -4; color: #ff00ff; opacity: ${nodesActive >= 1 ? 1 : 0.1}`}></a-entity>
             <a-entity line={`start: 0 2.5 -5; end: 0 2.2 -7; color: #ff00ff; opacity: ${nodesActive >= 2 ? 1 : 0.1}`}></a-entity>
             <a-entity line={`start: 0 2.5 -5; end: 2.5 2.2 -4; color: #ff00ff; opacity: ${nodesActive >= 3 ? 1 : 0.1}`}></a-entity>
           </a-entity>
        )}
      </a-entity>

      {/* 2D HUD OVERLAY */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-end pb-12 pointer-events-none">
        <div className="pointer-events-auto bg-black/90 border-t-2 border-[#ff00ff] p-6 w-80 text-center shadow-[0_-10px_30px_rgba(255,0,255,0.1)]">
          <p className="text-[#ff00ff] text-[10px] tracking-[0.4em] mb-2 uppercase font-black">P2P_DISTRIBUTION</p>
          <p className="text-white/60 text-[10px] mb-6 leading-relaxed">
            Data must propagate across the network. <br/>
            Initialize peer-to-peer broadcast.
          </p>
          
          {nodesActive < 3 ? (
            <button 
              disabled={isBroadcasting}
              onClick={startBroadcast} 
              className={`w-full py-4 border-2 transition-all font-bold text-xs uppercase tracking-widest ${isBroadcasting ? 'border-[#333] text-[#333]' : 'border-[#ff00ff] text-[#ff00ff] hover:bg-[#ff00ff] hover:text-black shadow-[0_0_15px_rgba(255,0,255,0.3)]'}`}
            >
              {isBroadcasting ? `Syncing [${nodesActive}/3] Nodes...` : "Initiate Broadcast"}
            </button>
          ) : (
            <button 
              onClick={onComplete} 
              className="w-full py-4 bg-[#00f2ff] text-black font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_#00f2ff] animate-pulse"
            >
              Network Synced →
            </button>
          )}
        </div>
      </div>
    </>
  );
}
