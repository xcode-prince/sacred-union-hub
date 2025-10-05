import { Calendar, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EventSection = () => {
  const events = [
    {
      title: "Akad Nikah",
      date: "Minggu, 31 Desember 2025",
      time: "08:00 - 10:00 WIB",
      venue: "Masjid [Nama Masjid]",
      address: "Jl. Contoh Alamat No. 123, Jakarta Selatan",
      mapUrl: "https://maps.google.com/?q=-6.2088,106.8456",
    },
    {
      title: "Resepsi",
      date: "Minggu, 31 Desember 2025",
      time: "11:00 - 15:00 WIB",
      venue: "Gedung [Nama Gedung]",
      address: "Jl. Contoh Alamat No. 456, Jakarta Selatan",
      mapUrl: "https://maps.google.com/?q=-6.2088,106.8456",
    },
  ];

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary text-sm md:text-base mb-2 tracking-widest uppercase">
            Waktu & Tempat
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-secondary">
            Detail Acara
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="p-8 shadow-soft hover:shadow-gold transition-smooth">
              <h3 className="text-3xl font-serif mb-6 text-center gradient-primary bg-clip-text text-transparent">
                {event.title}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-secondary">Tanggal</p>
                    <p className="text-muted-foreground">{event.date}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-secondary">Waktu</p>
                    <p className="text-muted-foreground">{event.time}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-secondary">Lokasi</p>
                    <p className="text-muted-foreground">{event.venue}</p>
                    <p className="text-sm text-muted-foreground mt-1">{event.address}</p>
                  </div>
                </div>
              </div>
              
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-smooth"
                onClick={() => window.open(event.mapUrl, '_blank')}
              >
                <MapPin className="w-4 h-4 mr-2" />
                Lihat Lokasi di Google Maps
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
