"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode6({ onComplete }) {
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0);

  const startSync = () => {
    setIsSyncing(true);
    const interval = setInterval(() => {
      setSyncProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <>
      <a-entity>
        {/* The Ledger "Tower" */}
        <a-box position="0 0.5 -5" width="2" height="0.2" depth="2" color="#111"></a-box>
        <a-box position="0 0.8 -5" width="1.8" height="0.2" depth="1.8" color="#222" visible={syncProgress > 20}></a-box>
        <a-box position="0 1.1 -5" width="1.6" height="0.2" depth="1.6" color="#333" visible={syncProgress > 50}></a-box>
        <a-box position="0 1.4 -5" width="1.4" height="0.2" depth="1.4" color="#00f2ff" visible={syncProgress > 80}
          animation="property: material.opacity; from: 0.5; to: 1; dir: alternate; dur: 500; loop: true">
        </a-box>

        <a-text value="GLOBAL LEDGER" position="0 2.5 -5" align="center" color="#00f2ff" width="4"></a-text>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#ff00ff] text-[10px] tracking-widest mb-2 uppercase">Sync Status: {syncProgress}%</p>
        <div className="w-48 h-1 bg-zinc-800 mb-4">
           <div className="h-full bg-[#ff00ff]" style={{ width: `${syncProgress}%` }}></div>
        </div>
        
        {syncProgress < 100 ? (
          <button onClick={startSync} disabled={isSyncing} className="px-6 py-2 border-2 border-[#ff00ff] text-[#ff00ff] font-bold text-[10px] uppercase">
            {isSyncing ? "Downloading History..." : "Sync Ledger"}
          </button>
        ) : (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00f2ff] text-black font-black text-[10px] uppercase">
            History Verified
          </button>
        )}
      </div>
    </>
  );
}