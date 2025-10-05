import { Heart } from "lucide-react";

const StorySection = () => {
  const timeline = [
    {
      year: "2020",
      title: "Pertemuan Pertama",
      description: "Takdir mempertemukan kami untuk pertama kalinya di sebuah acara yang tak pernah terlupakan.",
    },
    {
      year: "2022",
      title: "Jalinan Cinta",
      description: "Hubungan kami semakin dekat dan kami mulai menjalin hubungan yang serius.",
    },
    {
      year: "2024",
      title: "Lamaran",
      description: "Hari yang paling membahagiakan ketika kami resmi bertunangan dan memutuskan untuk bersama selamanya.",
    },
    {
      year: "2025",
      title: "Pernikahan",
      description: "Kami akan mengikat janji suci di hadapan Allah SWT dan orang-orang terkasih.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary text-sm md:text-base mb-2 tracking-widest uppercase">
            Cerita Kami
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-secondary">
            Perjalanan Cinta
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Setiap cinta memiliki ceritanya sendiri, dan ini adalah milik kami
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year badge */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-gold z-10">
                  <Heart className="w-6 h-6 text-primary-foreground" fill="currentColor" />
                </div>

                {/* Content */}
                <div className={`flex-1 ml-24 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-gold transition-smooth">
                    <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-serif mb-3 text-secondary">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternate layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
