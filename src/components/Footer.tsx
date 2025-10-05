import { Button } from "@/components/ui/button";
import { Share2, Heart } from "lucide-react";
import { toast } from "sonner";

const Footer = () => {
  const shareToWhatsApp = () => {
    const message = encodeURIComponent(
      "Assalamualaikum, Anda diundang ke pernikahan kami! Lihat undangan digital kami di: " + 
      window.location.href
    );
    window.open(`https://wa.me/?text=${message}`, '_blank');
  };

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link undangan berhasil disalin!", {
      description: "Anda dapat membagikan link ini kepada tamu lainnya.",
    });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Heart className="w-12 h-12 mx-auto mb-6 text-primary animate-pulse" fill="currentColor" />
        
        <h3 className="text-3xl md:text-4xl font-serif mb-4">
          Merupakan Suatu Kehormatan dan Kebahagiaan Bagi Kami
        </h3>
        
        <p className="text-lg mb-8 opacity-90">
          Apabila Bapak/Ibu/Saudara/i Berkenan Hadir dan Memberikan Doa Restu
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={shareToWhatsApp}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
          >
            <Share2 className="w-5 h-5 mr-2" />
            Bagikan ke WhatsApp
          </Button>
          
          <Button
            onClick={copyLink}
            size="lg"
            variant="outline"
            className="bg-transparent border-primary/30 hover:bg-primary/10 transition-smooth"
          >
            Salin Link Undangan
          </Button>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <p className="text-4xl md:text-5xl font-serif mb-4">
            Kami yang Berbahagia
          </p>
          <p className="text-2xl md:text-3xl font-serif mb-6 gradient-primary bg-clip-text text-transparent">
            Pengantin Wanita & Pengantin Pria
          </p>
          
          <p className="text-sm opacity-75">
            Terima kasih atas doa dan restu Anda
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <p className="text-sm opacity-60">
            Made with <Heart className="inline w-4 h-4 mx-1" fill="currentColor" /> by Koko Pangeran
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
