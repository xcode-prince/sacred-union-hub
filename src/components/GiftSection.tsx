import { Copy, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const GiftSection = () => {
  const bankAccounts = [
    {
      bank: "Bank BCA",
      accountNumber: "1234567890",
      accountName: "Nama Pemilik Rekening",
    },
    {
      bank: "Bank Mandiri",
      accountNumber: "0987654321",
      accountName: "Nama Pemilik Rekening",
    },
  ];

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} berhasil disalin!`, {
      description: text,
    });
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <p className="text-primary text-sm md:text-base mb-2 tracking-widest uppercase">
            Hadiah
          </p>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-secondary">
            Amplop Digital
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Doa Restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberi kado secara cashless.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {bankAccounts.map((account, index) => (
            <Card key={index} className="p-8 shadow-soft hover:shadow-gold transition-smooth">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif text-secondary">{account.bank}</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Nomor Rekening</p>
                  <div className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
                    <p className="font-semibold text-lg tracking-wider text-secondary">
                      {account.accountNumber}
                    </p>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(account.accountNumber, "Nomor rekening")}
                      className="hover:bg-primary/10"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Atas Nama</p>
                  <div className="flex items-center justify-between bg-muted/50 p-3 rounded-lg">
                    <p className="font-semibold text-secondary">{account.accountName}</p>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(account.accountName, "Nama rekening")}
                      className="hover:bg-primary/10"
                    >
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
          <p className="text-center text-muted-foreground italic">
            <Gift className="inline w-4 h-4 mr-2" />
            Atau Anda dapat mengirimkan kado langsung ke alamat:
            <br />
            <span className="font-semibold text-secondary mt-2 block">
              Jl. Contoh Alamat No. 789, Jakarta Selatan 12345
            </span>
          </p>
        </Card>
      </div>
    </section>
  );
};

export default GiftSection;
