"use client";
import dynamic from "next/dynamic";
import Head from "next/head";

// Load GameController dynamically because A-Frame requires the window object
const GameController = dynamic(() => import("../components/GameController"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="fc:miniapp"
          content='{
            "version":"1",
            "imageUrl":"https://block-basics.vercel.app/.well-known/splash.png",
            "button":{
              "title":"🚩 Start",
              "action":{
                "type":"launch_miniapp",
                "url":"https://block-basics.vercel.app",
                "name":"Block-30",
                "splashImageUrl":"https://block-basics.vercel.app/.well-known/splash.png",
                "splashBackgroundColor":"#A3C4F3"
              }
            }
          }'
        />
        <meta
          name="fc:frame"
          content='{
            "version":"1",
            "imageUrl":"https://block-basics.vercel.app/.well-known/splash.png",
            "button":{
              "title":"🚩 Start",
              "action":{
                "type":"launch_frame",
                "url":"https://block-basics.vercel.app",
                "name":"Block-30",
                "splashImageUrl":"https://block-basics.vercel.app/.well-known/splash.png",
                "splashBackgroundColor":"#A3C4F3"
              }
            }
          }'
        />
      </Head>

      <main className="min-h-screen bg-black">
        <GameController />
      </main>
    </>
  );
}
