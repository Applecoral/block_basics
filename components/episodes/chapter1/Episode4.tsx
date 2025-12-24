"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode4({ onComplete }: Props) {
  const [activeRoute, setActiveRoute] = useState<number[]>([]);
  const requiredRoute = [1, 2, 3];
  const isComplete = JSON.stringify(activeRoute) === JSON.stringify(requiredRoute);

  const handleNodeClick = (id: number) => {
    if (isComplete) return;
    // Reset if clicking an already active node, otherwise add to path
    if (activeRoute.includes(id)) {
      setActiveRoute([]);
    } else {
      setActiveRoute([...activeRoute, id]);
    }
  };

  return (
    <>
      <a-entity>
        {/* Environment */}
        <a-plane rotation="-90 0 0" width="100" height="100" color="#020202"></a-plane>
        <a-light type="ambient" color="#222"></a-light>
        <a-light type="point" position="0 5 -5" intensity="0.8" color="#00f2ff"></a-light>

        {/* Central Uplink Tower */}
        <a-entity position="0 0 -8">
          <a-box scale="1.2 5 1.2" material="color: #0a0a0a; metalness: 0.9; roughness: 0.1">
            <a-box 
              scale="0.6 0.2 0.6" 
              position="0 2 0.35" 
              material={`color: ${isComplete ? '#00f2ff' : '#ff00ff'}; emissive: ${isComplete ? '#00f2ff' : '#ff00ff'}; emissiveIntensity: 2`}
              animation="property: opacity; from: 1; to: 0.3; dir: alternate; loop: true; dur: 800"
            ></a-box>
          </a-box>
          <a-text value="CORE_UPLINK" position="0 3 0.7" align="center" width="4" font="mozillavr" color={isComplete ? "#00f2ff" : "#ff00ff"}></a-text>
        </a-entity>

        {/* Server Station ALPHA (Node 1) */}
        <a-entity 
          class="clickable" 
          position="-4 0 -5" 
          onClick={() => handleNodeClick(1)}
        >
          <a-box 
            scale="1 3 1" 
            material={`color: ${activeRoute.includes(1) ? '#00f2ff' : '#111'}; emissive: ${activeRoute.includes(1) ? '#00f2ff' : '#000'}; emissiveIntensity: 0.5; metalness: 0.8`}
          >
            <a-text value="ALPHA" position="0 1.8 0.51" align="center" width="3" color="#fff"></a-text>
            <a-rect width="0.8" height="0.05" position="0 1 0.52" material={`color: ${activeRoute.includes(1) ? '#fff' : '#00f2ff'}; emissive: #00f2ff`}></a-rect>
          </a-box>
        </a-entity>

        {/* Server Station BETA (Node 2) */}
        <a-entity 
          class="clickable" 
          position="0 0 -4" 
          onClick={() => handleNodeClick(2)}
        >
          <a-box 
            scale="1 3 1" 
            material={`color: ${activeRoute.includes(2) ? '#00f2ff' : '#111'}; emissive: ${activeRoute.includes(2) ? '#00f2ff' : '#000'}; emissiveIntensity: 0.5; metalness: 0.8`}
          >
            <a-text value="BETA" position="0 1.8 0.51" align="center" width="3" color="#fff"></a-text>
            <a-rect width="0.8" height="0.05" position="0 1 0.52" material={`color: ${activeRoute.includes(2) ? '#fff' : '#00f2ff'}; emissive: #00f2ff`}></a-rect>
          </a-box>
        </a-entity>

        {/* Server Station GAMMA (Node 3) */}
        <a-entity 
          class="clickable" 
          position="4 0 -5" 
          onClick={() => handleNodeClick(3)}
        >
          <a-box 
            scale="1 3 1" 
            material={`color: ${activeRoute.includes(3) ? '#00f2ff' : '#111'}; emissive: ${activeRoute.includes(3) ? '#00f2ff' : '#000'}; emissiveIntensity: 0.5; metalness: 0.8`}
          >
            <a-text value="GAMMA" position="0 1.8 0.51" align="center" width="3" color="#fff"></a-text>
            <a-rect width="0.8" height="0.05" position="0 1 0.52" material={`color: ${activeRoute.includes(3) ? '#fff' : '#00f2ff'}; emissive: #00f2ff`}></a-rect>
          </a-box>
        </a-entity>

        {/* Connection Flux Lines */}
        {activeRoute.map((nodeId, idx) => {
          if (idx === 0) return null;
          const prev = activeRoute[idx - 1];
          const posMap: any = { 1: "-4 1.5 -5", 2: "0 1.5 -4", 3: "4 1.5 -5" };
          return (
            <a-entity 
              key={idx} 
              line={`start: ${posMap[prev]}; end: ${posMap[nodeId]}; color: #00f2ff`}
              animation="property: components.line.material.opacity; from: 0.1; to: 1; dir: alternate; loop: true; dur: 400"
            ></a-entity>
          );
        })}
      </a-entity>

      {/* 2D HUD */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-end pb-12 pointer-events-none">
        <div className="pointer-events-auto bg-[#050505]/95 border-b-4 border-[#00f2ff] p-6 w-80 shadow-[0_20px_50px_rgba(0,242,255,0.2)] backdrop-blur-md">
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-[#00f2ff] text-[10px] tracking-[0.3em] font-black uppercase">P2P_ROUTING_OVERRIDE</p>
              <p className="text-white/20 text-[8px] font-mono">CURSOR: ACTIVE</p>
            </div>
            <div className="flex gap-1">
               {[1,2,3].map(i => (
                 <div key={i} className={`w-1.5 h-1.5 rotate-45 transition-all duration-300 ${activeRoute.length >= i ? 'bg-[#00f2ff] shadow-[0_0_8px_#00f2ff]' : 'bg-white/10'}`} />
               ))}
            </div>
          </div>
          
          <p className="text-white/50 text-[10px] uppercase leading-relaxed mb-6 font-mono">
            Packet sequence corruption detected. <br/>
            Bridge servers: <span className="text-white font-bold tracking-widest">A → B → C</span>
          </p>
          
          {!isComplete ? (
            <button 
              onClick={() => setActiveRoute([])}
              className="w-full text-[#ff00ff] text-[9px] uppercase tracking-widest py-3 border border-[#ff00ff]/30 hover:bg-[#ff00ff]/10 transition-all font-bold"
            >
              Reset Signal Path
            </button>
          ) : (
            <button 
              onClick={onComplete} 
              className="w-full py-4 bg-[#00f2ff] text-black font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(0,242,255,0.6)] animate-pulse"
            >
              Uplink Established →
            </button>
          )}
        </div>
      </div>
    </>
  );
}
