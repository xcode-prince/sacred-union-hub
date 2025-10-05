import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";

interface Message {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

const GuestbookSection = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "Tamu Undangan 1",
      message: "Selamat menempuh hidup baru! Semoga menjadi keluarga yang sakinah, mawaddah, warahmah.",
      timestamp: new Date(),
    },
    {
      id: 2,
      name: "Tamu Undangan 2",
      message: "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair. Selamat ya!",
      timestamp: new Date(),
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newMessage: Message = {
      id: Date.now(),
      name: formData.name,
      message: formData.message,
      timestamp: new Date(),
    };
    
    setMessages([newMessage, ...messages]);
    
    toast.success("Terima kasih atas ucapan dan doa Anda!", {
      description: "Semoga kebaikan kembali kepada Anda.",
    });
    
    setFormData({ name: "", message: "" });
  };

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <p className="text-primary text-sm md:text-base mb-2 tracking-widest uppercase">
            Buku Tamu
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-secondary">
            Ucapan & Doa
          </h2>
          <p className="text-muted-foreground">
            Berikan ucapan dan doa terbaik untuk kami
          </p>
        </div>

        <Card className="p-8 mb-8 shadow-soft">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="guestName" className="text-base mb-2 block text-secondary">
                Nama Lengkap *
              </Label>
              <Input
                id="guestName"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Masukkan nama Anda"
                className="border-border focus:border-primary"
              />
            </div>

            <div>
              <Label htmlFor="guestMessage" className="text-base mb-2 block text-secondary">
                Ucapan & Doa *
              </Label>
              <Textarea
                id="guestMessage"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tuliskan ucapan dan doa Anda untuk kami..."
                className="border-border focus:border-primary min-h-[120px]"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg transition-smooth"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Kirim Ucapan
            </Button>
          </form>
        </Card>

        <div className="space-y-4">
          <h3 className="text-2xl font-serif text-secondary mb-6">
            Ucapan dari Tamu ({messages.length})
          </h3>
          
          {messages.map((msg) => (
            <Card key={msg.id} className="p-6 shadow-soft hover:shadow-gold transition-smooth">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-secondary mb-1">{msg.name}</h4>
                  <p className="text-muted-foreground mb-2">{msg.message}</p>
                  <p className="text-xs text-muted-foreground/70">
                    {msg.timestamp.toLocaleDateString('id-ID', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestbookSection;
