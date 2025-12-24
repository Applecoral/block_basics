"use client";
import { useState, useEffect } from "react";

interface Props { onComplete: () => void; }

export default function Episode6({ onComplete }: Props) {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0);
  const [clustersCaptured, setClustersCaptured] = useState<number[]>([]);

  // Automatic progress once all clusters are clicked
  useEffect(() => {
    if (clustersCaptured.length === 3 && !isSyncing) {
      startSync();
    }
  }, [clustersCaptured]);

  const startSync = () => {
    setIsSyncing(true);
    const interval = setInterval(() => {
      setSyncProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  const captureCluster = (id: number) => {
    if (!clustersCaptured.includes(id)) {
      setClustersCaptured([...clustersCaptured, id]);
    }
  };

  return (
    <>
      <a-entity>
        {/* Environment: Data Stream Core */}
        <a-sky color="#020202"></a-sky>
        <a-light type="ambient" color="#111"></a-light>
        <a-light type="point" position="0 3 -3" intensity="1" color="#ff00ff"></a-light>

        {/* Central Ledger Pillar (Holographic Beam) */}
        <a-entity position="0 0 -6">
          <a-cylinder 
            radius="0.5" 
            height="6" 
            material={`shader: flat; color: #ff00ff; opacity: ${syncProgress / 100 + 0.1}; transparent: true`}
          ></a-cylinder>
          <a-torus-knot 
            radius="0.4" 
            radius-tubular="0.02" 
            p="2" q="3"
            material="color: #00f2ff; emissive: #00f2ff"
            animation="property: rotation; to: 0 360 0; loop: true; dur: 10000; easing: linear"
          ></a-torus-knot>
          <a-text value="LEDGER_CORE" position="0 3.5 0" align="center" width="5" color="#fff"></a-text>
        </a-entity>

        {/* Floating Data Clusters (The Intercepts) */}
        {!isSyncing && (
          <>
            <a-entity 
              class="clickable" 
              position="-3 2 -4" 
              onClick={() => captureCluster(1)}
              visible={!clustersCaptured.includes(1)}
            >
              <a-tetrahedron radius="0.3" material="color: #00f2ff; wireframe: true"
                animation="property: position; y: 2.2; dir: alternate; loop: true; dur: 2000"></a-tetrahedron>
              <a-text value="PACKET_A" position="0 -0.5 0" align="center" width="2"></a-text>
            </a-entity>

            <a-entity 
              class="clickable" 
              position="3 1.5 -4" 
              onClick={() => captureCluster(2)}
              visible={!clustersCaptured.includes(2)}
            >
              <a-tetrahedron radius="0.3" material="color: #00f2ff; wireframe: true"
                animation="property: position; y: 1.7; dir: alternate; loop: true; dur: 1800"></a-tetrahedron>
              <a-text value="PACKET_B" position="0 -0.5 0" align="center" width="2"></a-text>
            </a-entity>

            <a-entity 
              class="clickable" 
              position="0 3.5 -4" 
              onClick={() => captureCluster(3)}
              visible={!clustersCaptured.includes(3)}
            >
              <a-tetrahedron radius="0.3" material="color: #00f2ff; wireframe: true"
                animation="property: position; y: 3.7; dir: alternate; loop: true; dur: 2200"></a-tetrahedron>
              <a-text value="PACKET_C" position="0 -0.5 0" align="center" width="2"></a-text>
            </a-entity>
          </>
        )}
      </a-entity>

      {/* UI HUD */}
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-end pb-12 pointer-events-none">
        <div className="pointer-events-auto bg-[#050505]/90 border-t-2 border-[#ff00ff] p-6 w-80 backdrop-blur-md shadow-[0_-20px_50px_rgba(255,0,255,0.1)]">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[#ff00ff] text-[10px] tracking-widest font-black uppercase">Ledger_Sync</p>
            <p className="text-white text-[10px] font-mono">{syncProgress}%</p>
          </div>
          
          <div className="w-full h-1 bg-white/10 mb-6 overflow-hidden">
             <div 
               className="h-full bg-gradient-to-r from-[#ff00ff] to-[#00f2ff] transition-all duration-300" 
               style={{ width: `${syncProgress}%` }}
             ></div>
          </div>

          {!isSyncing ? (
            <div className="text-center">
              <p className="text-white/40 text-[9px] uppercase tracking-widest mb-4 leading-relaxed">
                Collect {3 - clustersCaptured.length} remaining data packets <br/> to initiate global history sync.
              </p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className={`w-2 h-2 rounded-full ${clustersCaptured.includes(i) ? 'bg-[#00f2ff]' : 'bg-white/10'}`} />
                ))}
              </div>
            </div>
          ) : syncProgress < 100 ? (
            <p className="text-[#00f2ff] text-[9px] text-center animate-pulse uppercase tracking-tighter font-mono">
              Interfacing with node history... <br/> [Write_Stream_Active]
            </p>
          ) : (
            <button 
              onClick={onComplete} 
              className="w-full py-4 bg-[#00f2ff] text-black font-black text-xs uppercase tracking-[0.2em] shadow-[0_0_30px_#00f2ff] hover:scale-105 transition-transform"
            >
              Ledger Finalized →
            </button>
          )}
        </div>
      </div>
    </>
  );
}
