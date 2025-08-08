import { Card, CardContent } from "@/components/ui/card"
import { Clock, Smartphone, Car, Gem, Star } from 'lucide-react' // Updated icons for better match

const categories = [
  {
    icon: Clock,
    name: "Klokker",
    bgColor: "bg-[#e0e9ff]", // Light blue background
    iconBgColor: "bg-[#a0c3ff]", // Darker blue for inner icon
    iconColor: "text-[#3b82f6]", // Blue icon color
    textColor: "text-gray-800"
  },
  {
    icon: Smartphone,
    name: "Mobiler",
    bgColor: "bg-[#e0ffe9]", // Light green background
    iconBgColor: "bg-[#a0ffc3]", // Darker green for inner icon
    iconColor: "text-[#22c55e]", // Green icon color
    textColor: "text-gray-800"
  },
  {
    icon: Car,
    name: "Kjøretøy",
    bgColor: "bg-[#ffe9e0]", // Light orange background
    iconBgColor: "bg-[#ffc3a0]", // Darker orange for inner icon
    iconColor: "text-[#f97316]", // Orange icon color
    textColor: "text-gray-800"
  },
  {
    icon: Gem,
    name: "Smykker",
    bgColor: "bg-[#f0e0ff]", // Light purple background
    iconBgColor: "bg-[#c3a0ff]", // Darker purple for inner icon
    iconColor: "text-[#a855f7]", // Purple icon color
    textColor: "text-gray-800"
  },
  {
    icon: Star,
    name: "Luksus",
    bgColor: "bg-[#fffbe0]", // Light yellow background
    iconBgColor: "bg-[#fff0a0]", // Darker yellow for inner icon
    iconColor: "text-[#eab308]", // Yellow icon color
    textColor: "text-gray-800"
  }
]

export function CategoryCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto mt-12">
      {categories.map((category, index) => {
        const IconComponent = category.icon
        return (
          <Card key={index} className={`${category.bgColor} rounded-xl shadow-md border-none`}>
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className={`${category.iconBgColor} rounded-xl p-4 mb-4`}>
                <IconComponent className={`w-8 h-8 ${category.iconColor}`} />
              </div>
              <p className={`text-base font-semibold ${category.textColor}`}>{category.name}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
