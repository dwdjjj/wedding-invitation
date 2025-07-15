// 1) 부케 토스
export async function playBouquet(count = 40) {
  if (typeof window === "undefined") return; // 서버에서는 무시
  const mojsModule = await import("@mojs/core"); // 클라이언트에서만 import
  const mojs = mojsModule.default || mojsModule;
  const parent = document.getElementById("effect-root");
  new mojs.Burst({
    parent,
    left: "50%",
    top: "90%",
    radius: { 0: 500 },
    count,
    angle: { 85: 95 },
    children: {
      shape: "circle",
      radius: { 10: 0 },
      fill: ["#FFC0CB", "#FF69B4", "#FFF0F5"],
      duration: 3000,
      easing: "cubic.out",
    },
  }).replay();
}

// 2) 하트 버스트
export async function playHeartBurst(count = 30) {
  if (typeof window === "undefined") return;
  const mojsModule = await import("@mojs/core");
  const mojs = mojsModule.default || mojsModule;
  const parent = document.getElementById("effect-root");
  new mojs.Burst({
    parent,
    left: "50%",
    top: "30%",
    radius: { 0: 400 },
    count,
    children: {
      shape: "heart",
      radius: { 12: 0 },
      fill: ["#FF1493", "#FF69B4"],
      duration: 2500,
      easing: "elastic.out",
    },
  }).replay();
}

// 3) 꽃잎 낙하
export async function playFlowerRain(amount = 50) {
  if (typeof window === "undefined") return;
  const mojsModule = await import("@mojs/core");
  const mojs = mojsModule.default || mojsModule;
  const parent = document.getElementById("effect-root");
  for (let i = 0; i < amount; i++) {
    setTimeout(() => {
      const xPos = Math.random() * window.innerWidth;
      new mojs.Burst({
        parent,
        left: xPos,
        top: "-20px",
        radius: { 0: 20 },
        count: 1,
        children: {
          shape: "circle",
          radius: { 8: 0 },
          fill: ["#FFE4E1", "#FFF0F5"],
          duration: 4000,
          easing: "linear.none",
          angle: 90,
        },
      }).replay();
    }, i * 150);
  }
}
