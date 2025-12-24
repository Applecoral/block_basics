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
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#00f2ff] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(0,255,255,0.2)] space-y-4">
        <h2 className="text-[#00f2ff] text-xs uppercase font-black tracking-widest text-center">
          Protocol: Automated Market Maker
        </h2>

        <p className="text-white/40 text-[9px] text-center mb-4">
          DEXs use math to trade. Swap 1 ETH for USDC. Notice how the pools rebalance.
        </p>

        <div className="flex justify-between w-full px-4 mb-4">
          <div className="flex flex-col items-center">
            <p className="text-[#00f2ff] text-[10px] font-bold uppercase">ETH Pool</p>
            <div className="w-16 h-16 bg-[#00f2ff]/40 rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">{ethAmount}</span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-[#ff00ff] text-[10px] font-bold uppercase">USDC Pool</p>
            <div className="w-16 h-16 bg-[#ff00ff]/40 rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">{usdcAmount}</span>
            </div>
          </div>
        </div>

        {!swapped ? (
          <button 
            onClick={handleSwap} 
            className="px-6 py-2 border-2 border-[#ff00ff] text-[#ff00ff] font-bold text-[10px] uppercase"
          >
            Swap 1 ETH
          </button>
        ) : (
          <button 
            onClick={onComplete} 
            className="px-6 py-2 bg-[#00ff00] text-black font-black text-[10px] uppercase shadow-[0_0_10px_#00ff00]"
          >
            Trade Confirmed
          </button>
        )}
      </div>
    </div>
  );
}
