"use client";
import { createContext, useState, useContext } from "react";
import Script from "next/script";

const KakaoContext = createContext({ loaded: false });

export function KakaoProvider({ children }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Script
        src="https://developers.kakao.com/sdk/js/kakao.js"
        strategy="beforeInteractive"
      />
      <Script
        src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&autoload=false&libraries=services`}
        strategy="afterInteractive"
        onLoad={() => setLoaded(true)}
      />

      {/* Context로 로딩 상태 제공 */}
      <KakaoContext.Provider value={{ loaded }}>
        {children}
      </KakaoContext.Provider>
    </>
  );
}

export function useKakaoLoaded() {
  return useContext(KakaoContext).loaded;
}
