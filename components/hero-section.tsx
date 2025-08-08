import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Clock, Star, Calculator } from "lucide-react"; // Added Calculator icon
import { CategoryCards } from "./category-cards";

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <p className="bg-white/60 rounded-full text-nordic-blue text-sm font-medium mb-4 px-4 py-2 inline-block mx-auto">
          Norges mest pålitelige tilbakekjøpstjeneste
        </p>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-dark-gray-text to-black text-transparent bg-clip-text">
          Selg nå. Kjøp tilbake senere.
          <br />
          <span className="bg-gradient-to-r from-nordic-blue to-blue-600 text-transparent bg-clip-text">
            Enkelt og trygt.
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Få umiddelbar utbetaling for verdifulle gjenstander og få tilbakekjøp
          til kjøpte dem tilbake når det passer deg best.
        </p>

        <Card className="max-w-2xl mx-auto p-8 shadow-lg rounded-xl">
          <CardContent className="p-0">
            <p className="text-3xl font-bold text-gray-900 mb-6">
              Hva ønsker du å selge for tilbakekjøp?
            </p>
            <Input
              placeholder="Beskriv gjenstanden din (f.eks. Rolex Submariner, iPhone 14 Pro)"
              className="mb-4 h-12 text-base"
            />
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 text-lg h-12 rounded-lg flex items-center justify-center gap-2">
              <Calculator className="w-5 h-5" />
              Få gratis verdsettelse
            </Button>
            <div className="flex justify-center items-center mt-4 space-x-2"></div>
            <div className="flex justify-center space-x-8 mt-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-green-500" />
                Svar innen 24 timer
              </span>
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500" />
                100% trygg tjeneste
              </span>
            </div>
          </CardContent>
        </Card>

        <CategoryCards />
      </div>
    </section>
  );
}
