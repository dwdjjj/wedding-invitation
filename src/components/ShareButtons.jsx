"use client"; // 클라이언트 컴포넌트로 설정

export default function ShareButtons() {
  const shareToKakao = () => {
    if (window.Kakao) {
      window.Kakao.Share.sendCustom({
        templateId: process.env.NEXT_PUBLIC_KAKAO_TEMPLATE_ID, // ✅ 환경변수에서 불러오기
      });
    } else console.log(window.kakao);
  };

  return (
    <button
      onClick={shareToKakao}
      className="bg-yellow-500 text-white p-2 rounded-lg"
    >
      카카오톡 공유하기
    </button>
  );
}
