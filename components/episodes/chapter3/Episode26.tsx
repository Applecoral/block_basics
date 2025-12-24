"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode26({ onComplete }: Props) {
  // Track which ecosystems have been tapped
  const [touched, setTouched] = useState([false, false, false]);

  // Check if all ecosystems are synced
  const allSynced = touched.every(t => t);

  // Mark a specific ecosystem as synced
  const toggleEcosystem = (index: number) => {
    const next = [...touched];
    next[index] = true;
    setTouched(next);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-[#ff00ff] text-sm font-bold uppercase mb-4 text-center">
        Protocol: Omni-chain Sync
      </h2>

      {/* Instruction or completion message */}
      <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
        {allSynced
          ? "Network mesh active. Data is universal."
          : "Activate cross-chain communications. Tap each ecosystem to link them."}
      </p>

      {/* Ecosystem buttons */}
      <div className="flex gap-4 mb-4">
        {[
          { name: "ETH", color: "#627EEA" },
          { name: "BASE",
