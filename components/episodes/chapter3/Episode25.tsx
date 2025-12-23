"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode25({ onComplete }) {
  const [stack, setStack] = useState<string[]>([]);
  const modules = ["SWAP", "LEND", "STAKE"];

  const addModule = (mod: string) => {
    if (!stack.includes(mod)) setStack([...stack, mod]);
  };

  return (
    <>
      <a-entity>
        {/* The Base Protocol */}
        <a-box position="0 0.5 -4" width="3" height="0.5" depth="3" color="#111">
          <a-text value="YOUR APP" position="0 0.3 0" align="center" width="4" color="#00f2ff"></a-text>
        </a-box>

        {/* The Stacked Modules */}
        {stack.map((mod, i) => (
          <a-box key={mod} position={`0 ${1.2 + (i * 0.6)} -4`} width="2.5" height="0.5" depth="2.5" color="#ff00ff" material="opacity: 0.8">
            <a-text value={mod} position="0 0 1.3" align="center" width="4"></a-text>
          </a-box>
        ))}

        {/* Available Modules Floating */}
        {!stack.includes("SWAP") && <a-box position="-2 2 -3" scale="0.4 0.4 0.4" color="#00f2ff" onClick={() => addModule("SWAP")}><a-text value="SWAP" align="center" position="0 0 0.6"></a-text></a-box>}
        {!stack.includes("LEND") && <a-box position="0 2 -2" scale="0.4 0.4 0.4" color="#00f2ff" onClick={() => addModule("LEND")}><a-text value="LEND" align="center" position="0 0 0.6"></a-text></a-box>}
        {!stack.includes("STAKE") && <a-box position="2 2 -3" scale="0.4 0.4 0.4" color="#00f2ff" onClick={() => addModule("STAKE")}><a-text value="STAKE" align="center" position="0 0 0.6"></a-text></a-box>}
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: Composability</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {stack.length === 3 ? "Super App constructed. Total Synergy achieved." : "Don't reinvent the wheel. Click the modules to stack existing protocols into your app."}
        </p>
        {stack.length === 3 && (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00f2ff] text-black font-black text-[10px] uppercase shadow-[0_0_15px_#00f2ff]">
            Deploy Super App
          </button>
        )}
      </div>
    </>
  );
}
