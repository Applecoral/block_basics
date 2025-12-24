"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode5({ onComplete }: Props) {
  const [rotation, setRotation] = useState(0);
  const TARGET_ROTATION = 180; // The angle required for the handshake
  const isAligned = rotation >= 170 && rotation <= 190;

  return (
    <>
      <a-entity>
        {/* Environment: Grid and Horizon */}
        <a-grid position="0 0 0" rotation="-90 0 0" width="100" height="100" color="#111"></a-grid>
        
        {/* The Remote Peer (Static) */}
        <a-entity position="-3 2 -6">
          <a-octahedron radius="0.8" material="color: #ff00ff; wireframe: true; emissive: #ff00ff; emissiveIntensity: 0.5"></a-octahedron>
          <a-text value="PEER_REMOTE" position="0 1.2 0" align="center" width="3" color="#ff00ff"></a-text>
          {/* Signal Beam coming from Peer */}
          <a-entity line={`start: 0 0 0; end: ${3 - (rotation/60)} 0 0; color: #ff00ff; opacity: 0.5`}></a-entity>
        </a-entity>

        {/* The Player's Node (The "Antenna") */}
        <a-entity position="2 2 -6" rotation={`0 ${rotation} 0`}>
          <a-box scale="1 1 1" material={`color: ${isAligned ? '#00f2ff' : '#222'}; metalness: 0.9; roughness: 0.1`}>
            {/* Directional Indicator */}
            <a-cone radius-bottom="0.1" radius-top="0" height="0.5" position="0 0 -0.6" rotation="90 0 0" color="#00f2ff"></a-cone>
          </a-box>
          <a-text value="LOCAL_NODE" position="0 1.2 0" align="center" width="3" color="#00f2ff"></a-text>
        </a-entity>

        {/* Success Visual: The Link Bridge */}
        {isAligned && (
          <a-entity 
            line="start: -3 2 -6; end: 2 2 -6; color: #00f2ff"
            animation="property: scale; from: 0 1 1; to: 1 1 1; dur: 500"
          ></a-entity>
        )}
      </a-entity>

      {/* 2D CYBER TERMINAL UI */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-end pb-12 pointer-events-none">
        <div className="pointer-events-auto bg-[#050505]/95 border-r-4 border-[#00f2ff] p-6 w-80 shadow-[-20px_0_50px_rgba(0,242,255,0.1)]">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-[#00f2ff] font-black text-[10px] tracking-widest">P2P_HANDSHAKE_v2</h2>
            <span className={`text-[9px] ${isAligned ? 'text-[#00f2ff]' : 'text-[#ff00ff] animate-pulse'}`}>
              {isAligned ? '● LINKED' : '○ SCANNING'}
            </span>
          </div>

          <p className="text-white/40 text-[9px] mb-6 leading-relaxed uppercase">
            Nodes must align their transmission vectors. <br/>
            Rotate your station to <span className="text-white">180°</span> to bridge the gap.
          </p>

          <div className="space-y-6">
            <div className="relative pt-1">
              <input 
                type="range" 
                min="0" 
                max="360" 
                value={rotation}
                onChange={(e) => setRotation(parseInt(e.target.value))}
                className="w-full h-1 bg-white/10 appearance-none cursor-pointer accent-[#00f2ff]"
              />
              <div className="flex justify-between mt-2 font-mono text-[10px] text-white/30">
                <span>0°</span>
                <span className="text-[#00f2ff] font-bold">{rotation}°</span>
                <span>360°</span>
              </div>
            </div>

            {isAligned ? (
              <button 
                onClick={onComplete}
                className="w-full py-4 bg-[#00f2ff] text-black font-black text-xs uppercase tracking-widest shadow-[0_0_25px_#00f2ff] transition-all"
              >
                ESTABLISH CONNECTION
              </button>
            ) : (
              <div className="py-4 border border-white/5 text-center">
                <p className="text-[8px] text-white/20 tracking-[0.3em]">WAITING FOR ALIGNMENT...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
