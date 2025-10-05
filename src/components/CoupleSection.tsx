import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import coupleImg1 from "@/assets/couple-1.jpg";
import coupleImg2 from "@/assets/couple-2.jpg";

const CoupleSection = () => {
  const bride = {
    name: "Rossa Wijayanti",
    nickname: "Rossa",
    parents: "Putri dari Bapak [Samsul] & Ibu [Warni]",
    instagram: "@rossa.wijayanti21",
    image: coupleImg1,
  };

  const groom = {
    name: "Pangeran Dewanata",
    nickname: "Pangeran",
    parents: "Putra dari Bapak [Rachman] & Ibu [Mayga]",
    instagram: "@kokopangeran_",
    image: coupleImg2,
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary text-sm md:text-base mb-2 tracking-widest uppercase">
            Mempelai
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-secondary">
            Yang Berbahagia
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud untuk mengundang Bapak/Ibu/Saudara/i untuk hadir di acara pernikahan kami.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Bride */}
          <Card className="p-8 text-center shadow-soft hover:shadow-gold transition-smooth">
            <div className="relative w-64 h-80 mx-auto mb-6 rounded-lg overflow-hidden shadow-soft">
              <img 
                src={bride.image} 
                alt={bride.nickname}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-2 text-secondary">
              {bride.nickname}
            </h3>
            <p className="text-lg mb-3 text-muted-foreground">
              {bride.name}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {bride.parents}
            </p>
            <a 
              href={`https://instagram.com/${bride.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-smooth"
            >
              {bride.instagram}
            </a>
          </Card>

          {/* Divider */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 items-center justify-center">
            <Heart className="w-8 h-8 text-primary animate-pulse" fill="currentColor" />
          </div>

          {/* Groom */}
          <Card className="p-8 text-center shadow-soft hover:shadow-gold transition-smooth">
            <div className="relative w-64 h-80 mx-auto mb-6 rounded-lg overflow-hidden shadow-soft">
              <img 
                src={groom.image} 
                alt={groom.nickname}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-2 text-secondary">
              {groom.nickname}
            </h3>
            <p className="text-lg mb-3 text-muted-foreground">
              {groom.name}
            </p>
            <p className="text-sm text-muted-foreground mb-4">
              {groom.parents}
            </p>
            <a 
              href={`https://instagram.com/${groom.instagram.replace('@', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-smooth"
            >
              {groom.instagram}
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
