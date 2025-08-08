import { Card, CardContent } from "@/components/ui/card"
import { Upload, Search, CreditCard, RotateCcw, Zap } from 'lucide-react'

const timelineSteps = [
  {
    icon: Upload,
    step: "Dag 0",
    title: "Innsending",
    bgColor: "bg-[#e0e9ff]", // Light blue background
    iconColor: "text-[#3b82f6]", // Blue icon color
  },
  {
    icon: Search,
    step: "Dag 1",
    title: "Vurdering",
    bgColor: "bg-[#e0ffe9]", // Light green background
    iconColor: "text-[#22c55e]", // Green icon color
  },
  {
    icon: CreditCard,
    step: "Dag 2",
    title: "Utbetaling",
    bgColor: "bg-[#ffe9e0]", // Light orange background
    iconColor: "text-[#f97316]", // Orange icon color
  },
  {
    icon: RotateCcw,
    step: "Dag 90",
    title: "Siste dag",
    bgColor: "bg-[#f0f0f0]", // Light gray background
    iconColor: "text-[#6b7280]", // Gray icon color
  }
]

const statistics = [
  {
    value: "24t",
    label: "Gjennomsnittlig responstid",
    color: "text-nordic-blue"
  },
  {
    value: "98%",
    label: "Fornøyde kunder",
    color: "text-green-600"
  },
  {
    value: "90d",
    label: "Tilbakekjøpsgaranti",
    color: "text-orange-600"
  }
]

export function TimelineSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 shadow-lg rounded-xl bg-white mb-12"> {/* Big card wrapping the timeline */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tidslinje for prosessen</h2>
            <p className="text-xl text-gray-600">Fra innsending til utbetaling på rekordtid</p>
          </div>

          <div className="relative grid md:grid-cols-4 gap-8 items-start">
            {/* Horizontal line for desktop */}
            <div className="absolute hidden md:block top-[50px] left-0 right-0 h-[2px] bg-gray-200 mx-auto w-[calc(100%-160px)]"></div>
            
            {timelineSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div 
                  key={index} 
                  className="relative z-10 text-center group cursor-pointer" // Added cursor-pointer here
                >
                  <Card className="p-6 rounded-xl shadow-md bg-white h-full flex flex-col justify-between"> {/* Removed hover effects from Card */}
                    <CardContent className="p-0 flex flex-col items-center">
                      <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 relative`}>
                        <IconComponent className={`w-10 h-10 ${step.iconColor} transition-transform duration-300 group-hover:scale-110`} />
                      </div>
                      <h3 className={`text-lg font-bold ${step.iconColor} mb-1`}>{step.step}</h3>
                      <p className="text-sm text-gray-600">{step.title}</p>
                    </CardContent>
                  </Card>

                  {/* Arrow for desktop */}
                  {index < timelineSteps.length - 1 && (
                    <div className="hidden md:block absolute top-[50px] right-[-40px] transform -translate-y-1/2 z-20">
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

          <div className="text-center mt-8 flex items-center justify-center text-sm text-gray-500">
            <Zap className="w-4 h-4 text-orange-500 mr-1" />
            <p>Raskere enn tradisjonelle pantehus - moderne teknologi møter personlig service</p>
          </div>
        </Card>

        {/* Statistics Section - remains outside the big card */}
        <div className="grid md:grid-cols-3 gap-8 text-center mt-12">
          {statistics.map((stat, index) => (
            <div key={index}>
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
