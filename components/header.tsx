import { Button } from "@/components/ui/button"
import { LogIn, Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-36">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img 
                src="/logo.png" 
                alt="KjøpTilbake Logo" 
                className="h-28 w-auto transition-transform hover:scale-105"
              />
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Navigation Links with Underline Effect from Middle */}
              <button className="relative text-gray-700 hover:text-nordic-blue px-3 py-2 text-sm font-medium transition-all duration-300 cursor-pointer hover:scale-105 group">
                Hvordan det fungerer
                <span className="absolute bottom-0 left-1/2 w-full h-[2px] bg-nordic-blue scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 -translate-x-1/2"></span>
              </button>
              <a href="/vurdering" className="relative text-gray-700 hover:text-nordic-blue px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 group">
                Vurder gjenstand
                <span className="absolute bottom-0 left-1/2 w-full h-[2px] bg-nordic-blue scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 -translate-x-1/2"></span>
              </a>
              <button className="relative text-gray-700 hover:text-nordic-blue px-3 py-2 text-sm font-medium transition-all duration-300 cursor-pointer hover:scale-105 group">
                Ofte stilte spørsmål
                <span className="absolute bottom-0 left-1/2 w-full h-[2px] bg-nordic-blue scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 -translate-x-1/2"></span>
              </button>
              <button className="relative text-gray-700 hover:text-nordic-blue px-3 py-2 text-sm font-medium transition-all duration-300 cursor-pointer hover:scale-105 group">
                Kontakt oss
                <span className="absolute bottom-0 left-1/2 w-full h-[2px] bg-nordic-blue scale-x-0 transition-transform duration-300 origin-center group-hover:scale-x-100 -translate-x-1/2"></span>
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {/* Login Button with Rounded Corners and Custom Hover */}
            <Button 
              variant="ghost" 
              className="text-gray-700 hover:text-nordic-blue hover:bg-nordic-accent h-10 px-4 py-2 transition-colors duration-300 rounded-full"
            >
              <LogIn className="mr-2 h-4 w-4" />
              Logg inn
            </Button>
            {/* Kom i gang Button with Rounded Corners */}
            <Button className="bg-nordic-blue hover:bg-blue-600 text-white h-10 px-4 py-2 rounded-full">
              Kom i gang
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
