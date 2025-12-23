"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode18({ onComplete }: Props) {
  const [ethAmount, setEthAmount] = useState(10);
  const [usdcAmount, setUsdcAmount] = useState(20000);
  const [swapped, setSwapped] = useState(false);

  const handleSwap = () => {
    setEthAmount(prev => prev - 1);
    setUsdcAmount(prev => prev + 2000);
    setSwapped(true);
  };

  return (
    <>
      <a-entity>
        {/* Pool A (ETH) */}
        <a-cylinder position="-1.5 1 -4" radius="0.8" height={ethAmount/5} color="#00f2ff" material="opacity: 0.6">
          <a-text value={`ETH POOL: ${ethAmount}`} position="0 2 0" align="center" width="3"></a-text>
        </a-cylinder>

        {/* Pool B (USDC) */}
        <a-cylinder position="1.5 1 -4" radius="0.8" height={usdcAmount/10000} color="#ff00ff" material="opacity: 0.6">
          <a-text value={`USDC POOL: ${usdcAmount}`} position="0 2 0" align="center" width="3"></a-text>
        </a-cylinder>

        <a-text value="⇄" position="0 1.5 -3" align="center" color="white" width="10"></a-text>
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: Automated Market Maker</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          DEXs use math to trade. Swap 1 ETH for USDC. Notice how the pools rebalance.
        </p>
        
        {!swapped ? (
          <button onClick={handleSwap} className="px-6 py-2 border-2 border-[#ff00ff] text-[#ff00ff] font-bold text-[10px] uppercase">
            Swap 1 ETH
          </button>
        ) : (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00ff00] text-black font-black text-[10px] uppercase shadow-[0_0_10px_#00ff00]">
            Trade Confirmed
          </button>
        )}
      </div>
    </>
  );
}
