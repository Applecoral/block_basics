"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode4({ onComplete }: Props) {
  const [activeRoute, setActiveRoute] = useState<number[]>([]);
  const requiredRoute = [1, 2, 3];
  const isComplete = JSON.stringify(activeRoute) === JSON.stringify(requiredRoute);

  const handleNodeClick = (id: number) => {
    if (isComplete) return;
    // Simple logic: If it's already in the path, clear all. Otherwise, add it.
    if (activeRoute.includes(id)) {
      setActiveRoute([]);
    } else {
      setActiveRoute([...activeRoute, id]);
    }
  };

  return (
    <>
      {/* 3D SCENE CONTENT */}
      <a-entity>
        {/* Floor Grid - Purely visual */}
        <a-grid position="0 0 0" rotation="-90 0 0" width="100" height="100" color="#111" opacity="0.2"></a-grid>

        {/* Central Data Hub */}
        <a-entity position="0 2 -6">
          <a-sphere radius="0.3" material={`shader: flat; color: ${isComplete ? '#00f2ff' : '#222'}; opacity: 0.8`}>
            <a-light type="point" intensity={isComplete ? 2 : 0.5} color="#00f2ff"></a-light>
          </a-sphere>
          <a-ring radius-inner="0.4" radius-outer="0.45" rotation="90 0 0" color="#00f2ff" animation="property: rotation; to: 90 360 0; loop: true; dur: 4000; easing: linear"></a-ring>
          <a-text value={isComplete ? "SIGNAL_LOCKED" : "UPLINK_OFFLINE"} position="0 0.8 0" align="center" width="4" font="mozillavr"></a-text>
        </a-entity>

        {/* INTERACTIVE NODES (Stations) */}
        {/* ALPHA Station */}
        <a-entity position="-3 1.5 -4" class="clickable" onClick={() => handleNodeClick(1)}>
          <a-octahedron radius="0.4" material={`shader: flat; color: ${activeRoute.includes(1) ? '#00f2ff' : '#333'}; wireframe: true`}>
            <a-text value="STATION_A" position="0 -0.7 0" align="center" width="3"></a-text>
          </a-octahedron>
          {/* Decorative rotating ring */}
          <a-ring radius-inner="0.5" radius-outer="0.52" color="#00f2ff" opacity="0.3" animation="property: rotation; to: 0 0 360; loop: true; dur: 3000"></a-ring>
        </a-entity>

        {/* BETA Station */}
        <a-entity position="0 1.5 -4" class="clickable" onClick={() => handleNodeClick(2)}>
          <a-octahedron radius="0.4" material={`shader: flat; color: ${activeRoute.includes(2) ? '#00f2ff' : '#333'}; wireframe: true`}>
            <a-text value="STATION_B" position="0 -0.7 0" align="center" width="3"></a-text>
          </a-octahedron>
          <a-ring radius-inner="0.5" radius-outer="0.52" color="#00f2ff" opacity="0.3" animation="property: rotation; to: 360 0 0; loop: true; dur: 3000"></a-ring>
        </a-entity>

        {/* GAMMA Station */}
        <a-entity position="3 1.5 -4" class="clickable" onClick={() => handleNodeClick(3)}>
          <a-octahedron radius="0.4" material={`shader: flat; color: ${activeRoute.includes(3) ? '#00f2ff' : '#333'}; wireframe: true`}>
            <a-text value="STATION_C" position="0 -0.7 0" align="center" width="3"></a-text>
          </a-octahedron>
          <a-ring radius-inner="0.5" radius-outer="0.52" color="#00f2ff" opacity="0.3" animation="property: rotation; to: 0 360 0; loop: true; dur: 3000"></a-ring>
        </a-entity>

        {/* LIGHT BRIDGES (Connecting Nodes) */}
        {activeRoute.map((nodeId, idx) => {
          if (idx === 0) return null;
          const prev = activeRoute[idx - 1];
          const posMap: any = { 1: "-3 1.5 -4", 2: "0 1.5 -4", 3: "3 1.5 -4" };
          return (
            <a-entity 
              key={idx} 
              line={`start: ${posMap[prev]}; end: ${posMap[nodeId]}; color: #00f2ff; opacity: 1`}
            ></a-entity>
          );
        })}
      </a-entity>

      {/* 2D HUD OVERLAY */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-end pb-10 pointer-events-none">
        <div className="pointer-events-auto bg-black/80 border border-[#00f2ff]/30 backdrop-blur-md p-6 w-72 text-center">
          <p className="text-[#00f2ff] text-[10px] tracking-[0.4em] mb-2 font-black">PROTOCOL_04</p>
          <p className="text-white/40 text-[9px] uppercase mb-6 tracking-widest">
            Establish Peer-to-Peer Relay:<br/>
            <span className="text-white">A → B → C</span>
          </p>

          {!isComplete ? (
            <div className="h-10 flex items-center justify-center">
               <div className="flex gap-2">
                  {requiredRoute.map((_, i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${activeRoute.length > i ? 'bg-[#00f2ff] shadow-[0_0_10px_#00f2ff]' : 'bg-white/10'}`}></div>
                  ))}
               </div>
            </div>
          ) : (
            <button 
              onClick={onComplete}
              className="w-full py-3 bg-[#00f2ff] text-black font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-colors cursor-pointer"
            >
              Verify Connection
            </button>
          )}
        </div>
      </div>
    </>
  );
}
