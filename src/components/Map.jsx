// components/Map.jsx
"use client";
import { useEffect, useRef } from "react";

export default function Map({ lat = 37.450701, lng = 126.570667 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.kakao?.maps?.load) {
      console.error("카카오맵 SDK가 아직 로드되지 않았습니다.");
      return;
    }

    // SDK 내부 로드가 끝난 시점의 콜백
    window.kakao.maps.load(() => {
      const { maps } = window.kakao;
      const container = ref.current;
      const options = {
        center: new maps.LatLng(lat, lng),
        level: 3,
      };
      const map = new maps.Map(container, options);
      new maps.Marker({
        position: new maps.LatLng(lat, lng),
        map,
      });
    });
  }, [lat, lng]);

  return <div ref={ref} className="w-full h-64 bg-gray-200" />;
}
