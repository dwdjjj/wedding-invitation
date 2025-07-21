import { Section } from "@/components/ui/Section";

export default function Contact() {
  return (
    <Section>
      <h2 className="text-xl font-semibold">📞 연락처</h2>
      <p className="text-gray-500">문의는 아래 연락처로 부탁드립니다.</p>
      <p className="font-semibold">신랑: 010-1234-5678</p>
      <p className="font-semibold">신부: 010-1111-2222</p>
    </Section>
  );
}
