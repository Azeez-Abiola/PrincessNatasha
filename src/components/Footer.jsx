import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#44BBA4] text-white px-6 md:px-12 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="flex flex-col space-y-4">
            <img src="./logo.png" alt="Logo" className="w-28 h-28" />
          </div>
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
            <div>
              <h2 className="font-bold mb-4">Services</h2>
              <ul className="space-y-2">
                <li className="transition-transform transform hover:translate-x-2"><a href="/blog">Content Strategy</a></li>
                <li className="transition-transform transform hover:translate-x-2"><a href="/blog">Content Writing</a></li>
                <li className="transition-transform transform hover:translate-x-2"><a href="/blog">Brand Strategy</a></li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li className="transition-transform transform hover:translate-x-2">
                  <a 
                    href="#"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Contact Me
                  </a>
                </li>
                <li className="transition-transform transform hover:translate-x-2"><a href="/About">About Me</a></li>
                <li className="transition-transform transform hover:translate-x-2"><a href="/Portfolio">Portfolio</a></li>
                <li className="transition-transform transform hover:translate-x-2"><a href="/blog">Blog</a></li>
                <li className="transition-transform transform hover:translate-x-2" 
                    onClick={(e) => {
                        e.preventDefault(); // Prevent default link behavior
                        document.querySelector('#services-section').scrollIntoView({ behavior: 'smooth' });
                    }}
                >
                    Services
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-4">Social</h2>
              <ul className="space-y-2">
                <li className="transition-transform transform hover:translate-x-2"><a href="Linkedin-

https://www.linkedin.com/in/princess-natasha-balogun-6a79a7a2?">LinkedIn</a></li>
                <li className="transition-transform transform hover:translate-x-2"><a href="Instagram- 

https://www.instagram.com/natasha_balogun?igsh=MTk0Y2x2dnhnODFhdg%3D%3D&utm_source=qr">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-4">Resources</h2>
              <ul className="space-y-2">
                <li className="transition-transform transform hover:translate-x-2">
                  <a 
                    href="/blog"
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default link behavior
                      window.location.href = '/blog'; // Navigate to the blog page
                    }}
                  >
                    Growth Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white pt-4 flex flex-col md:flex-row justify-between items-center">
          <span>© 2024, Princess Natasha Momoh. All Rights Reserved.</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}