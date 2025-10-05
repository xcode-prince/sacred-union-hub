import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

const RsvpSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    attendance: "hadir",
    guestCount: "1",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send data to a backend
    console.log("RSVP Data:", formData);
    
    toast.success("Terima kasih telah mengkonfirmasi kehadiran Anda!", {
      description: "Kami menantikan kehadiran Anda di hari bahagia kami.",
    });
    
    // Reset form
    setFormData({
      name: "",
      attendance: "hadir",
      guestCount: "1",
    });
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <p className="text-primary text-sm md:text-base mb-2 tracking-widest uppercase">
            RSVP
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-secondary">
            Konfirmasi Kehadiran
          </h2>
          <p className="text-muted-foreground">
            Mohon konfirmasi kehadiran Anda sebelum tanggal acara
          </p>
        </div>

        <Card className="p-8 shadow-soft">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-base mb-2 block text-secondary">
                Nama Lengkap *
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Masukkan nama lengkap Anda"
                className="border-border focus:border-primary"
              />
            </div>

            <div>
              <Label className="text-base mb-3 block text-secondary">
                Konfirmasi Kehadiran *
              </Label>
              <RadioGroup
                value={formData.attendance}
                onValueChange={(value) => setFormData({ ...formData, attendance: value })}
              >
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:border-primary transition-smooth">
                  <RadioGroupItem value="hadir" id="hadir" />
                  <Label htmlFor="hadir" className="cursor-pointer flex-1">
                    <CheckCircle2 className="inline w-4 h-4 mr-2 text-primary" />
                    Ya, saya akan hadir
                  </Label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:border-primary transition-smooth">
                  <RadioGroupItem value="tidak-hadir" id="tidak-hadir" />
                  <Label htmlFor="tidak-hadir" className="cursor-pointer flex-1">
                    Maaf, saya tidak bisa hadir
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {formData.attendance === "hadir" && (
              <div>
                <Label htmlFor="guestCount" className="text-base mb-2 block text-secondary">
                  Jumlah Tamu *
                </Label>
                <Input
                  id="guestCount"
                  type="number"
                  min="1"
                  max="5"
                  required
                  value={formData.guestCount}
                  onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                  className="border-border focus:border-primary"
                />
                <p className="text-sm text-muted-foreground mt-2">
                  Termasuk Anda (maksimal 5 orang)
                </p>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg transition-smooth"
            >
              Kirim Konfirmasi
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default RsvpSection;
