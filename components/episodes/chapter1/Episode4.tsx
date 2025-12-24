"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode4({ onComplete }: Props) {
  const [activeRoute, setActiveRoute] = useState<number[]>([]);
  const requiredRoute = [1, 2, 3];
  const isComplete = JSON.stringify(activeRoute) === JSON.stringify(requiredRoute);

  const handleNodeClick = (id: number) => {
    if (isComplete) return;
    if (activeRoute.includes(id)) {
      setActiveRoute([]); // Reset if they click the same one
    } else {
      setActiveRoute([...activeRoute, id]);
    }
  };

  return (
    <>
      <a-entity>
        {/* Environment: Dark Floor */}
        <a-plane rotation="-90 0 0" width="100" height="100" color="#020202"></a-plane>

        {/* Central Uplink Tower */}
        <a-entity position="0 0 -6">
          <a-box scale="1 4 1" color="#111" metalness="1" roughness="0.2">
            <a-rect width="0.5" height="3" position="0 0 0.51" material="color: #001122"></a-rect>
          </a-box>
          {/* Pulsing Core Light */}
          <a-sphere position="0 3.5 0" radius="0.2" color="#ff00ff" 
            animation="property: light.intensity; from: 5; to: 10; dir: alternate; loop: true; dur: 1000"
            light="type: point; color: #ff00ff; intensity: 2; distance: 10">
          </a-sphere>
        </a-entity>

        {/* Node 1: Left Rack */}
        <a-entity position="-3 0 -4" onClick={() => handleNodeClick(1)}>
          <a-box scale="0.8 2.5 0.8" color={activeRoute.includes(1) ? "#00f2ff" : "#111"}>
            <a-text value="STATION_A" position="0 1.5 0" align="center" width="3" color="#fff"></a-text>
          </a-box>
          <a-sphere radius="0.1" position="0 2.2 0" material={`emissive: ${activeRoute.includes(1) ? '#00f2ff' : '#333'}; emissiveIntensity: 2`}></a-sphere>
        </a-entity>

        {/* Node 2: Back Rack */}
        <a-entity position="0 0 -9" onClick={() => handleNodeClick(2)}>
          <a-box scale="0.8 2.5 0.8" color={activeRoute.includes(2) ? "#00f2ff" : "#111"}>
            <a-text value="STATION_B" position="0 1.5 0" align="center" width="3" color="#fff"></a-text>
          </a-box>
          <a-sphere radius="0.1" position="0 2.2 0" material={`emissive: ${activeRoute.includes(2) ? '#00f2ff' : '#333'}; emissiveIntensity: 2`}></a-sphere>
        </a-entity>

        {/* Node 3: Right Rack */}
        <a-entity position="3 0 -4" onClick={() => handleNodeClick(3)}>
          <a-box scale="0.8 2.5 0.8" color={activeRoute.includes(3) ? "#00f2ff" : "#111"}>
            <a-text value="STATION_C" position="0 1.5 0" align="center" width="3" color="#fff"></a-text>
          </a-box>
          <a-sphere radius="0.1" position="0 2.2 0" material={`emissive: ${activeRoute.includes(3) ? '#00f2ff' : '#333'}; emissiveIntensity: 2`}></a-sphere>
        </a-entity>

        {/* Connection Lines (Cables) */}
        {activeRoute.map((nodeId, idx) => {
          if (idx === 0) return null;
          const prev = activeRoute[idx - 1];
          const posMap: any = { 1: "-3 1 -4", 2: "0 1 -9", 3: "3 1 -4" };
          return (
            <a-entity key={idx} line={`start: ${posMap[prev]}; end: ${posMap[nodeId]}; color: #00f2ff; opacity: 1`}></a-entity>
          );
        })}
      </a-entity>

      {/* 2D CYBER HUD */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-end pb-12 pointer-events-none">
        <div className="pointer-events-auto bg-[#050505]/95 border-b-4 border-[#ff00ff] p-6 w-80 shadow-[0_20px_50px_rgba(255,0,255,0.1)]">
          <div className="flex justify-between items-center mb-4">
            <p className="text-[#ff00ff] text-[10px] tracking-widest font-black">MANUAL_ROUTING</p>
            <div className="flex gap-1">
               {[1,2,3].map(i => (
                 <div key={i} className={`w-2 h-2 rounded-full ${activeRoute.length >= i ? 'bg-[#00f2ff]' : 'bg-white/10'}`} />
               ))}
            </div>
          </div>
          
          <p className="text-white/40 text-[9px] uppercase leading-relaxed mb-6">
            Sequence error. Manually route packet from <br/>
            <span className="text-white">A → B → C</span> to stabilize the broadcast.
          </p>
          
          {!isComplete ? (
            <div className="flex flex-col gap-2">
              <button 
                onClick={() => setActiveRoute([])}
                className="text-[#ff00ff] text-[9px] uppercase tracking-widest py-2 border border-[#ff00ff]/20 hover:bg-[#ff00ff]/10 transition-all"
              >
                Clear Signal Path
              </button>
            </div>
          ) : (
            <button 
              onClick={onComplete} 
              className="w-full py-4 bg-[#00f2ff] text-black font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_20px_#00f2ff]"
            >
              Route Verified →
            </button>
          )}
        </div>
      </div>
    </>
  );
}
