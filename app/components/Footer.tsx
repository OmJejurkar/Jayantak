import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-purple-800 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-white to-orange-300 bg-clip-text text-transparent">
              Jayantak Media Solutions Pvt. Ltd.
            </h3>
            <p className="text-purple-100">
              Expert services in Political Campaign Management, Photography, Event Management, and more.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">Quick Links</h4>
            <ul className="space-y-3">
              {[
                ['Home', '/'],
                ['About', '/about'],
                ['Services', '/services'],
                ['Portfolio', '/portfolio'],
                ['Blog', '/blog'],
                ['Contact', '/contact']
              ].map(([label, href]) => (
                <li key={href}>
                  <Link 
                    href={href} 
                    className="text-purple-100 hover:text-orange-300 transition-colors duration-300 flex items-center gap-2"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-purple-100">
                <MapPin className="w-5 h-5 text-orange-300 shrink-0 mt-1" />
                <span>Pune, India</span>
              </li>
              <li className="flex items-center gap-3 text-purple-100">
                <Phone className="w-5 h-5 text-orange-300 shrink-0" />
                <span>77580 26807</span>
                <span>73506 24982</span>
              </li>
              <li className="flex items-center gap-3 text-purple-100">
                <Mail className="w-5 h-5 text-orange-300 shrink-0" />
                <span>contact.jayantak@gmail.con</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-300">Follow Us</h4>
            <div className="flex gap-4">
              {[
                [Facebook, '#facebook'],
                [Twitter, '#twitter'],
                [Instagram, 'https://www.instagram.com/jayantakmedia?igsh=Y3NiNjQydDRrY3Nr'],
                [Linkedin, '#linkedin']
              ].map(([Icon, href], index) => (
                <a 
                  key={index}
                  href={href}
                  className="bg-purple-700/50 p-2 rounded-lg hover:bg-orange-400/20 hover:text-orange-400 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-purple-700">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-purple-200">
            &copy; {new Date().getFullYear()} Jayantak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

