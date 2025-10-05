import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import CountdownSection from "@/components/CountdownSection";
import CoupleSection from "@/components/CoupleSection";
import EventSection from "@/components/EventSection";
import GallerySection from "@/components/GallerySection";
import StorySection from "@/components/StorySection";
import RsvpSection from "@/components/RsvpSection";
import GuestbookSection from "@/components/GuestbookSection";
import GiftSection from "@/components/GiftSection";
import Footer from "@/components/Footer";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <MusicPlayer isPlaying={isOpen} />
      
      {!isOpen && (
        <HeroSection onOpen={() => setIsOpen(true)} />
      )}
      
      {isOpen && (
        <div className="animate-fade-in">
          <CountdownSection />
          <CoupleSection />
          <EventSection />
          <GallerySection />
          <StorySection />
          <RsvpSection />
          <GuestbookSection />
          <GiftSection />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Index;
