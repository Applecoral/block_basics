"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode5({ onComplete }) {
  const [handshake, setHandshake] = useState(false);
  const [position, setPosition] = useState(2);

  const moveNode = () => {
    if (position > -1.5) {
      setPosition(prev => prev - 0.5);
    } else {
      setHandshake(true);
    }
  };

  return (
    <>
      <a-entity>
        {/* Static Node */}
        <a-octahedron position="-2 1.5 -4" radius="0.6" color="#ff00ff" 
          animation="property: rotation; to: 0 360 0; loop: true; dur: 4000">
        </a-octahedron>

        {/* Player Node */}
        <a-box 
          position={`${position} 1.5 -4`} 
          color={handshake ? "#00f2ff" : "#555"}
          scale="0.6 0.6 0.6"
          animation={handshake ? "property: scale; to: 0.8 0.8 0.8; dir: alternate; dur: 500; loop: true" : ""}
        ></a-box>

        {/* Handshake Aura */}
        {handshake && (
          <a-ring position="-1.2 1.5 -4" rotation="0 90 0" radius-inner="0.8" radius-outer="0.9" color="#00f2ff"></a-ring>
        )}
      </a-entity>

      <div className="flex flex-col items-center text-center">
        <p className="text-[#00f2ff] text-[10px] tracking-widest mb-2 uppercase">Protocol: P2P Handshake</p>
        <p className="text-white text-[10px] max-w-xs mb-4 uppercase opacity-80">
          In a decentralized web, nodes talk directly. <br/>
          Tap the button to move your node and establish a Peer-to-Peer connection.
        </p>
        
        {!handshake ? (
          <button onClick={moveNode} className="px-6 py-2 border-2 border-[#ff00ff] text-[#ff00ff] font-bold text-[10px] uppercase">
            Signal Peer
          </button>
        ) : (
          <button onClick={onComplete} className="px-6 py-2 bg-[#00f2ff] text-black font-black text-[10px] uppercase">
            Handshake Success: Enter Network
          </button>
        )}
      </div>
    </>
  );
}
