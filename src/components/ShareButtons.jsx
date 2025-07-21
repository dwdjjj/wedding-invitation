"use client";
import { useEffect } from "react";
import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/Button";

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
    <div className={cn("w-full mt-8 flex justify-center space-x-4")}>
      <Button
        onClick={shareKakao}
        variant="primary"
        className={cn("bg-yellow-500 hover:bg-yellow-600")}
      >
        카카오톡 공유하기
      </Button>
    </div>
  );
}
