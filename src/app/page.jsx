"use client";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Calendar from "@/components/Calendar";
import Guestbook from "@/components/Guestbook";
import ShareButtons from "@/components/ShareButtons";
import Header from "@/components/Header";
import MapClient from "@/components/MapClient";
import SectionEffect from "@/effects/SectionEffect";
import { playWeddingHearts, playFlowerRain } from "@/effects/effects";

export default function Home() {
  return (
    <div className="main-container flexcenter flex-col text-center">
      <SectionEffect onEnter={() => playFlowerRain(50)} threshold={0.5}>
        <Header />
      </SectionEffect>
      <Contact />

      <Gallery />

      <Calendar />
      <SectionEffect onEnter={() => playWeddingHearts(60)} threshold={1}>
        <Guestbook />
      </SectionEffect>
      <MapClient />
      <ShareButtons />
    </div>
  );
}
