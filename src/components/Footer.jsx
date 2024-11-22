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
                <li className="transition-transform transform hover:translate-x-2">Content Strategy</li>
                <li className="transition-transform transform hover:translate-x-2">Content Writing</li>
                <li className="transition-transform transform hover:translate-x-2">Copywriting</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                <li className="transition-transform transform hover:translate-x-2">Contact Me</li>
                <li className="transition-transform transform hover:translate-x-2">About Me</li>
                <li className="transition-transform transform hover:translate-x-2">Portfolio</li>
                <li className="transition-transform transform hover:translate-x-2"><a href="/blog">Blog</a></li>
                <li className="transition-transform transform hover:translate-x-2">Services</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-4">Social</h2>
              <ul className="space-y-2">
                <li className="transition-transform transform hover:translate-x-2">LinkedIn</li>
                <li className="transition-transform transform hover:translate-x-2">Instagram</li>
                <li className="transition-transform transform hover:translate-x-2">Twitter</li>
                <li className="transition-transform transform hover:translate-x-2">Pinterest</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-4">Resources</h2>
              <ul className="space-y-2">
                <li className="transition-transform transform hover:translate-x-2">SEO Resources</li>
                <li className="transition-transform transform hover:translate-x-2">Strategy Resources</li>
                <li className="transition-transform transform hover:translate-x-2">Freelancing Resources</li>
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