import Image from "next/image";
import photo1 from "../images/photo1.jpg"; // 이미지 임포트

export default function Header() {
  return (
    <header className="text-center pt-2">
      <h1 className="text-3xl font-bold mt-4">YJ & YJ</h1>
      <p className="text-lg text-gray-500 mt-2">
        우리의 소중한 결혼식에 초대합니다.
      </p>
      <Image
        src={photo1}
        alt="Wedding"
        width={500}
        height={300}
        className="w-full max-w-xs mx-auto rounded-lg shadow-lg mt-4"
      />
    </header>
  );
}
