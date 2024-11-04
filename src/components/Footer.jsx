import { Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-[#9b4819] text-white px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <h2 className="text-[22.9px] font-['Radley',serif] mb-8 md:mb-0">
            Quick Links
          </h2>
          
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-start md:justify-end space-x-2">
              <Phone className="w-5 h-5" />
              <span>(123) 456 7890</span>
            </div>
            <div className="flex items-center justify-start md:justify-end space-x-2">
              <Mail className="w-5 h-5" />
              <span>hello@reallygreatsite.com</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="flex justify-center md:justify-start items-center space-x-4">
            <a href="https://www.instagram.com" className="hover:opacity-80 transition-opacity">
              <img src="/facebook-icon.png" alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com" className="hover:opacity-80 transition-opacity">
              <img src="/instagram-icon.png" alt="Facebook" className="w-6 h-6" />
            </a>
            <a href="https://www.twitter.com" className="hover:opacity-80 transition-opacity">
              <img src="/twitter icon.png" alt="Twitter" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}