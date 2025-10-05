import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

interface HeroSectionProps {
  onOpen: () => void;
}

const HeroSection = ({ onOpen }: HeroSectionProps) => {
  return (
    <div 
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 gradient-overlay" />
      
      <div className="relative z-10 text-center text-black px-4 animate-fade-in">
        <Heart className="w-16 h-16 mx-auto mb-6 animate-pulse" fill="currentColor" />
        
        <h1 className="text-5xl md:text-7xl font-serif mb-4 tracking-wide">
          The Wedding
        </h1>
        
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-px w-16 bg-white/50" />
          <p className="text-xl md:text-2xl font-light tracking-widest">OF</p>
          <div className="h-px w-16 bg-white/50" />
        </div>
        
        <h2 className="text-4xl md:text-6xl font-serif mb-8 gradient-primary bg-clip-text text-red">
          Pangeran & Istrinya
        </h2>
        
        <p className="text-lg md:text-xl mb-4 font-light">
          Kepada Yth. Bapak/Ibu/Saudara/i
        </p>
        <p className="text-2xl md:text-3xl font-serif mb-12">
          [Pandu Haryanto & Partner]
        </p>
        
        <Button
          onClick={onOpen}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full shadow-gold transition-smooth hover:scale-105"
        >
          Buka Undangan
        </Button>
        
        <p className="mt-8 text-sm opacity-75">
          Scroll untuk membuka undangan
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
