import couple1 from "@/assets/couple-1.jpg";
import couple2 from "@/assets/couple-2.jpg";
import couple3 from "@/assets/couple-3.jpg";

const GallerySection = () => {
  const photos = [couple1, couple2, couple3, couple1, couple2, couple3];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary text-sm md:text-base mb-2 tracking-widest uppercase">
            Galeri
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-secondary">
            Momen Indah Kami
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kenangan manis perjalanan cinta kami
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-soft hover:shadow-gold transition-smooth hover:scale-105 cursor-pointer"
            >
              <img 
                src={photo} 
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
