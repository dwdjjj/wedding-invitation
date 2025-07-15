"use client";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Calendar from "@/components/Calendar";
import Guestbook from "@/components/Guestbook";
import ShareButtons from "@/components/ShareButtons";
import Header from "@/components/Header";
import MapClient from "@/components/MapClient";
import SectionEffect from "@/effects/SectionEffect";
import {
  playBouquet,
  playHeartBurst,
  playFlowerRain,
} from "../effects/effects";

export default function Home() {
  return (
    <div className="main-container flexcenter flex-col text-center">
      <SectionEffect onEnter={() => playBouquet(50)} threshold={0.5}>
        <Header />
      </SectionEffect>
      <Contact />
      <SectionEffect onEnter={() => playHeartBurst(40)} threshold={1}>
        <Gallery />
      </SectionEffect>
      <Calendar />
      <SectionEffect onEnter={() => playFlowerRain(60)} threshold={1}>
        <Guestbook />
      </SectionEffect>
      <MapClient />
      <ShareButtons />
    </div>
  );
}
