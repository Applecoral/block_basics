"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode5({ onComplete }: Props) {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const requiredSequence = [1, 2, 3];
  const isSynced = JSON.stringify(activeNodes) === JSON.stringify(requiredSequence);

  const handleNodeClick = (id: number) => {
    if (isSynced) return;
    // If they click the wrong order or an already active node, reset
    if (activeNodes.includes(id)) {
      setActiveNodes([]);
    } else {
      setActiveNodes([...activeNodes, id]);
    }
  };

  return (
    <>
      <a-entity>
        {/* Environment: Cyber Void */}
        <a-plane rotation="-90 0 0" width="100" height="100" color="#020202"></a-plane>
        <a-light type="ambient" color="#333"></a-light>
        
        {/* Source Stream (Left) */}
        <a-entity position="-5 2 -6">
          <a-torus radius="0.5" radius-tubular="0.01" color="#ff00ff" animation="property: rotation; to: 0 360 360; loop: true; dur: 5000"></a-torus>
          <a-text value="SOURCE_STREAM" position="0 1 0" align="center" width="3" color="#ff00ff"></a-text>
        </a-entity>

        {/* Target Stream (Right) */}
        <a-entity position="5 2 -6">
          <a-torus radius="0.5" radius-tubular="0.01" color="#00f2ff" animation="property: rotation; to: 360 360 0; loop: true; dur: 5000"></a-torus>
          <a-text value="TARGET_GATE" position="0 1 0" align="center" width="3" color="#00f2ff"></a-text>
        </a-entity>

        {/* INTERACTIVE NODES (The Bridge) */}
        {/* Node 1: SYNCHRONIZER */}
        <a-entity class="clickable" position="-2 2 -5" onClick={() => handleNodeClick(1)}>
          <a-dodecahedron radius="0.4" 
            material={`shader: flat; color: ${activeNodes.includes(1) ? '#00f2ff' : '#222'}; wireframe: true`}
            animation={activeNodes.includes(1) ? "property: rotation; to: 0 360 0; loop: true; dur: 2000" : ""}
          ></a-dodecahedron>
          <a-text value="SYNCH_01" position="0 -0.8 0" align="center" width="2.5"></a-text>
        </a-entity>

        {/* Node 2: ENCRYPTOR */}
        <a-entity class="clickable" position="0 2 -5" onClick={() => handleNodeClick(2)}>
          <a-dodecahedron radius="0.4" 
            material={`shader: flat; color: ${activeNodes.includes(2) ? '#00f2ff' : '#222'}; wireframe: true`}
            animation={activeNodes.includes(2) ? "property: rotation; to: 360 0 0; loop: true; dur: 2000" : ""}
          ></a-dodecahedron>
          <a-text value="ENCR_02" position="0 -0.8 0" align="center" width="2.5"></a-text>
        </a-entity>

        {/* Node 3: VALIDATOR */}
        <a-entity class="clickable" position="2 2 -5" onClick={() => handleNodeClick(3)}>
          <a-dodecahedron radius="0.4" 
            material={`shader: flat; color: ${activeNodes.includes(3) ? '#00f2ff' : '#222'}; wireframe: true`}
            animation={activeNodes.includes(3) ? "property: rotation; to: 0 0 360; loop: true; dur: 2000" : ""}
          ></a-dodecahedron>
          <a-text value="VALI_03" position="0 -0.8 0" align="center" width="2.5"></a-text>
        </a-entity>

        {/* Bridge Connection Lines */}
        {isSynced && (
           <a-entity line="start: -5 2 -6; end: 5 2 -6; color: #00f2ff"
                     animation="property: scale; from: 0 1 1; to: 1 1 1; dur: 500"></a-entity>
        )}
      </a-entity>

      {/* 2D HUD */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-end pb-12 pointer-events-none">
        <div className="pointer-events-auto bg-[#050505]/95 border-l-4 border-[#ff00ff] p-6 w-80 backdrop-blur-md">
          <p className="text-[#ff00ff] text-[10px] tracking-[0.3em] font-black uppercase mb-1">HANDSHAKE_PROTOCOL</p>
          <p className="text-white/20 text-[8px] font-mono mb-4 uppercase tracking-tighter text-nowrap">Status: Awaiting Sequence Authorization</p>
          
          <p className="text-white/50 text-[10px] uppercase leading-relaxed mb-6 font-mono">
            Bridge the gap. Activate nodes in sequence: <br/>
            <span className="text-[#00f2ff] font-bold">SYNCH → ENCR → VALI</span>
          </p>
          
          {!isSynced ? (
            <div className="flex gap-2 mb-4 justify-center">
               {[1,2,3].map(i => (
                 <div key={i} className={`w-8 h-1 transition-all duration-300 ${activeNodes.length >= i ? 'bg-[#00f2ff]' : 'bg-white/10'}`} />
               ))}
            </div>
          ) : (
            <button 
              onClick={onComplete} 
              className="w-full py-4 bg-[#ff00ff] text-white font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_rgba(255,0,255,0.4)]"
            >
              Handshake Complete →
            </button>
          )}
        </div>
      </div>
    </>
  );
}
