"use client";
import { useState } from "react";

interface Props {
  onComplete: () => void;
}

export default function Episode4({ onComplete }: Props) {
  const [activeRoute, setActiveRoute] = useState<number[]>([]);
  const requiredRoute = [1, 2, 3];

  const isComplete =
    JSON.stringify(activeRoute) === JSON.stringify(requiredRoute);

  const handleNodeClick = (id: number) => {
    if (isComplete) return;

    if (activeRoute.includes(id)) {
      setActiveRoute([]);
    } else {
      setActiveRoute([...activeRoute, id]);
    }
  };

  const renderLog = () => {
    if (activeRoute.length === 0)
      return "AWAITING ROUTE INPUT...";
    if (!isComplete)
      return `ROUTING: ${activeRoute.join(" → ")}`;
    return "UPLINK ESTABLISHED ✓";
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center font-mono text-sm">
      <div className="w-full max-w-md border border-cyan-400 bg-[#050505] p-6 shadow-lg">
        
        {/* Header */}
        <p className="text-cyan-400 text-xs tracking-widest mb-4">
          CORE NETWORK TERMINAL
        </p>

        {/* Status */}
        <div className="mb-6">
          <p className="text-white/60 text-xs mb-2">SYSTEM STATUS</p>
          <p
            className={`text-xs ${
              isComplete ? "text-cyan-400" : "text-pink-400"
            }`}
          >
            {isComplete ? "ONLINE" : "ROUTING REQUIRED"}
          </p>
        </div>

        {/* Log */}
        <div className="mb-6 bg-black border border-white/10 p-3 text-xs text-cyan-400">
          &gt; {renderLog()}
        </div>

        {/* Controls */}
        {!isComplete && (
          <>
            <p className="text-white/40 text-xs mb-3">
              SELECT ROUTE SEQUENCE
            </p>

            <div className="flex gap-2 mb-6">
              {[
                { id: 1, label: "ALPHA" },
                { id: 2, label: "BETA" },
                { id: 3, label: "GAMMA" },
              ].map((node) => (
                <button
                  key={node.id}
                  onClick={() => handleNodeClick(node.id)}
                  className={`flex-1 py-2 border text-xs tracking-widest transition
                    ${
                      activeRoute.includes(node.id)
                        ? "border-cyan-400 text-cyan-400"
                        : "border-white/20 text-white/60 hover:border-white/40"
                    }`}
                >
                  {node.label}
                </button>
              ))}
            </div>

            <p className="text-white/30 text-[10px]">
              REQUIRED: ALPHA → BETA → GAMMA
            </p>
          </>
        )}

        {/* Completion */}
        {isComplete && (
          <button
            onClick={onComplete}
            className="w-full py-3 bg-cyan-400 text-black text-xs font-bold tracking-widest"
          >
            CONFIRM UPLINK →
          </button>
        )}
      </div>
    </div>
  );
}
