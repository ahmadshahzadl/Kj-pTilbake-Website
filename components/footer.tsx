import { Facebook, Instagram, Linkedin } from 'lucide-react'

const footerSections = [
  {
    title: "Tjenester",
    links: [
      "Tilbakekjøp",
      "Verdsettelse", 
      "Salg",
      "Konsultasjon"
    ]
  },
  {
    title: "Informasjon",
    links: [
      "Om oss",
      "Vilkår",
      "Personvern",
      "Sikkerhet"
    ]
  },
  {
    title: "Kontakt",
    links: [
      "+47 12 34 56 78",
      "post@kjoptilbake.no",
      "Storgata 1, 0155 Oslo"
    ]
  }
]

const socialIcons = [
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" }
]

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              {/* Replaced text-based logo with image logo */}
              <img 
                src="/logo.png" 
                alt="KjøpTilbake Logo" 
                className="h-20 w-auto mr-2" // Adjusted size for footer
              />
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Norges ledende tjeneste for trygg salg og tilbakekjøp av verdifulle gjenstander. 
              Vi gjør det enkelt å få umiddelbar likviditet uten å miste dine verdifulle eiendeler permanent.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a key={index} href={social.href}>
                    <IconComponent className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
                  </a>
                )
              })}
            </div>
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {section.title === "Kontakt" ? (
                      <span>{link}</span>
                    ) : (
                      <a href="#" className="hover:text-white">{link}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 KjøpTilbake AS. Alle rettigheter forbeholdt.</p>
        </div>
      </div>
    </footer>
  )
}
