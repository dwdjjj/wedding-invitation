// components/MapClient.jsx
"use client";
import dynamic from "next/dynamic";

// Map.jsx는 클라이언트 전용이므로, SSR을 완전히 끔
const Map = dynamic(() => import("./Map"), { ssr: false });

export default function MapClient(props) {
  return <Map {...props} />;
}
