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
      setActiveRoute([]); // Reset on double-click/mistake
    } else {
      setActiveRoute([...activeRoute, id]);
    }
  };

  return (
    <>
      {/* THE FIX: CAMERA & CURSOR RIG */}
      <a-entity id="rig">
        <a-camera id="camera" look-controls="pointerLockEnabled: false">
          {/* This makes the mouse act as a 3D pointer */}
          <a-entity
            cursor="rayOrigin: mouse"
            raycaster="objects: .clickable"
          ></a-entity>
        </a-camera>
      </a-entity>

      <a-entity>
        {/* Atmosphere */}
        <a-plane rotation="-90 0 0" width="100" height="100" color="#020202"></a-plane>
        <a-light type="ambient" color="#222"></a-light>
        <a-light type="point" position="0 5 -5" intensity="0.8" color="#00f2ff"></a-light>

        {/* Central Uplink Tower */}
        <a-entity position="0 0 -8">
          <a-box scale="1.2 5 1.2" material="color: #0a0a0a; metalness: 0.9">
            <a-box 
              scale="0.6 0.2 0.6" 
              position="0 2 0.35" 
              material={`color: ${isComplete ? '#00f2ff' : '#ff00ff'}; emissive: ${isComplete ? '#00f2ff' : '#ff00ff'}; emissiveIntensity: 2`}
              animation="property: opacity; from: 1; to: 0.3; dir: alternate; loop: true; dur: 800"
            ></a-box>
          </a-box>
          <a-text value="CORE_UPLINK" position="0 3 0.7" align="center" width="4" color={isComplete ? "#00f2ff" : "#ff00ff"}></a-text>
        </a-entity>

        {/* Server Station ALPHA */}
        <a-entity 
          class="clickable" 
          position="-4 1.5 -5" 
          onClick={() => handleNodeClick(1)}
        >
          <a-box 
            scale="1 3 1" 
            material={`color: ${activeRoute.includes(1) ? '#00f2ff' : '#111'}; emissive: ${activeRoute.includes(1) ? '#00f2ff' : '#000'}; metalness: 0.8`}
          >
            <a-text value="ALPHA" position="0 1.8 0.51" align="center" width="3" color="#fff"></a-text>
          </a-box>
        </a-entity>

        {/* Server Station BETA */}
        <a-entity 
          class="clickable" 
          position="0 1.5 -4" 
          onClick={() => handleNodeClick(2)}
        >
          <a-box 
            scale="1 3 1" 
            material={`color: ${activeRoute.includes(2) ? '#00f2ff' : '#111'}; emissive: ${activeRoute.includes(2) ? '#00f2ff' : '#000'}; metalness: 0.8`}
          >
            <a-text value="BETA" position="0 1.8 0.51" align="center" width="3" color="#fff"></a-text>
          </a-box>
        </a-entity>

        {/* Server Station GAMMA */}
        <a-entity 
          class="clickable" 
          position="4 1.5 -5" 
          onClick={() => handleNodeClick(3)}
        >
          <a-box 
            scale="1 3 1" 
            material={`color: ${activeRoute.includes(3) ? '#00f2ff' : '#111'}; emissive: ${activeRoute.includes(3) ? '#00f2ff' : '#000'}; metalness: 0.8`}
          >
            <a-text value="GAMMA" position="0 1.8 0.51" align="center" width="3" color="#fff"></a-text>
          </a-box>
        </a-entity>

        {/* Routing Lines */}
        {activeRoute.map((nodeId, idx) => {
          if (idx === 0) return null;
          const prev = activeRoute[idx - 1];
          const posMap: any = { 1: "-4 1.5 -5", 2: "0 1.5 -4", 3: "4 1.5 -5" };
          return (
            <a-entity 
              key={idx} 
              line={`start: ${posMap[prev]}; end: ${posMap[nodeId]}; color: #00f2ff`}
            ></a-entity>
          );
        })}
      </a-entity>

      {/* 2D UI */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-end pb-12 pointer-events-none">
        <div className="pointer-events-auto bg-[#050505]/95 border-b-4 border-[#00f2ff] p-6 w-80 shadow-2xl">
          <p className="text-[#00f2ff] text-[10px] font-black uppercase tracking-widest mb-4">Uplink Status: {isComplete ? 'ONLINE' : 'ROUTING'}</p>
          {!isComplete ? (
            <p className="text-white/50 text-[10px] font-mono mb-4">Select: ALPHA → BETA → GAMMA</p>
          ) : (
            <button 
              onClick={onComplete} 
              className="w-full py-4 bg-[#00f2ff] text-black font-black uppercase text-xs"
            >
              Confirm Uplink →
            </button>
          )}
        </div>
      </div>
    </>
  );
}
