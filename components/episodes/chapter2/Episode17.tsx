"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode17({ onComplete }: Props) {
  const [isSigned, setIsSigned] = useState(false);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#ff00ff] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(255,0,255,0.2)] space-y-4">

        {/* Episode Explainer */}
        <p className="text-[#ff00ff] text-[10px] uppercase font-black tracking-widest text-center">
          EPISODE 17: CRYPTOGRAPHIC SIGNATURE
        </p>
        <p className="text-white/50 text-[9px] text-center mb-4">
          Transactions require your private key to authorize. Click the seal to sign and validate the transaction on the network.
        </p>

        <h2 className="text-[#ff00ff] text-xs uppercase font-black tracking-widest text-center">
          Protocol: Cryptographic Signature
        </h2>

        <p className="text-white/40 text-[9px] text-center mb-4">
          {isSigned 
            ? "Transaction authorized. Private key applied." 
            : "Your wallet holds the key. Click the seal to sign the transaction."}
        </p>

        {!isSigned ? (
          <div 
            onClick={() => setIsSigned(true)} 
            className="w-16 h-16 bg-[#ff00ff] rounded-full flex items-center justify-center cursor-pointer animate-bounce"
          >
            <span className="text-white text-[10px] font-bold uppercase">SIGN</span>
          </div>
        ) : (
          <>
            <p className="text-[#00ff00] text-[10px] uppercase font-bold animate-pulse">SIGNED</p>
            <button 
              onClick={onComplete} 
              className="px-6 py-2 bg-[#00f2ff] text-black font-black text-[10px] uppercase shadow-[0_0_10px_#00f2ff]"
            >
              Broadcast to Network
            </button>
          </>
        )}
      </div>
    </div>
  );
}
