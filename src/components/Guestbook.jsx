"use client";
import { useState } from "react";

export default function GuestbookInline() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState([]);

  const handleRegister = () => {
    if (!name.trim() || !message.trim()) return;
    const newEntry = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date(),
    };
    setEntries([newEntry, ...entries]);
    setName("");
    setMessage("");
  };

  const formatTS = (d) =>
    d.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });

  return (
    <section className="w-full max-w-md mx-auto p-4">
      <h2 className="text-xl font-semibold mb-2">📝 방명록</h2>

      <div className="flex space-x-2 mb-2">
        <input
          type="text"
          placeholder="이름"
          className="w-24 p-2 rounded-md border border-gray-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="축하 메시지를 입력하세요"
          className="flex-1 p-2 rounded-md border border-gray-300"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <button
        onClick={handleRegister}
        className="w-full py-2 bg-blue-600 text-white rounded-md"
      >
        등록하기
      </button>

      <ul className="mt-4 space-y-2">
        {entries.map(({ id, name, message, timestamp }) => (
          <li key={id} className="p-3 bg-gray-50 rounded-md shadow">
            <div className="flex justify-between mb-1">
              <span className="font-medium">{name}</span>
              <span className="text-sm text-gray-500">
                {formatTS(timestamp)}
              </span>
            </div>
            <p>{message}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
