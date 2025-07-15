// components/SectionEffect.jsx
"use client";
import { useRef, useEffect } from "react";

export default function EffectsManager({ children, onEnter, threshold = 0.3 }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          onEnter(); // 스크롤 진입 시 이펙트 실행
          observer.disconnect(); // 한 번만 실행
        }
      },
      { threshold }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [onEnter, threshold]);

  return <div ref={ref}>{children}</div>;
}
