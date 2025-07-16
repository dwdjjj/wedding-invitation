"use client";
import dynamic from "next/dynamic";
import { useKakaoLoaded } from "@/context/KakaoContext";

const Map = dynamic(() => import("./Map"), { ssr: false });

export default function MapClient(props) {
  const kakaoLoaded = useKakaoLoaded();

  // 로딩 전
  if (!kakaoLoaded) {
    return <p className="text-center py-8">지도 로딩 중…</p>;
  }

  // 로드 완료 -> Map 컴포넌트 렌더링
  return <Map {...props} />;
}
