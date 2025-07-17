// src/utils/effects.js

export async function registerCustomShapes() {
  if (typeof window === "undefined") return;
  const mojsModule = await import("@mojs/core");
  const mojs = mojsModule.default || mojsModule;

  // 하트 패스 (중심이 0,0, 위로 뻗는 형태)
  const heartPath = "M0,-20 C14,-20 14,0 0,20 C-14,0 -14,-20 0,-20 Z";

  // 꽃잎 패스 (조금 더 길쭉한 타원형)
  const petalPath = "M0,-15 C5,-15 5,5 0,15 C-5,5 -5,-15 0,-15 Z";

  // 등록
  mojs.addShape("HeartShape", {
    getShape() {
      return heartPath;
    },
  });
  mojs.addShape("PetalShape", {
    getShape() {
      return petalPath;
    },
  });
}

export async function playWeddingHearts() {
  if (typeof window === "undefined") return;
  // 커스텀 셰이프도 로드
  await registerCustomShapes();

  const { default: mojs } = await import("@mojs/core");
  const parent = document.getElementById("effect-root");

  // Timeline 세팅
  const tl = new mojs.Timeline();

  // 1) 은은한 글로우 링
  const glow = new mojs.Shape({
    parent,
    shape: "circle",
    fill: "rgba(255,182,193,0.2)",
    radius: { 0: 250 },
    duration: 1200,
    easing: "quad.out",
  });

  // 2) 하트 파티클 버스트
  const hearts = new mojs.Burst({
    parent,
    left: "50%",
    top: "40%",
    radius: { 0: 350 },
    count: 20,
    children: {
      shape: "HeartShape", // 방금 등록한 하트 셰이프
      fill: ["#FF69B4", "#FF1493", "#FFC0CB"],
      radius: { 12: 4 }, // 크기 랜덤
      duration: 2000,
      easing: "elastic.out",
      swirlSize: 20,
      swirlFrequency: 2,
    },
  });

  // 3) 작은 스파클
  const sparkles = new mojs.Burst({
    parent,
    left: "50%",
    top: "40%",
    radius: { 0: 300 },
    count: 30,
    children: {
      shape: "circle",
      fill: "#FFF",
      radius: { 4: 0 },
      duration: 1500,
      easing: "expo.out",
    },
  });

  tl.add(glow, hearts, sparkles);
  tl.replay();
}

export async function playFlowerRain(amount = 60) {
  if (typeof window === "undefined") return;
  const mojsModule = await import("@mojs/core");
  const mojs = mojsModule.default || mojsModule;
  const parent = document.getElementById("effect-root");
  const petals = [];

  // 1) 부드러운 텍스처 링
  new mojs.Shape({
    parent,
    shape: "circle",
    fill: "rgba(255,240,245,0.3)",
    radius: { 50: 500 },
    duration: 2000,
    easing: "quad.out",
  }).replay();

  // 2) 여러 번 반복되는 꽃잎 낙하
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      const xPos = Math.random() * window.innerWidth;
      const yStart = -20;
      const yEnd = window.innerHeight + 20;
      new mojs.Shape({
        parent,
        shape: "PetalShape",
        fill: ["#FFE4E1", "#FFF0F5", "#FFF0EE"],
        radius: { 8: 0 },
        left: xPos,
        top: { [yStart]: yEnd },
        duration: 4000 + Math.random() * 2000,
        easing: "linear.none",
        isShowStart: true,
      }).replay();
    }, i * 120);
  }

  // 3) 입체 스프링 스피어 (짧게 팡)
  setTimeout(() => {
    new mojs.Burst({
      parent,
      left: "50%",
      top: "30%",
      radius: { 0: 200 },
      count: 20,
      children: {
        shape: "circle",
        radius: { 6: 0 },
        fill: "#FFDAB9",
        duration: 1800,
        easing: "elastic.out",
      },
    }).replay();
  }, amount * 120 + 300);
}
