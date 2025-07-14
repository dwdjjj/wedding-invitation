import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Calendar from "@/components/Calendar";
import Guestbook from "@/components/Guestbook";
import ShareButtons from "@/components/ShareButtons";
import Header from "@/components/Header";
import MapClient from "@/components/MapClient";

export default function Home() {
  return (
    <div className="flexcenter flex-col min-h-screen w-full text-center p-6">
      <Header />
      <Contact />
      <Gallery />
      <Calendar />
      <Guestbook />
      <MapClient />

      <ShareButtons />
    </div>
  );
}
