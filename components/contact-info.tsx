import { Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin } from 'lucide-react' // Changed MapPin to MessageCircle

const contactDetails = [
  {
    icon: Phone,
    text: "+47 41 75 38 84"
  },
  {
    icon: Mail,
    text: "Asdullah99@hotmail.com"
  },
  {
    icon: MessageCircle, // Changed icon to MessageCircle for Chat
    text: "Tilgjengelig 09-17",
    label: "Chat" // Added label for Chat
  }
]

const openingHours = [
  {
    day: "Mandag - Fredag",
    hours: "09:00 - 00:00"
  },
  {
    day: "Lørdag",
    hours: "10:00 - 22:00"
  },
  {
    day: "Søndag",
    hours: "12:00 - 20:00"
  }
]

const socialLinks = [
  { icon: Facebook, color: "hover:text-blue-600" },
  { icon: Instagram, color: "hover:text-pink-600" },
  { icon: Linkedin, color: "hover:text-blue-700" }
]

export function ContactInfo() {
  return (
    <div>
      {/* Kontaktinformasjon */}
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Kontaktinformasjon</h3>
      <div className="space-y-4">
        {contactDetails.map((contact, index) => {
          const IconComponent = contact.icon
          return (
            <div key={index} className="flex items-center">
              <IconComponent className="w-5 h-5 text-gray-400 mr-3" />
              <div>
                {contact.label && <span className="block text-sm font-medium text-gray-700">{contact.label}</span>}
                <span className="text-gray-600">{contact.text}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Åpningstider */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Åpningstider</h4>
        <div className="space-y-2 text-sm text-gray-600">
          {openingHours.map((schedule, index) => (
            <div key={index} className="flex justify-between">
              <span>{schedule.day}</span>
              <span>{schedule.hours}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Følg oss */}
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Følg oss</h4>
        <div className="flex space-x-4">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <IconComponent 
                key={index}
                className={`w-6 h-6 text-gray-400 ${social.color} cursor-pointer`} 
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
