// components/Map.jsx
"use client";
import { useEffect, useRef } from "react";

export default function Map({
  address = "인천",
  defaultLat = 37.450701,
  defaultLng = 126.570667,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.kakao?.maps?.load) {
      console.error("카카오맵 SDK가 아직 로드되지 않았습니다.");
      return;
    }

    // SDK 내부 로드가 끝난 시점의 콜백
    window.kakao.maps.load(() => {
      const kakao = window.kakao;
      const maps = kakao.maps;
      const container = ref.current;
      if (!container) {
        console.error("container 없음.");
        return;
      }

      // 주소를 좌표로 변환
      const geocoder = new maps.services.Geocoder();
      geocoder.addressSearch(address, (result, status) => {
        let centerLatLng;
        if (status === maps.services.Status.OK && result[0]) {
          const { y: lat, x: lng } = result[0];
          centerLatLng = new maps.LatLng(lat, lng);
        } else {
          console.warn("주소 검색 실패, 기본 좌표 사용:", status);
          centerLatLng = new maps.LatLng(defaultLat, defaultLng);
        }

        // 지도 생성
        const map = new maps.Map(container, {
          center: centerLatLng,
          level: 3,
        });

        // 마커 생성
        new maps.Marker({
          position: centerLatLng,
          map,
        });
      });
    });
  }, [address, defaultLat, defaultLng]);

  return <div ref={ref} className="w-full max-w-md h-64 bg-gray-200 mx-auto" />;
}
