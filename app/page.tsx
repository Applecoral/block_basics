"use client";
import dynamic from "next/dynamic";

// We load the GameController dynamically with 'ssr: false' 
// because A-Frame requires the 'window' object which doesn't exist on the server.
const GameController = dynamic(() => import("../components/GameController"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <GameController />
    </main>
  );
}