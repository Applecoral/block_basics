"use client";
import { useState, useEffect } from "react";

interface Props { onComplete: () => void; }

export default function Episode6({ onComplete }: Props) {
  const [clustersCaptured, setClustersCaptured] = useState<number[]>([]);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0);

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
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#ff00ff] p-6 flex flex-col items-center shadow-[0_0_30px_rgba(255,0,255,0.2)] space-y-4">
        
        {/* Episode Explainer */}
        <p className="text-[#ff00ff] text-[10px] tracking-widest font-black uppercase text-center">
          EPISODE 6: GLOBAL LEDGER SYNC
        </p>
        <p className="text-white/50 text-[9px] text-center mb-4">
          Collect all three data packets from the distributed network nodes to initiate a global ledger synchronization. Ensure all packets are captured to write the history stream to the chain.
        </p>

        <h2 className="text-[#ff00ff] text-xs uppercase font-black tracking-widest">LEDGER_CORE SYNC</h2>
        <p className="text-white/40 text-[9px] uppercase tracking-widest text-center mb-4">
          Collect all 3 data packets to initiate the global history sync
        </p>

        {!isSyncing ? (
          <div className="flex flex-col items-center space-y-2">
            {[1,2,3].map((i) => (
              <button
                key={i}
                onClick={() => captureCluster(i)}
                disabled={clustersCaptured.includes(i)}
                className={`px-6 py-2 w-48 text-xs font-mono font-bold uppercase border-2 rounded transition-all ${
                  clustersCaptured.includes(i)
                    ? 'bg-[#00f2ff] text-black border-[#00f2ff]'
                    : 'bg-transparent text-[#00f2ff] border-[#00f2ff] hover:bg-[#00f2ff] hover:text-black'
                }`}
              >
                {clustersCaptured.includes(i) ? `PACKET_${String.fromCharCode(64 + i)} COLLECTED` : `CAPTURE PACKET_${String.fromCharCode(64 + i)}`}
              </button>
            ))}
            <p className="text-white/40 text-[9px] mt-2 text-center">Packets captured: {clustersCaptured.length}/3</p>
          </div>
        ) : syncProgress < 100 ? (
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[#00f2ff] text-[9px] uppercase font-mono animate-pulse text-center">
              Interfacing with node history... <br/> [Write_Stream_Active]
            </p>
            <div className="w-48 h-2 bg-white/10 rounded overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#ff00ff] to-[#00f2ff] transition-all"
                style={{ width: `${syncProgress}%` }}
              ></div>
            </div>
            <p className="text-white/40 text-[8px] mt-1">{syncProgress}%</p>
          </div>
        ) : (
          <button
            onClick={onComplete}
            className="mt-4 px-8 py-3 w-48 bg-[#00f2ff] text-black font-black text-xs uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-[0_0_20px_#00f2ff]"
          >
            Ledger Finalized →
          </button>
        )}
      </div>
    </div>
  );
}
