"use client";
import { useEffect } from "react";

export default function ShareButtons() {
  const APP_KEY = process.env.NEXT_PUBLIC_KAKAO_API_KEY;
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(APP_KEY);
    }
  }, [APP_KEY]);

  const shareKakao = () => {
    if (!window.Kakao) return;
    window.Kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "우리의 결혼식에 초대합니다",
        description: "YJ & YJ Wedding Invitation",
        imageUrl: "../images/photo2.jpg",
        link: {
          mobileWebUrl: shareUrl,
          webUrl: shareUrl,
        },
      },
      buttons: [
        {
          title: "초대장 보러가기",
          link: {
            mobileWebUrl: shareUrl,
            webUrl: shareUrl,
          },
        },
      ],
    });
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
      <button
        onClick={shareKakao}
        className="bg-yellow-500 px-4 py-2 rounded text-white"
      >
        카카오톡 공유하기
      </button>
      {/* 필요 시 페북, 네이버 공유도 추가 */}
    </div>
  );
}
