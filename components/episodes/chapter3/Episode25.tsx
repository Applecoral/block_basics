"use client";
import { useState } from "react";

interface Props { onComplete: () => void; }

export default function Episode25({ onComplete }: Props) {
  // State to keep track of which modules the user has added
  const [stack, setStack] = useState<string[]>([]);

  // Available modules the user can add to their Super App
  const modules = ["SWAP", "LEND", "STAKE"];

  // Function to add a module to the stack if it's not already added
  const addModule = (mod: string) => {
    if (!stack.includes(mod)) setStack([...stack, mod]);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-[#00f2ff] text-sm font-bold uppercase mb-4 text-center">
        Protocol: Composability
      </h2>

      {/* Explainer text: guides user on what to do or shows completion message */}
      <p className="text-white text-[10px] text-center max-w-xs mb-4 uppercase opacity-70">
        {stack.length === 3
          ? "Super App constructed. Total synergy achieved."
          : "Build your app by stacking existing protocols. Click the modules below to add them."}
      </p>

      {/* Module buttons */}
      <div className="flex gap-4 mb-4">
        {modules.map((mod) => (
          <button
            key={mod}
            disabled={stack.includes(mod)} // Disable button if module already added
            onClick={() => addModule(mod)}
            className={`px-4 py-2 border-2 uppercase text-[10px] font-bold ${
              stack.includes(mod)
                ? "border-gray-600 text-gray-600" // Already added
                : "border-[#00f2ff] text-[#00f2ff]" // Available to add
            }`}
          >
            {mod}
          </button>
        ))}
      </div>

      {/* Show current stack so user can see what they've added */}
      {stack.length > 0 && (
        <div className="mb-4 text-white text-[10px] uppercase">
          Current App Stack: {stack.join(", ")}
        </div>
      )}

      {/* Show deploy button only when all modules are added */}
      {stack.length === 3 && (
        <button
          onClick={onComplete}
          className="px-6 py-2 bg-[#00f
