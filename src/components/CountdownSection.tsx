import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

const CountdownSection = () => {
  // Set target wedding date (example: December 31, 2025)
  const targetDate = new Date("2025-12-31T10:00:00").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-secondary text-sm md:text-base mb-2 tracking-widest uppercase">
          Save The Date
        </p>
        <h2 className="text-4xl md:text-5xl font-serif mb-12 text-secondary">
          Counting Down to Forever
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "Hari", value: timeLeft.days },
            { label: "Jam", value: timeLeft.hours },
            { label: "Menit", value: timeLeft.minutes },
            { label: "Detik", value: timeLeft.seconds },
          ].map((item) => (
            <Card key={item.label} className="p-6 md:p-8 shadow-soft bg-card">
              <p className="text-4xl md:text-6xl font-serif font-bold gradient-primary bg-clip-text text-transparent mb-2">
                {item.value.toString().padStart(2, "0")}
              </p>
              <p className="text-muted-foreground text-sm md:text-base uppercase tracking-wider">
                {item.label}
              </p>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 p-6 bg-card rounded-lg shadow-soft max-w-2xl mx-auto">
          <p className="text-secondary/80 italic text-sm md:text-base leading-relaxed">
            "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
          </p>
          <p className="text-secondary font-semibold mt-3 text-sm md:text-base">
            — QS. Ar-Rum: 21
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
