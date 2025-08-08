import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card" // Import Card and CardContent
import { ContactInfo } from "./contact-info"

export function ContactSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Kontakt oss</h2>
          <p className="text-xl text-gray-600">
            Vi er her for å hjelpe deg med spørsmål om tilbakekjøpstjenesten
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form Card */}
          <Card className="p-8 shadow-lg rounded-xl bg-white">
            <CardContent className="p-0">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send oss en melding</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Navn</label>
                    <Input id="name" placeholder="" className="h-10" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-post</label>
                    <Input id="email" placeholder="" className="h-10" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Emne</label>
                  <Input id="subject" placeholder="" className="h-10" />
                </div>
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Melding</label>
                  <Textarea id="message" placeholder="" rows={4} className="min-h-[100px]" />
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 w-2 h-2 bg-red-500 rounded-full"></div> {/* Red dot */}
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 text-lg h-12 rounded-lg">
                  Send melding
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info, Opening Hours, Follow Us */}
          <div className="space-y-8">
            <Card className="p-8 shadow-lg rounded-xl bg-white">
              <CardContent className="p-0">
                <ContactInfo />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
