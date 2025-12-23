"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode17({ onComplete }: Props) {
  const [isSigned, setIsSigned] = useState(false);

  return (
    <>
      <a-entity>
        {/* The Transaction Document */}
        <a-plane position="0 2 -3" width="2" height="2.5" color="#fff" material="opacity: 0.1; transparent: true">
          <a-text value="TRANSFER: 50 ETH\nTO: 0x71C...841\n\nSTATUS: PENDING" align="center" color="#00f2ff" width="2"></a-text>
        </a-plane>

        {/* The Signature Seal */}
        <a-circle 
          position={isSigned ? "0 1.2 -2.9" : "0 0.5 -2"} 
          radius="0.3" 
          color="#ff00ff" 
          onClick={() => setIsSigned(true)}
          animation={isSigned ? "" : "property: position; to: 0 0.6 -2; dir: alternate; dur: 1000; loop: true"}
        >
          <a-text value="SIGN" align="center" color="white" width="3" position="0 0 0.1"></a-text>
        </a-circle>

        {isSigned && (
          <a-text value="SIGNED" position="0 3.5 -3" align="center" color="#00ff00" width="5"></a-text>
        )}
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#ff00ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: Cryptographic Signature</p>
        <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
          {isSigned ? "Transaction authorized. Private key applied." : "Your wallet holds the key. Click the seal to sign the transaction."}
        </p>
        {isSigned && (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00f2ff] text-black font-black text-[10px] uppercase">
            Broadcast to Network
          </button>
        )}
      </div>
    </>
  );
}
