import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqQuestions = [
  {
    question: "Er dette et lån?",
    answer: "Nei, dette er ikke et lån. KjøpTilbake er en tjeneste hvor du selger en gjenstand til oss med mulighet til å kjøpe den tilbake senere. Du får umiddelbar utbetaling, og du har full fleksibilitet til å kjøpe gjenstanden tilbake når det passer deg, innenfor avtalt periode."
  },
  {
    question: "Hva hvis jeg ikke kjøper tilbake?",
    answer: "Hvis du velger å ikke kjøpe gjenstanden tilbake innen avtalt periode, beholder KjøpTilbake eierskapet til gjenstanden. Det er ingen forpliktelser eller skjulte kostnader for deg, og det vil ikke påvirke din kredittverdighet."
  },
  {
    question: "Hvor trygg er lagringen?",
    answer: "Alle gjenstander lagres trygt og forsikret i våre sikre fasiliteter. Vi garanterer at din gjenstand blir behandlet med største forsiktighet og returnert i samme stand som den ble mottatt, dersom du velger å kjøpe den tilbake."
  },
  {
    question: "Hvor raskt får jeg pengene?",
    answer: "Etter at vi har mottatt og vurdert gjenstanden din, og du har akseptert tilbudet, overføres pengene til din konto samme dag. Vi prioriterer rask og effektiv utbetaling."
  },
  {
    question: "Kan jeg forlenge tilbakekjøpsperioden?",
    answer: "Ja, det er ofte mulig å forlenge tilbakekjøpsperioden. Ta kontakt med oss i god tid før avtalen utløper, så finner vi en løsning som passer dine behov. Det kan påløpe et gebyr for forlengelse."
  },
  {
    question: "Hvilke gjenstander aksepterer dere?",
    answer: "Vi aksepterer et bredt spekter av verdifulle gjenstander, inkludert klokker, smykker, elektronikk, kunst, og luksusvarer. Er du usikker, kan du sende inn en beskrivelse for en gratis og uforpliktende vurdering."
  }
]

export function FAQSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ofte stilte spørsmål</h2>
          <p className="text-xl text-gray-600">Alt du trenger å vite om vår tilbakekjøpstjeneste</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqQuestions.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index + 1}`} 
              className="bg-white rounded-xl shadow-sm border-none 
                         hover:shadow-md transition-shadow duration-200"
            >
              <AccordionTrigger className="text-lg font-semibold text-gray-900 px-6 py-4 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
