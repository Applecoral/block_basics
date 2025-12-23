"use client";
import { useState, useEffect } from "react";

interface Props { onComplete: () => void; }

export default function Episode12({ onComplete }) {
  const [gas, setGas] = useState(0);
  const isReady = gas >= 100;

  return (
    <>
      <a-entity>
        {/* The Transaction Block */}
        <a-box 
          position="0 2 -4" 
          color={isReady ? "#00f2ff" : "#333"} 
          animation={isReady ? "property: position; to: 0 5 -10; dur: 2000; startEvents: send" : ""}
          id="tx-block"
        >
          <a-text value="TRANSACTION" align="center" position="0 0.6 0" width="3"></a-text>
        </a-box>

        {/* Gas Tank Visual */}
        <a-cylinder position="0 0.5 -4" radius="0.5" height="1" color="#111" open-ended="false">
          <a-cylinder 
            position={`0 ${-0.5 + (gas/200)} 0`} 
            radius="0.48" 
            height={gas/100} 
            color="#00f2ff" 
            material="emissive: #00f2ff; emissiveIntensity: 0.5"
          ></a-cylinder>
        </a-cylinder>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: Gas Optimization</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {isReady ? "Gas limit reached. Transaction ready for broadcast." : "Network nodes require fuel to process code. Charge the gas tank."}
        </p>
        
        {gas < 100 ? (
          <button 
            onMouseDown={() => {
              const interval = setInterval(() => {
                setGas(g => {
                  if (g >= 100) { clearInterval(interval); return 100; }
                  return g + 5;
                });
              }, 50);
            }}
            className="px-6 py-2 border-2 border-[#00f2ff] text-[#00f2ff] font-bold text-[10px] uppercase animate-pulse"
          >
            Hold to Pump Gas
          </button>
        ) : (
          <button 
            onClick={() => {
              document.querySelector("#tx-block").emit("send");
              setTimeout(onComplete, 1500);
            }} 
            className="px-6 py-2 bg-[#ff00ff] text-white font-black text-[10px] uppercase shadow-[0_0_15px_#ff00ff]"
          >
            Broadcast Transaction
          </button>
        )}
      </div>
    </>
  );
}
