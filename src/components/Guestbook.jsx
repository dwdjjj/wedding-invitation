"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export default function Guestbook() {
  const [entries, setEntries] = useState([]);
  const [form, setForm] = useState({ name: "", password: "", message: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleRegister = () => {
    const { name, password, message } = form;
    if (!name.trim() || !password.trim() || !message.trim()) return;
    const timestamp = new Date().toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    setEntries([
      { id: Date.now(), name, password, message, timestamp },
      ...entries,
    ]);
    setForm({ name: "", password: "", message: "" });
  };

  const handleDelete = (id, pw) => {
    const input = prompt("비밀번호를 입력하세요");
    if (input === pw) {
      setEntries(entries.filter((e) => e.id !== id));
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  return (
    <section className="w-full max-w-md mx-auto py-8">
      <h2 className="text-2xl mb-4 font-semibold">📝 방명록</h2>

      <div className="flex space-x-2 mb-2">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="이름"
          className="flex-1 p-2 rounded border border-gray-300"
        />
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="비밀번호"
          className="flex-1 p-2 rounded border border-gray-300"
        />
      </div>
      <textarea
        name="message"
        rows={3}
        value={form.message}
        onChange={handleChange}
        placeholder="축하 메시지를 남겨주세요."
        className="w-full p-2 rounded border border-gray-300 mb-2"
      />
      <Button onClick={handleRegister} className="w-full">
        등록하기
      </Button>

      <ul className="mt-6 space-y-4">
        {entries.map(({ id, name, message, timestamp, password }) => (
          <li key={id} className="p-4 bg-white/80 rounded space-y-2">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="font-bold">{name}</span>
              <div className="flex items-center space-x-4">
                <span>{timestamp}</span>+
                <Button
                  onClick={() => handleDelete(id, password)}
                  variant="danger"
                  size="sm"
                >
                  삭제
                </Button>
              </div>
            </div>

            <p className="text-gray-800">{message}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
