"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode24({ onComplete }) {
  const [handle, setHandle] = useState("");
  const [isLinked, setIsLinked] = useState(false);

  return (
    <>
      <a-entity>
        {/* Avatar Placeholder */}
        <a-sphere position="0 2 -3" radius="0.6" color="#ff00ff">
           <a-text 
            value={isLinked ? `@${handle}` : "ANONYMOUS"} 
            position="0 1 0" align="center" width="5" color="#00f2ff"
          ></a-text>
        </a-sphere>

        {/* Identity Link Beam */}
        {isLinked && (
          <a-cylinder position="0 0.5 -3" radius="0.02" height="1" color="#00f2ff"></a-cylinder>
        )}
      </a-entity>

      <div className="flex flex-col items-center">
        <p className="text-[#ff00ff] text-[10px] tracking-widest mb-2 uppercase font-bold text-center">Protocol: Farcaster ID (FID)</p>
        <input 
          type="text" 
          placeholder="ENTER HANDLE..." 
          className="bg-transparent border-b-2 border-[#ff00ff] text-[#ff00ff] p-1 text-center outline-none mb-4 uppercase text-xs"
          onChange={(e) => setHandle(e.target.value)}
        />
        
        {!isLinked ? (
          <button 
            disabled={!handle}
            onClick={() => setIsLinked(true)} 
            className="px-6 py-2 border-2 border-[#ff00ff] text-[#ff00ff] font-bold text-[10px] uppercase disabled:opacity-30"
          >
            Link Identity
          </button>
        ) : (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00f2ff] text-black font-black text-[10px] uppercase">
            Identify Verified
          </button>
        )}
      </div>
    </>
  );
}
