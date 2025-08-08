import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Upload, Search, CreditCard, RotateCcw, CheckCircle, Clock, Star } from 'lucide-react' // Added CheckCircle, Clock, Star icons

const steps = [
  {
    icon: Upload,
    step: 1,
    title: "Send inn",
    subtitle: "beskrivelse og bilder",
    description: "Last opp detaljerte bilder og beskriv gjenstanden din. Vårt team får all nødvendig informasjon for en nøyaktig vurdering. Dette blir et verbalt tilbud basert på bilder og beskrivelsen du sender inn til oss. Godtar du dette verbale tilbudet så må gjenstanden sendes inn til oss for våre eksperter til å analyse gjenstanden.",
    footerIcon: CheckCircle,
    footerText: "Gratis og enkelt",
    bgColor: "bg-[#e0e9ff]", // Light blue background
    iconBgColor: "bg-[#a0c3ff]", // Darker blue for inner icon
    iconColor: "text-[#3b82f6]", // Blue icon color
    badgeColor: "bg-[#3b82f6]", // Blue badge
    footerIconColor: "text-green-500"
  },
  {
    icon: Search,
    step: 2,
    title: "Ekspert",
    subtitle: "vurdering og tilbud",
    description: "Etter at KjøpTilbake har mottatt gjenstanden analyserer våre eksperter gjenstanden og gir deg et konkurransedyktig tilbud basert på markedsverdi.",
    footerIcon: Clock,
    footerText: "Innen 24 timer",
    bgColor: "bg-[#e0ffe9]", // Light green background
    iconBgColor: "bg-[#a0ffc3]", // Darker green for inner icon
    iconColor: "text-[#22c55e]", // Green icon color
    badgeColor: "bg-[#22c55e]", // Green badge
    footerIconColor: "text-green-500"
  },
  {
    icon: CreditCard,
    step: 3,
    title: "Umiddelbar",
    subtitle: "utbetaling",
    description: "Aksepter tilbudet og motta pengene direkte på din konto via bankoverføring eller vipps. Trygg og sikker overføring.",
    footerIcon: CheckCircle, // Assuming a checkmark for "Samme dag"
    footerText: "Samme dag",
    bgColor: "bg-[#ffe9e0]", // Light orange background
    iconBgColor: "bg-[#ffc3a0]", // Darker orange for inner icon
    iconColor: "text-[#f97316]", // Orange icon color
    badgeColor: "bg-[#f97316]", // Orange badge
    footerIconColor: "text-green-500"
  },
  {
    icon: RotateCcw, // Changed from Package to RotateCcw for better match
    step: 4,
    title: "Kjøp tilbake når",
    subtitle: "du ønsker",
    description: "Du har full kontroll med opptil 90 dager til å kjøpe gjenstanden tilbake til forhåndsbestemt pris.",
    footerIcon: CheckCircle, // Assuming a checkmark for "90 dagers garanti"
    footerText: "90 dagers garanti",
    bgColor: "bg-[#f0f0f0]", // Light gray background
    iconBgColor: "bg-[#d0d0d0]", // Darker gray for inner icon
    iconColor: "text-[#6b7280]", // Gray icon color
    badgeColor: "bg-[#6b7280]", // Gray badge
    footerIconColor: "text-green-500"
  }
]

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-nordic-blue mb-2">Enkel prosess</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Slik fungerer KjøpTilbake</h2>
          <p className="text-xl text-gray-600">
            En trygg og transparent prosess som gir deg umiddelbar utbetaling i dag og 
            fleksibilitet til å kjøpe tilbake når det passer deg
          </p>
        </div>

        <div className="relative grid md:grid-cols-4 gap-8 items-start">
          {/* Horizontal line for desktop */}
          <div className="absolute hidden md:block top-[100px] left-0 right-0 h-[2px] bg-gray-200 mx-auto w-[calc(100%-160px)]"></div>
          
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const FooterIconComponent = step.footerIcon
            return (
              <div key={index} className="relative z-10">
                <Card className="text-center shadow-lg rounded-xl h-full flex flex-col justify-between">
                  <CardContent className="p-6 flex flex-col items-center">
                    <div className={`w-20 h-20 ${step.iconBgColor} rounded-full flex items-center justify-center mx-auto mb-4 relative`}>
                      <IconComponent className={`w-10 h-10 ${step.iconColor}`} />
                      <Badge className={`absolute -top-1 -right-1 w-7 h-7 rounded-full ${step.badgeColor} text-white text-sm flex items-center justify-center font-bold`}>
                        {step.step}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                    <h4 className="text-base font-medium text-gray-700 mb-4">{step.subtitle}</h4>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{step.description}</p>
                    <div className="flex items-center justify-center text-sm font-medium text-gray-600">
                      <FooterIconComponent className={`w-4 h-4 ${step.footerIconColor} mr-1`} />
                      {step.footerText}
                    </div>
                  </CardContent>
                </Card>
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-[100px] right-[-40px] transform -translate-y-1/2 z-20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 5L21 12L14 19" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M21 12H3" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
