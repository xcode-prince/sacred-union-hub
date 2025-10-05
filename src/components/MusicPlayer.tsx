import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Music, Pause, Play } from "lucide-react";
import { toast } from "sonner";

interface MusicPlayerProps {
  isPlaying: boolean;
}

const MusicPlayer = ({ isPlaying }: MusicPlayerProps) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // YouTube audio URL example - replace with actual audio file
  // For production, you should upload an actual audio file to your assets or use a streaming service
  const audioUrl = ""; // Add your audio file URL here

  useEffect(() => {
    if (isPlaying && audioRef.current && audioUrl) {
      audioRef.current.play().catch((error) => {
        console.log("Auto-play prevented:", error);
        toast.info("Klik tombol musik untuk memutar lagu", {
          description: "Browser memblokir auto-play musik",
        });
      });
      setIsAudioPlaying(true);
    }
  }, [isPlaying, audioUrl]);

  const toggleAudio = () => {
    if (!audioRef.current || !audioUrl) {
      toast.info("Musik belum tersedia", {
        description: "Silakan tambahkan file musik untuk mengaktifkan fitur ini",
      });
      return;
    }

    if (isAudioPlaying) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      audioRef.current.play();
      setIsAudioPlaying(true);
    }
  };

  if (!isPlaying) return null;

  return (
    <>
      {audioUrl && (
        <audio ref={audioRef} loop>
          <source src={audioUrl} type="audio/mpeg" />
        </audio>
      )}
      
      <Button
        onClick={toggleAudio}
        size="icon"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-gold bg-primary hover:bg-primary/90 text-primary-foreground z-50 animate-pulse hover:animate-none transition-smooth"
        aria-label={isAudioPlaying ? "Pause music" : "Play music"}
      >
        {isAudioPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Music className="w-6 h-6" />
        )}
      </Button>
    </>
  );
};

export default MusicPlayer;
