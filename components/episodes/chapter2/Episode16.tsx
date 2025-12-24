"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode16({ onComplete }: Props) {
  const [selectedID, setSelectedID] = useState<number | null>(null);
  const correctID = 1; // The Sphere

  const nftOptions = [
    { id: 0, label: "#001", color: "#ff00ff" },
    { id: 1, label: "#002", color: "#00f2ff" },
    { id: 2, label: "#003", color: "#FFD700" },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-[#050505] text-white">
      <div className="bg-black/90 border-2 border-[#ff00ff] p-6 w-80 flex flex-col items-center shadow-[0_0_30px_rgba(255,0,255,0.2)] space-y-4">
        <h2 className="text-[#ff00ff] text-xs uppercase font-black tracking-widest text-center">
          Protocol: Non-Fungible Metadata
        </h2>

        <p className="text-white/40 text-[9px] text-center mb-4">
          Metadata: "A cyan orb of perfect symmetry." <br/>
          <b>Select the NFT that matches this description.</b>
        </p>

        <div className="flex justify-center gap-3 mb-4">
          {nftOptions.map(nft => (
            <div 
              key={nft.id} 
              onClick={() => setSelectedID(nft.id)}
              className={`w-12 h-12 rounded-full cursor-pointer border-2 ${selectedID === nft.id ? 'border-white' : 'border-transparent'}`}
              style={{ backgroundColor: nft.color }}
            />
          ))}
        </div>

        {selectedID === correctID && (
          <button 
            onClick={onComplete} 
            className="px-6 py-2 bg-[#00ff00] text-black font-black text-[10px] uppercase animate-bounce shadow-[0_0_10px_#00ff00]"
          >
            ID Verified: Proceed
          </button>
        )}
        {selectedID !== null && selectedID !== correctID && selectedID !== correctID && (
          <p className="text-red-500 text-[10px] uppercase font-bold">Metadata Mismatch. Try again.</p>
        )}
      </div>
    </div>
  );
}
